"""
Extract SFI spec data from the 7 category pages into structured JSON.
This is the data pipeline for the Instant Spec Search feature.

Usage:
    python scripts/extract_sfi_specs.py

Output:
    _data/sfi_specs.json
"""

import re
import json
import os
from html.parser import HTMLParser

BASE_DIR = os.path.join(os.path.dirname(__file__), "..", "sfifoundation.com")
OUTPUT_PATH = os.path.join(os.path.dirname(__file__), "..", "_data", "sfi_specs.json")

CATEGORY_PAGES = {
    "Personal Protective Gear, Restraints & Nets": "protectivegearrestraintsnets/index.html",
    "Auto Racing": "autoracing/index.html",
    "Drag Racing": "drag-racing/index.html",
    "Drag Racing Chassis": "drag-racing-chassis/index.html",
    "Fuel Related": "fuel-related/index.html",
    "Boat Racing": "boat-racing/index.html",
    "Tractor Pulling & Chassis": "tractor-pulling/index.html",
}


def extract_specs_from_html(html_content, category):
    """Parse a category page and extract all spec entries."""
    specs = []

    # Find the main entry div content
    entry_match = re.search(r'<div class="entry">(.*?)</div>\s*</div>', html_content, re.DOTALL)
    if not entry_match:
        return specs

    entry_html = entry_match.group(1)

    # Split by <p> tags to get individual entries
    paragraphs = re.split(r'<p[^>]*>', entry_html)

    # Track current sub-category heading
    current_subcategory = ""

    for p in paragraphs:
        p = p.strip()
        if not p:
            continue

        # Check if this is a sub-category heading (bold text without a spec link)
        heading_match = re.match(r'^<strong>([^<]+)</strong>\s*</p>', p)
        if heading_match:
            current_subcategory = heading_match.group(1).strip()
            continue

        # Extract spec number(s) — needed for both formats
        spec_numbers = re.findall(r'SFI Spec ([\d.]+[A-Za-z]*)', p)
        if not spec_numbers:
            continue

        # Extract effective date
        date_match = re.search(r'Effective Date:\s*([^<]+)', p)
        effective_date = date_match.group(1).strip().rstrip(')') if date_match else ""

        # Format 1: "SFI Spec 2.1C Product Name..." (chassis pages — no PDF links)
        # Format 2: "Product Name\n<span>SFI Spec link | Manufacturers</span>"
        inline_match = re.match(r'^SFI Spec [\d.]+[A-Za-z]*\s+(.+?)(?:<br|$)', p)
        standard_match = re.match(r'^([^<]+?)(?:<br\s*/?>|\s*<span)', p)

        if inline_match:
            # Chassis-style: spec number is inline with product name
            product_name = inline_match.group(1).strip()
            # Clean HTML entities
            product_name = product_name.replace("&#8211;", "–").replace("&amp;", "&")
        elif standard_match:
            product_name = standard_match.group(1).strip()
            # Skip non-product paragraphs
            if not product_name or len(product_name) < 3:
                continue
            if product_name.startswith("SFI Spec") or product_name.startswith("Click") or product_name.startswith("For a"):
                continue
            if "establish uniform" in product_name or "category below" in product_name:
                continue
        else:
            continue

        # Extract spec PDF URLs
        spec_pdfs = re.findall(r'href="[^"]*/(Spec[^"]*\.pdf)"', p)

        # Extract manufacturer PDF URLs
        mfr_pdfs = re.findall(r'href="[^"]*/([\d.]+[A-Za-z]*\s*Manufacturers?\s*List\.pdf)"', p)

        # Extract products list PDF if present
        products_pdf = re.findall(r'href="[^"]*/(Current[\d.]+Products\.pdf)"', p)

        spec_entry = {
            "product_name": product_name,
            "category": category,
            "subcategory": current_subcategory,
            "spec_numbers": list(dict.fromkeys(spec_numbers)),
            "spec_pdfs": spec_pdfs,
            "manufacturer_pdfs": mfr_pdfs,
            "products_pdfs": products_pdf,
            "effective_date": effective_date,
        }
        specs.append(spec_entry)

    return specs


def main():
    all_specs = []

    for category, page_path in CATEGORY_PAGES.items():
        full_path = os.path.join(BASE_DIR, page_path)
        if not os.path.exists(full_path):
            print(f"WARNING: {full_path} not found, skipping")
            continue

        with open(full_path, "r", encoding="utf-8") as f:
            html = f.read()

        specs = extract_specs_from_html(html, category)
        print(f"{category}: found {len(specs)} specs")
        all_specs.extend(specs)

    # Sort by first spec number
    def spec_sort_key(s):
        if s["spec_numbers"]:
            parts = re.match(r'(\d+)\.?(\d*)', s["spec_numbers"][0])
            if parts:
                major = int(parts.group(1))
                minor = int(parts.group(2)) if parts.group(2) else 0
                return (major, minor)
        return (999, 999)

    all_specs.sort(key=spec_sort_key)

    # Write output
    os.makedirs(os.path.dirname(OUTPUT_PATH), exist_ok=True)
    with open(OUTPUT_PATH, "w", encoding="utf-8") as f:
        json.dump(all_specs, f, indent=2, ensure_ascii=False)

    print(f"\nTotal: {len(all_specs)} specs extracted")
    print(f"Output: {OUTPUT_PATH}")


if __name__ == "__main__":
    main()
