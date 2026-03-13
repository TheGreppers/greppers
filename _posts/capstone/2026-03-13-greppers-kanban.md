---
toc: true
layout: post
title: "Greppers Sprint Kanban — SFI Web Modernization"
description: "Detailed Kanban backlog for The Greppers' SFI Foundation web modernization prototype, organized by phase with team assignments and milestones."
permalink: /capstone/greppers/kanban/
---

<div class="sfi-kanban-header">
  <div class="sfi-kanban-badge">📋 Sprint Backlog</div>
  <h1 class="sfi-kanban-title">SFI Web Modernization — Kanban</h1>
  <p class="sfi-kanban-subtitle">The Greppers · CSP Capstone · Del Norte High School</p>

  <div class="sfi-kanban-legend">
    <span class="sfi-status-pill sfi-status--done">✅ Done</span>
    <span class="sfi-status-pill sfi-status--in-progress">🔄 In Progress</span>
    <span class="sfi-status-pill sfi-status--todo">📌 To Do</span>
  </div>
</div>

---

## 📅 Mandatory Milestones

| Date | Milestone |
|------|-----------|
| **Apr 13** | Data Structure Review with instructor |
| **Apr 15** | Prototype Demo to instructor |
| **Apr 15–24** | Chamber/CTE Pitch at Del Norte HS (A101) |
| **Apr 30** | **FINAL** AP CSP PPR Submission — must be "Final" in Digital Portfolio |
| **May 12–16** | AP CSP Exam |
| **May 27** | N@tM Showcase — Final Pitch to community |

---

## 🗂️ Phase 1 — Planning

### ✅ Done

<div class="sfi-issue-card sfi-issue--done">
  <div class="sfi-issue-header">
    <span class="sfi-issue-id">#1</span>
    <span class="sfi-issue-title">Research SFI Foundation requirements and existing infrastructure</span>
    <span class="sfi-issue-assignee">👥 Team</span>
  </div>
  <p class="sfi-issue-body">Survey all existing static SFI spec pages and PDFs. Document the 8 static pages that will be replaced and identify the data fields needed in the new system.</p>
  <div class="sfi-issue-labels">
    <span class="sfi-label sfi-label--planning">planning</span>
    <span class="sfi-label sfi-label--research">research</span>
  </div>
</div>

<div class="sfi-issue-card sfi-issue--done">
  <div class="sfi-issue-header">
    <span class="sfi-issue-id">#2</span>
    <span class="sfi-issue-title">Design SQLite schema — products, certifications, manufacturers, expiry tracking</span>
    <span class="sfi-issue-assignee">👤 Aaryav</span>
  </div>
  <p class="sfi-issue-body">Define all tables and relationships for the SQLite database: <code>products</code>, <code>certifications</code>, <code>manufacturers</code>, and expiry/status tracking columns. Schema must support the spec search and QR verification flows.</p>
  <div class="sfi-issue-labels">
    <span class="sfi-label sfi-label--database">database</span>
    <span class="sfi-label sfi-label--planning">planning</span>
  </div>
</div>

<div class="sfi-issue-card sfi-issue--done">
  <div class="sfi-issue-header">
    <span class="sfi-issue-id">#3</span>
    <span class="sfi-issue-title">Create mobile-first wireframes for spec search and QR scan flow</span>
    <span class="sfi-issue-assignee">👤 Aaryav</span>
  </div>
  <p class="sfi-issue-body">Produce low/mid-fidelity wireframes (mobile-first) for: (1) the Instant Spec Search page, and (2) the QR Certification Scan flow, including certificate detail view and expiry status.</p>
  <div class="sfi-issue-labels">
    <span class="sfi-label sfi-label--design">design</span>
    <span class="sfi-label sfi-label--mobile">mobile-first</span>
  </div>
</div>

### 🔄 In Progress

<div class="sfi-issue-card sfi-issue--in-progress">
  <div class="sfi-issue-header">
    <span class="sfi-issue-id">#4</span>
    <span class="sfi-issue-title">Parse SFI spec data from existing pages/PDFs into structured JSON/CSV</span>
    <span class="sfi-issue-assignee">👤 Aditya</span>
  </div>
  <p class="sfi-issue-body">Extract all SFI specification data from the existing static HTML pages and any available PDFs. Output a clean <code>sfi_specs.json</code> (and matching <code>sfi_specs.csv</code>) with fields: <code>spec_number</code>, <code>product_name</code>, <code>category</code>, <code>certification_date</code>, <code>expiry_date</code>, <code>manufacturer_id</code>. This structured dataset seeds the SQLite database and satisfies the AP CSP <strong>List/Dictionary complexity</strong> requirement.</p>
  <div class="sfi-issue-labels">
    <span class="sfi-label sfi-label--data">data</span>
    <span class="sfi-label sfi-label--apcsp">ap-csp</span>
    <span class="sfi-label sfi-label--planning">planning</span>
  </div>
  <div class="sfi-issue-milestone">🏁 Milestone: Apr 13 — Data Structure Review</div>
</div>

### 📌 To Do

<div class="sfi-issue-card sfi-issue--todo">
  <div class="sfi-issue-header">
    <span class="sfi-issue-id">#5</span>
    <span class="sfi-issue-title">Data Structure Review with instructor</span>
    <span class="sfi-issue-assignee">👥 Team</span>
  </div>
  <p class="sfi-issue-body">Present the parsed JSON/CSV data structure, SQLite schema, and wireframes to the instructor for feedback. Document all action items from the review session.</p>
  <div class="sfi-issue-labels">
    <span class="sfi-label sfi-label--milestone">milestone</span>
  </div>
  <div class="sfi-issue-milestone">🗓️ Due: April 13</div>
</div>

---

## ⚙️ Phase 2 — Core Development

### 🔄 In Progress

<div class="sfi-issue-card sfi-issue--in-progress">
  <div class="sfi-issue-header">
    <span class="sfi-issue-id">#6</span>
    <span class="sfi-issue-title">Set up Flask backend boilerplate</span>
    <span class="sfi-issue-assignee">👤 Dhyan</span>
  </div>
  <p class="sfi-issue-body">Initialize the Flask project structure: <code>app/__init__.py</code>, <code>config.py</code>, <code>run.py</code>, blueprints for <code>api</code> and <code>auth</code> modules. Include <code>requirements.txt</code> with Flask, Flask-SQLAlchemy, Flask-Login, and other needed packages.</p>
  <div class="sfi-issue-labels">
    <span class="sfi-label sfi-label--backend">backend</span>
    <span class="sfi-label sfi-label--flask">flask</span>
  </div>
</div>

<div class="sfi-issue-card sfi-issue--in-progress">
  <div class="sfi-issue-header">
    <span class="sfi-issue-id">#7</span>
    <span class="sfi-issue-title">Configure SQLite database with Flask-SQLAlchemy</span>
    <span class="sfi-issue-assignee">👤 Dhyan</span>
  </div>
  <p class="sfi-issue-body">Wire the SQLite database file to Flask via Flask-SQLAlchemy using the schema designed by Aaryav. Create SQLAlchemy model classes: <code>Product</code>, <code>Certification</code>, <code>Manufacturer</code>. Write a <code>seed_db.py</code> script that loads the JSON/CSV produced by Aditya.</p>
  <div class="sfi-issue-labels">
    <span class="sfi-label sfi-label--database">database</span>
    <span class="sfi-label sfi-label--backend">backend</span>
  </div>
</div>

### 📌 To Do

<div class="sfi-issue-card sfi-issue--todo">
  <div class="sfi-issue-header">
    <span class="sfi-issue-id">#8</span>
    <span class="sfi-issue-title">Create base API routing for the Instant Spec Search endpoint</span>
    <span class="sfi-issue-assignee">👤 Dhyan</span>
  </div>
  <p class="sfi-issue-body">Implement <code>GET /api/specs/search?q=&lt;query&gt;</code> endpoint inside the Flask <code>api</code> blueprint. The endpoint must accept a query parameter, iterate over the spec records (satisfying the AP CSP <strong>iteration</strong> requirement), and return a JSON list of matching specs. Apply selection logic (<code>if</code>/<code>elif</code>) to filter by category or expiry status.</p>
  <div class="sfi-issue-labels">
    <span class="sfi-label sfi-label--backend">backend</span>
    <span class="sfi-label sfi-label--api">api</span>
    <span class="sfi-label sfi-label--apcsp">ap-csp</span>
  </div>
</div>

<div class="sfi-issue-card sfi-issue--todo">
  <div class="sfi-issue-header">
    <span class="sfi-issue-id">#9</span>
    <span class="sfi-issue-title">Implement User Authentication (login, registration, session management)</span>
    <span class="sfi-issue-assignee">👥 Team</span>
  </div>
  <p class="sfi-issue-body">Add a <code>User</code> model with hashed passwords (bcrypt). Implement <code>POST /auth/register</code> and <code>POST /auth/login</code> endpoints using Flask-Login. Protect manufacturer self-service routes with <code>@login_required</code>. This fulfills the <strong>User Authentication</strong> core feature requirement.</p>
  <div class="sfi-issue-labels">
    <span class="sfi-label sfi-label--auth">auth</span>
    <span class="sfi-label sfi-label--core">core-feature</span>
    <span class="sfi-label sfi-label--database">database</span>
  </div>
</div>

<div class="sfi-issue-card sfi-issue--todo">
  <div class="sfi-issue-header">
    <span class="sfi-issue-id">#10</span>
    <span class="sfi-issue-title">Build QR Certification Scanning feature</span>
    <span class="sfi-issue-assignee">👥 Team</span>
  </div>
  <p class="sfi-issue-body">Implement a QR code generation endpoint (<code>GET /api/certs/&lt;cert_id&gt;/qr</code>) and a scan-landing page that displays live certification status (valid/expired/not-found). The lookup must query the SQLite database in real time — no static lists.</p>
  <div class="sfi-issue-labels">
    <span class="sfi-label sfi-label--feature">feature</span>
    <span class="sfi-label sfi-label--core">core-feature</span>
  </div>
</div>

<div class="sfi-issue-card sfi-issue--todo">
  <div class="sfi-issue-header">
    <span class="sfi-issue-id">#11</span>
    <span class="sfi-issue-title">Implement Manufacturer Self-Service portal</span>
    <span class="sfi-issue-assignee">👥 Team</span>
  </div>
  <p class="sfi-issue-body">Authenticated manufacturers can create, update, and delete their product listings via a simple CRUD UI. Backend routes: <code>POST /api/products</code>, <code>PUT /api/products/&lt;id&gt;</code>, <code>DELETE /api/products/&lt;id&gt;</code>. This replaces hours of manual staff HTML updates.</p>
  <div class="sfi-issue-labels">
    <span class="sfi-label sfi-label--feature">feature</span>
    <span class="sfi-label sfi-label--core">core-feature</span>
    <span class="sfi-label sfi-label--auth">auth</span>
  </div>
</div>

<div class="sfi-issue-card sfi-issue--todo">
  <div class="sfi-issue-header">
    <span class="sfi-issue-id">#12</span>
    <span class="sfi-issue-title">Configure Docker, docker-compose, and Nginx for deployment</span>
    <span class="sfi-issue-assignee">👥 Team</span>
  </div>
  <p class="sfi-issue-body">Write a <code>Dockerfile</code> for the Flask app, a <code>docker-compose.yml</code> that wires the app container to an Nginx reverse-proxy container, and an <code>nginx.conf</code> that serves the frontend and proxies <code>/api/*</code> to Flask. Ensure the SQLite volume is persisted between restarts.</p>
  <div class="sfi-issue-labels">
    <span class="sfi-label sfi-label--deploy">deployment</span>
    <span class="sfi-label sfi-label--devops">devops</span>
  </div>
</div>

<div class="sfi-issue-card sfi-issue--todo">
  <div class="sfi-issue-header">
    <span class="sfi-issue-id">#13</span>
    <span class="sfi-issue-title">Prototype Demo to instructor</span>
    <span class="sfi-issue-assignee">👥 Team</span>
  </div>
  <p class="sfi-issue-body">Prepare a working end-to-end demo showing: spec search returning live results, QR scan verifying a cert, and user login protecting the manufacturer portal. Deploy to the staging environment before the demo.</p>
  <div class="sfi-issue-labels">
    <span class="sfi-label sfi-label--milestone">milestone</span>
  </div>
  <div class="sfi-issue-milestone">🗓️ Due: April 15</div>
</div>

---

## 📚 Phase 3 — AP CSP Compliance

### 📌 To Do

<div class="sfi-issue-card sfi-issue--todo">
  <div class="sfi-issue-header">
    <span class="sfi-issue-id">#14</span>
    <span class="sfi-issue-title">Implement student-developed procedure with parameter, sequencing, selection, and iteration</span>
    <span class="sfi-issue-assignee">👤 Dhyan</span>
  </div>
  <p class="sfi-issue-body">Write a named Python function (e.g. <code>search_specs(query, category=None)</code>) that satisfies all four AP CSP requirements in one procedure:<br>
  • <strong>Parameter</strong>: <code>query</code> string and optional <code>category</code> filter<br>
  • <strong>Sequencing</strong>: ordered steps — validate input → query DB → filter results → return list<br>
  • <strong>Selection</strong>: <code>if category:</code> apply category filter; <code>if not results:</code> return empty list with message<br>
  • <strong>Iteration</strong>: loop over result rows to build the response dictionary list<br>
  Document the procedure with inline comments for the PPR write-up.</p>
  <div class="sfi-issue-labels">
    <span class="sfi-label sfi-label--apcsp">ap-csp</span>
    <span class="sfi-label sfi-label--backend">backend</span>
  </div>
</div>

<div class="sfi-issue-card sfi-issue--todo">
  <div class="sfi-issue-header">
    <span class="sfi-issue-id">#15</span>
    <span class="sfi-issue-title">Use List/Dictionary to manage SFI spec data — complexity management</span>
    <span class="sfi-issue-assignee">👤 Aditya</span>
  </div>
  <p class="sfi-issue-body">Demonstrate AP CSP <strong>List/Dictionary complexity</strong> by storing the parsed SFI spec data in a Python list of dictionaries (e.g. <code>specs = [{"spec_number": "3.3/5", "product_name": "Helmet", ...}, ...]</code>). Show that removing this data structure would make the program's behavior fundamentally different (required for the PPR).</p>
  <div class="sfi-issue-labels">
    <span class="sfi-label sfi-label--apcsp">ap-csp</span>
    <span class="sfi-label sfi-label--data">data</span>
  </div>
</div>

<div class="sfi-issue-card sfi-issue--todo">
  <div class="sfi-issue-header">
    <span class="sfi-issue-id">#16</span>
    <span class="sfi-issue-title">AP CSP PPR Submission — set to "Final" in Digital Portfolio</span>
    <span class="sfi-issue-assignee">👥 Team</span>
  </div>
  <p class="sfi-issue-body">Complete and submit the AP CSP Performance Task (Personal Project Reference) through the College Board Digital Portfolio. The submission <strong>must</strong> be marked <strong>"Final"</strong> before the deadline. Include written responses for all four PPR prompts referencing the <code>search_specs</code> procedure and the SFI spec data structure.</p>
  <div class="sfi-issue-labels">
    <span class="sfi-label sfi-label--apcsp">ap-csp</span>
    <span class="sfi-label sfi-label--milestone">milestone</span>
  </div>
  <div class="sfi-issue-milestone">🗓️ Due: April 30 — HARD DEADLINE</div>
</div>

<div class="sfi-issue-card sfi-issue--todo">
  <div class="sfi-issue-header">
    <span class="sfi-issue-id">#17</span>
    <span class="sfi-issue-title">AP CSP Exam preparation</span>
    <span class="sfi-issue-assignee">👥 Team</span>
  </div>
  <p class="sfi-issue-body">Review College Board CSP exam topics. Practice multiple-choice questions covering algorithms, abstraction, data, the internet, and cybersecurity. Use the project's own codebase as study material for procedural abstraction and data management questions.</p>
  <div class="sfi-issue-labels">
    <span class="sfi-label sfi-label--apcsp">ap-csp</span>
    <span class="sfi-label sfi-label--milestone">milestone</span>
  </div>
  <div class="sfi-issue-milestone">🗓️ Due: May 12–16</div>
</div>

---

## ✨ Phase 4 — Polish

### 🔄 In Progress

<div class="sfi-issue-card sfi-issue--in-progress">
  <div class="sfi-issue-header">
    <span class="sfi-issue-id">#18</span>
    <span class="sfi-issue-title">Polish the primary SFI infographic page styling</span>
    <span class="sfi-issue-assignee">👤 Aditya</span>
  </div>
  <p class="sfi-issue-body">Refine the amber-themed SFI infographic at <code>/capstone/greppers/</code>: tighten spacing, improve metric cards, ensure all text is legible on both dark and light system themes. Cross-check against WCAG 2.1 AA contrast ratios.</p>
  <div class="sfi-issue-labels">
    <span class="sfi-label sfi-label--design">design</span>
    <span class="sfi-label sfi-label--ui">ui</span>
    <span class="sfi-label sfi-label--accessibility">accessibility</span>
  </div>
</div>

### 📌 To Do

<div class="sfi-issue-card sfi-issue--todo">
  <div class="sfi-issue-header">
    <span class="sfi-issue-id">#19</span>
    <span class="sfi-issue-title">Implement Mobile-First responsive UI for spec search and QR scan pages</span>
    <span class="sfi-issue-assignee">👤 Aaryav</span>
  </div>
  <p class="sfi-issue-body">Translate Aaryav's wireframes into production HTML/CSS. All pages must be fully usable on a 375 px mobile viewport — the target "pit-lane device" form factor. Use CSS Grid with <code>clamp()</code> and media queries (consistent with existing <code>sfi-card-grid</code> breakpoints). This fulfills the <strong>Modern UI/UX (Mobile-first/Responsive)</strong> core feature requirement.</p>
  <div class="sfi-issue-labels">
    <span class="sfi-label sfi-label--ui">ui</span>
    <span class="sfi-label sfi-label--mobile">mobile-first</span>
    <span class="sfi-label sfi-label--core">core-feature</span>
  </div>
</div>

<div class="sfi-issue-card sfi-issue--todo">
  <div class="sfi-issue-header">
    <span class="sfi-issue-id">#20</span>
    <span class="sfi-issue-title">Prepare Chamber/CTE Pitch at Del Norte HS (A101)</span>
    <span class="sfi-issue-assignee">👥 Team</span>
  </div>
  <p class="sfi-issue-body">Build the slide deck and live demo script for the Chamber/CTE audience. Highlight the real-world impact: 8 static pages → 1 dynamic search, ~20 hrs/wk staff savings, counterfeit-prevention via live QR verification. Practice the 5-minute pitch at least twice before the event.</p>
  <div class="sfi-issue-labels">
    <span class="sfi-label sfi-label--milestone">milestone</span>
    <span class="sfi-label sfi-label--pitch">pitch</span>
  </div>
  <div class="sfi-issue-milestone">🗓️ Due: April 15–24</div>
</div>

<div class="sfi-issue-card sfi-issue--todo">
  <div class="sfi-issue-header">
    <span class="sfi-issue-id">#21</span>
    <span class="sfi-issue-title">N@tM Showcase — Final Community Pitch</span>
    <span class="sfi-issue-assignee">👥 Team</span>
  </div>
  <p class="sfi-issue-body">Prepare the final project showcase for Night at the Museum. The deployed app must be live and accessible. Create a poster that visualizes the impact metrics (lookup time, mobile accessibility, pages replaced). Plan a 3-minute interactive demo showing all three core features: Spec Search, QR Scan, and Manufacturer Portal.</p>
  <div class="sfi-issue-labels">
    <span class="sfi-label sfi-label--milestone">milestone</span>
    <span class="sfi-label sfi-label--pitch">pitch</span>
  </div>
  <div class="sfi-issue-milestone">🗓️ Due: May 27</div>
</div>

---

## 📊 Board Summary

| Phase | Done | In Progress | To Do | Total |
|-------|------|-------------|-------|-------|
| Planning | 3 | 1 | 1 | 5 |
| Core Dev | 0 | 2 | 6 | 8 |
| AP Compliance | 0 | 0 | 4 | 4 |
| Polish | 0 | 1 | 3 | 4 |
| **Total** | **3** | **4** | **14** | **21** |

---

*Back to [Greppers Capstone page](/capstone/greppers/)*
