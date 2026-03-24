---
layout: post
title: SFI Specs Database
permalink: /sfi-specs/
search_exclude: true
---

<style>
  .sfi-search-box {
    width: 100%;
    padding: 12px 16px;
    font-size: 1rem;
    border: 2px solid #444;
    border-radius: 8px;
    background: #1A1A2E;
    color: #eee;
    margin-bottom: 8px;
  }
  .sfi-search-box:focus {
    outline: none;
    border-color: #F0A500;
  }
  .sfi-filter-row {
    display: flex;
    gap: 8px;
    margin-bottom: 16px;
    flex-wrap: wrap;
  }
  .sfi-filter-btn {
    padding: 6px 14px;
    border: 1px solid #444;
    border-radius: 20px;
    background: transparent;
    color: #ccc;
    cursor: pointer;
    font-size: 0.85rem;
  }
  .sfi-filter-btn.active {
    background: #F0A500;
    color: #000;
    border-color: #F0A500;
  }
  .sfi-count {
    color: #888;
    font-size: 0.9rem;
    margin-bottom: 12px;
  }
  .sfi-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.9rem;
  }
  .sfi-table th {
    text-align: left;
    padding: 10px 8px;
    border-bottom: 2px solid #F0A500;
    color: #F0A500;
    position: sticky;
    top: 0;
    background: #0F0F23;
  }
  .sfi-table td {
    padding: 8px;
    border-bottom: 1px solid #2A2A3E;
    color: #ddd;
  }
  .sfi-table tr:hover td {
    background: #1A1A3E;
  }
  .sfi-spec-num {
    font-weight: bold;
    color: #F0A500;
    white-space: nowrap;
  }
  .sfi-category-tag {
    display: inline-block;
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 0.75rem;
    background: #2A2A4E;
    color: #aaa;
  }
  .sfi-pdf-link {
    color: #5BC0EB;
    text-decoration: none;
    font-size: 0.8rem;
  }
  .sfi-pdf-link:hover {
    text-decoration: underline;
  }
  .sfi-no-results {
    text-align: center;
    color: #666;
    padding: 40px;
    font-size: 1.1rem;
  }
</style>

<input type="text" class="sfi-search-box" id="sfiSearch" placeholder="Search specs... (e.g. helmet, 1.1, drag racing)">

<div class="sfi-filter-row" id="sfiFilters">
  <button class="sfi-filter-btn active" data-category="all">All</button>
</div>

<div class="sfi-count" id="sfiCount"></div>

<table class="sfi-table">
  <thead>
    <tr>
      <th>Spec #</th>
      <th>Product</th>
      <th>Category</th>
      <th>Effective Date</th>
      <th>PDF</th>
    </tr>
  </thead>
  <tbody id="sfiBody">
  </tbody>
</table>

<div class="sfi-no-results" id="sfiNoResults" style="display:none;">
  No specs match your search.
</div>

<script>
  // Load specs from Jekyll data
  const specs = [
    {% for spec in site.data.sfi_specs %}
    {
      product_name: {{ spec.product_name | jsonify }},
      category: {{ spec.category | jsonify }},
      subcategory: {{ spec.subcategory | jsonify }},
      spec_numbers: {{ spec.spec_numbers | jsonify }},
      spec_pdfs: {{ spec.spec_pdfs | jsonify }},
      manufacturer_pdfs: {{ spec.manufacturer_pdfs | jsonify }},
      effective_date: {{ spec.effective_date | jsonify }}
    }{% unless forloop.last %},{% endunless %}
    {% endfor %}
  ];

  // Build category filter buttons
  const categories = [...new Set(specs.map(s => s.category))].sort();
  const filterRow = document.getElementById('sfiFilters');
  categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'sfi-filter-btn';
    btn.dataset.category = cat;
    btn.textContent = cat;
    filterRow.appendChild(btn);
  });

  let activeCategory = 'all';

  // Filter and render
  function render() {
    const query = document.getElementById('sfiSearch').value.toLowerCase().trim();
    const tbody = document.getElementById('sfiBody');
    const noResults = document.getElementById('sfiNoResults');
    const countEl = document.getElementById('sfiCount');

    const filtered = specs.filter(s => {
      // Category filter
      if (activeCategory !== 'all' && s.category !== activeCategory) return false;
      // Search filter
      if (query) {
        const haystack = (
          s.product_name + ' ' +
          s.spec_numbers.join(' ') + ' ' +
          s.category + ' ' +
          s.subcategory
        ).toLowerCase();
        return haystack.includes(query);
      }
      return true;
    });

    countEl.textContent = `Showing ${filtered.length} of ${specs.length} specs`;

    if (filtered.length === 0) {
      tbody.innerHTML = '';
      noResults.style.display = 'block';
      return;
    }
    noResults.style.display = 'none';

    tbody.innerHTML = filtered.map(s => {
      const specNum = s.spec_numbers.join(', ');
      const pdfLinks = [];
      if (s.spec_pdfs && s.spec_pdfs.length > 0) {
        s.spec_pdfs.forEach(pdf => {
          pdfLinks.push(`<a class="sfi-pdf-link" href="https://www.sfifoundation.com/wp-content/pdfs/${pdf}" target="_blank">Spec</a>`);
        });
      }
      if (s.manufacturer_pdfs && s.manufacturer_pdfs.length > 0) {
        s.manufacturer_pdfs.forEach(pdf => {
          pdfLinks.push(`<a class="sfi-pdf-link" href="https://www.sfifoundation.com/wp-content/pdfs/${pdf}" target="_blank">Mfrs</a>`);
        });
      }
      return `<tr>
        <td class="sfi-spec-num">SFI ${specNum}</td>
        <td>${s.product_name}</td>
        <td><span class="sfi-category-tag">${s.category}</span></td>
        <td>${s.effective_date || '—'}</td>
        <td>${pdfLinks.join(' · ') || '—'}</td>
      </tr>`;
    }).join('');
  }

  // Event listeners
  document.getElementById('sfiSearch').addEventListener('input', render);
  filterRow.addEventListener('click', e => {
    if (!e.target.classList.contains('sfi-filter-btn')) return;
    document.querySelectorAll('.sfi-filter-btn').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    activeCategory = e.target.dataset.category;
    render();
  });

  // Initial render
  render();
</script>