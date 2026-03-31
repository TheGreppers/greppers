---
layout: post
title: SFI Part Detection
permalink: /sfi-specs/
search_exclude: true
---

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Oswald:wght@400;500;600;700&display=swap" rel="stylesheet">

<style>
/* ── Reset & Variables ─────────────────────────── */
:root {
  --sfi-dark: #0d1117;
  --sfi-surface: #161b27;
  --sfi-surface2: #1e2535;
  --sfi-border: rgba(240,165,0,0.15);
  --sfi-gold: #F0A500;
  --sfi-cyan: #00d4ff;
  --sfi-text: #e6edf3;
  --sfi-muted: #8b949e;
  --sfi-green: #3fb950;
  --sfi-red: #f85149;
}

/* ── Full-width breakout ───────────────────────── */
.sfi-full {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}

/* ── Hero Section ──────────────────────────────── */
.sfi-hero {
  background: linear-gradient(135deg, #0d1117 0%, #1a1025 40%, #0d1117 100%);
  padding: 80px 20px 60px;
  text-align: center;
  position: relative;
  overflow: hidden;
}
.sfi-hero::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(ellipse at 30% 50%, rgba(240,165,0,0.06) 0%, transparent 60%),
              radial-gradient(ellipse at 70% 50%, rgba(0,212,255,0.04) 0%, transparent 60%);
  animation: sfiPulse 8s ease-in-out infinite alternate;
}
@keyframes sfiPulse {
  0% { transform: scale(1) rotate(0deg); }
  100% { transform: scale(1.05) rotate(2deg); }
}
.sfi-hero-content { position: relative; z-index: 1; max-width: 800px; margin: 0 auto; }
.sfi-hero h1 {
  font-family: 'Oswald', sans-serif;
  font-size: 3.5rem;
  font-weight: 700;
  color: #fff;
  margin: 0 0 8px;
  letter-spacing: 2px;
  text-transform: uppercase;
}
.sfi-hero h1 span { color: var(--sfi-gold); }
.sfi-hero-tag {
  font-family: 'Inter', sans-serif;
  font-size: 1.15rem;
  color: var(--sfi-muted);
  margin-bottom: 32px;
  line-height: 1.6;
}
.sfi-hero-btns { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
.sfi-btn {
  font-family: 'Inter', sans-serif;
  padding: 14px 32px;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s;
  border: none;
}
.sfi-btn-primary {
  background: linear-gradient(135deg, var(--sfi-gold), #d49400);
  color: #000;
}
.sfi-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(240,165,0,0.3); }
.sfi-btn-secondary {
  background: transparent;
  color: var(--sfi-cyan);
  border: 2px solid var(--sfi-cyan);
}
.sfi-btn-secondary:hover { background: rgba(0,212,255,0.1); transform: translateY(-2px); }

/* ── Stats Bar ─────────────────────────────────── */
.sfi-stats-bar {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 16px;
  max-width: 900px;
  margin: -30px auto 40px;
  padding: 0 20px;
  position: relative;
  z-index: 2;
}
.sfi-stat-card {
  background: rgba(22,27,39,0.85);
  backdrop-filter: blur(12px);
  border: 1px solid var(--sfi-border);
  border-radius: 14px;
  padding: 20px 16px;
  text-align: center;
  transition: transform 0.2s, border-color 0.2s;
}
.sfi-stat-card:hover { transform: translateY(-3px); border-color: var(--sfi-gold); }
.sfi-stat-val {
  font-family: 'Oswald', sans-serif;
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--sfi-gold);
}
.sfi-stat-label {
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  color: var(--sfi-muted);
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-top: 4px;
}

/* ── Section Containers ────────────────────────── */
.sfi-section {
  max-width: 1000px;
  margin: 0 auto 48px;
  padding: 0 20px;
}
.sfi-section-title {
  font-family: 'Oswald', sans-serif;
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--sfi-gold);
  margin-bottom: 20px;
  padding-bottom: 8px;
  border-bottom: 2px solid rgba(240,165,0,0.2);
}

/* ── ML Classifier ─────────────────────────────── */
.sfi-classify-wrap {
  background: rgba(22,27,39,0.7);
  backdrop-filter: blur(12px);
  border: 1px solid var(--sfi-border);
  border-radius: 16px;
  padding: 32px;
}
.sfi-classify-input-row { display: flex; gap: 12px; margin-bottom: 20px; }
.sfi-classify-input {
  flex: 1;
  padding: 16px 20px;
  font-family: 'Inter', sans-serif;
  font-size: 1.05rem;
  border: 2px solid rgba(240,165,0,0.2);
  border-radius: 12px;
  background: var(--sfi-dark);
  color: var(--sfi-text);
  transition: border-color 0.2s;
}
.sfi-classify-input:focus { outline: none; border-color: var(--sfi-gold); }
.sfi-classify-input::placeholder { color: #555; }
.sfi-classify-btn {
  padding: 16px 28px;
  background: linear-gradient(135deg, var(--sfi-gold), #d49400);
  color: #000;
  border: none;
  border-radius: 12px;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;
  white-space: nowrap;
}
.sfi-classify-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(240,165,0,0.3); }
.sfi-classify-hint {
  color: var(--sfi-muted);
  font-size: 0.85rem;
  margin-bottom: 16px;
  font-family: 'Inter', sans-serif;
}
.sfi-result-count {
  color: var(--sfi-muted);
  font-size: 0.9rem;
  margin-bottom: 12px;
  font-family: 'Inter', sans-serif;
}

/* ── Result Cards ──────────────────────────────── */
.sfi-result-card {
  background: var(--sfi-surface);
  border: 1px solid rgba(240,165,0,0.1);
  border-radius: 12px;
  padding: 16px 20px;
  margin-bottom: 10px;
  transition: border-color 0.2s;
}
.sfi-result-card:hover { border-color: var(--sfi-gold); }
.sfi-result-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}
.sfi-result-title {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  color: var(--sfi-gold);
  font-size: 1rem;
}
.sfi-result-conf {
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  color: var(--sfi-cyan);
  font-weight: 600;
}
.sfi-result-name {
  font-family: 'Inter', sans-serif;
  color: var(--sfi-text);
  font-size: 0.95rem;
  margin-bottom: 6px;
}
.sfi-result-meta {
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
}
.sfi-cat-badge {
  display: inline-block;
  padding: 3px 10px;
  border-radius: 6px;
  font-size: 0.7rem;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  background: rgba(0,212,255,0.1);
  color: var(--sfi-cyan);
  border: 1px solid rgba(0,212,255,0.2);
}
.sfi-pdf-link {
  color: var(--sfi-cyan);
  text-decoration: none;
  font-size: 0.8rem;
  font-family: 'Inter', sans-serif;
}
.sfi-pdf-link:hover { text-decoration: underline; }
.sfi-conf-bar {
  height: 4px;
  border-radius: 2px;
  background: rgba(240,165,0,0.15);
  margin-top: 8px;
  overflow: hidden;
}
.sfi-conf-fill {
  height: 100%;
  border-radius: 2px;
  background: linear-gradient(90deg, var(--sfi-gold), var(--sfi-cyan));
  transition: width 0.5s ease;
}

/* ── Spec Search ───────────────────────────────── */
.sfi-search-box {
  width: 100%;
  padding: 14px 18px;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  border: 2px solid rgba(240,165,0,0.2);
  border-radius: 12px;
  background: var(--sfi-dark);
  color: var(--sfi-text);
  margin-bottom: 12px;
  box-sizing: border-box;
}
.sfi-search-box:focus { outline: none; border-color: var(--sfi-gold); }
.sfi-filter-row { display: flex; gap: 8px; margin-bottom: 16px; flex-wrap: wrap; }
.sfi-filter-btn {
  padding: 6px 16px;
  border: 1px solid rgba(240,165,0,0.2);
  border-radius: 20px;
  background: transparent;
  color: var(--sfi-muted);
  cursor: pointer;
  font-size: 0.8rem;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  transition: all 0.2s;
}
.sfi-filter-btn:hover { border-color: var(--sfi-gold); color: var(--sfi-text); }
.sfi-filter-btn.active { background: var(--sfi-gold); color: #000; border-color: var(--sfi-gold); }
.sfi-count {
  color: var(--sfi-muted);
  font-size: 0.85rem;
  margin-bottom: 12px;
  font-family: 'Inter', sans-serif;
}
.sfi-table {
  width: 100%;
  border-collapse: collapse;
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
}
.sfi-table th {
  text-align: left;
  padding: 12px 10px;
  border-bottom: 2px solid var(--sfi-gold);
  color: var(--sfi-gold);
  position: sticky;
  top: 0;
  background: var(--sfi-dark);
  font-weight: 600;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.sfi-table td {
  padding: 10px;
  border-bottom: 1px solid rgba(240,165,0,0.08);
  color: var(--sfi-text);
}
.sfi-table tr:hover td { background: rgba(240,165,0,0.04); }
.sfi-spec-num { font-weight: 700; color: var(--sfi-gold); white-space: nowrap; }
.sfi-no-results {
  text-align: center;
  color: var(--sfi-muted);
  padding: 40px;
  font-size: 1rem;
  font-family: 'Inter', sans-serif;
}

/* ── Categories Grid ───────────────────────────── */
.sfi-cat-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 14px;
}
.sfi-cat-card {
  background: rgba(22,27,39,0.7);
  backdrop-filter: blur(8px);
  border: 1px solid var(--sfi-border);
  border-radius: 12px;
  padding: 20px;
  cursor: pointer;
  transition: all 0.25s;
  text-align: center;
}
.sfi-cat-card:hover {
  border-color: var(--sfi-gold);
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.3);
}
.sfi-cat-icon { font-size: 2rem; margin-bottom: 8px; }
.sfi-cat-name {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  color: var(--sfi-text);
  font-size: 0.9rem;
  margin-bottom: 4px;
}
.sfi-cat-count {
  font-family: 'Inter', sans-serif;
  color: var(--sfi-muted);
  font-size: 0.75rem;
}

/* ── About Section ─────────────────────────────── */
.sfi-about-card {
  background: rgba(22,27,39,0.7);
  backdrop-filter: blur(12px);
  border: 1px solid var(--sfi-border);
  border-radius: 16px;
  padding: 32px;
}
.sfi-about-card p {
  font-family: 'Inter', sans-serif;
  color: var(--sfi-muted);
  line-height: 1.7;
  font-size: 0.95rem;
  margin-bottom: 12px;
}
.sfi-about-card a { color: var(--sfi-cyan); text-decoration: none; }
.sfi-about-card a:hover { text-decoration: underline; }

/* ── Admin Accordion ───────────────────────────── */
.sfi-admin-toggle {
  width: 100%;
  padding: 14px 20px;
  background: var(--sfi-surface);
  border: 1px solid var(--sfi-border);
  border-radius: 12px;
  color: var(--sfi-gold);
  font-family: 'Oswald', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  text-align: left;
  transition: background 0.2s;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.sfi-admin-toggle:hover { background: var(--sfi-surface2); }
.sfi-admin-body {
  display: none;
  margin-top: 16px;
}
.sfi-admin-body.open { display: block; }
.admin-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 12px;
  margin-bottom: 24px;
}
.admin-stat {
  background: var(--sfi-surface);
  border: 1px solid var(--sfi-border);
  border-radius: 10px;
  padding: 16px;
  text-align: center;
}
.admin-stat-val { font-family: 'Oswald', sans-serif; font-size: 1.8rem; font-weight: 800; color: var(--sfi-gold); }
.admin-stat-label { color: var(--sfi-muted); font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1px; font-family: 'Inter', sans-serif; }
.admin-form {
  background: var(--sfi-surface);
  border: 1px solid var(--sfi-border);
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
}
.admin-form h3 { color: var(--sfi-gold); margin: 0 0 16px; font-size: 1.1rem; font-family: 'Inter', sans-serif; }
.admin-row { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 10px; }
.admin-field {
  padding: 10px 12px;
  border: 1px solid rgba(240,165,0,0.15);
  border-radius: 8px;
  background: var(--sfi-dark);
  color: var(--sfi-text);
  font-size: 0.9rem;
  width: 100%;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
}
.admin-field:focus { outline: none; border-color: var(--sfi-gold); }
.admin-field::placeholder { color: #555; }
.admin-actions { display: flex; gap: 8px; margin-top: 12px; }
.admin-btn {
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  background: var(--sfi-gold);
  color: #000;
  font-weight: 700;
  cursor: pointer;
  font-size: 0.85rem;
  font-family: 'Inter', sans-serif;
  transition: background 0.2s;
}
.admin-btn:hover { background: #d49400; }
.admin-btn-danger {
  padding: 8px 16px;
  border: 1px solid var(--sfi-red);
  border-radius: 8px;
  background: transparent;
  color: var(--sfi-red);
  font-weight: 700;
  cursor: pointer;
  font-size: 0.8rem;
  font-family: 'Inter', sans-serif;
  transition: all 0.2s;
}
.admin-btn-danger:hover { background: var(--sfi-red); color: #fff; }
.admin-msg {
  padding: 10px 14px;
  border-radius: 8px;
  margin-bottom: 12px;
  font-size: 0.9rem;
  display: none;
  font-family: 'Inter', sans-serif;
}
.admin-msg.success { display: block; background: rgba(63,185,80,0.12); color: var(--sfi-green); border: 1px solid rgba(63,185,80,0.25); }
.admin-msg.error { display: block; background: rgba(248,81,73,0.12); color: var(--sfi-red); border: 1px solid rgba(248,81,73,0.25); }

/* ── Loading Spinner ───────────────────────────── */
.sfi-spinner {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 3px solid rgba(240,165,0,0.2);
  border-top-color: var(--sfi-gold);
  border-radius: 50%;
  animation: sfiSpin 0.6s linear infinite;
}
@keyframes sfiSpin { to { transform: rotate(360deg); } }

/* ── Footer ────────────────────────────────────── */
.sfi-footer {
  text-align: center;
  padding: 40px 20px;
  color: var(--sfi-muted);
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  border-top: 1px solid var(--sfi-border);
}
.sfi-footer a { color: var(--sfi-cyan); text-decoration: none; }
.sfi-footer a:hover { text-decoration: underline; }

/* ── Responsive ────────────────────────────────── */
@media (max-width: 600px) {
  .sfi-hero h1 { font-size: 2.2rem; }
  .sfi-classify-input-row { flex-direction: column; }
  .sfi-stats-bar { grid-template-columns: repeat(2, 1fr); }
  .admin-row { grid-template-columns: 1fr; }
}
</style>

<!-- ═══════════════════════════════════════════════════
     HERO SECTION
     ═══════════════════════════════════════════════════ -->
<div class="sfi-full">
  <div class="sfi-hero">
    <div class="sfi-hero-content">
      <h1>SFI <span>Part Detection</span></h1>
      <p class="sfi-hero-tag">
        Identify racing safety specifications instantly using machine learning.<br>
        Search 100+ SFI specs across drag racing, auto racing, boat racing, and more.
      </p>
      <div class="sfi-hero-btns">
        <a href="#classify" class="sfi-btn sfi-btn-primary">Classify a Part</a>
        <a href="#search" class="sfi-btn sfi-btn-secondary">Browse All Specs</a>
      </div>
    </div>
  </div>
</div>

<!-- ═══════════════════════════════════════════════════
     STATS BAR
     ═══════════════════════════════════════════════════ -->
<div class="sfi-stats-bar" id="statsBar">
  <div class="sfi-stat-card">
    <div class="sfi-stat-val" id="statSpecs">—</div>
    <div class="sfi-stat-label">Total Specs</div>
  </div>
  <div class="sfi-stat-card">
    <div class="sfi-stat-val" id="statCats">—</div>
    <div class="sfi-stat-label">Categories</div>
  </div>
  <div class="sfi-stat-card">
    <div class="sfi-stat-val" id="statSubs">—</div>
    <div class="sfi-stat-label">Subcategories</div>
  </div>
  <div class="sfi-stat-card">
    <div class="sfi-stat-val" id="statModel">—</div>
    <div class="sfi-stat-label">ML Accuracy</div>
  </div>
</div>

<!-- ═══════════════════════════════════════════════════
     ML PART CLASSIFIER
     ═══════════════════════════════════════════════════ -->
<div class="sfi-section" id="classify">
  <h2 class="sfi-section-title">ML Part Classifier</h2>
  <div class="sfi-classify-wrap">
    <p class="sfi-classify-hint">
      Describe a racing part and our ML model will identify the matching SFI specifications with confidence scores.
    </p>
    <div class="sfi-classify-input-row">
      <input type="text" class="sfi-classify-input" id="classifyInput"
             placeholder="e.g. fire resistant racing helmet, turbocharger, fuel cell, roll cage...">
      <button class="sfi-classify-btn" id="classifyBtn">Classify</button>
    </div>
    <div class="sfi-result-count" id="classifyCount"></div>
    <div id="classifyResults"></div>
  </div>
</div>

<!-- ═══════════════════════════════════════════════════
     SPEC SEARCH
     ═══════════════════════════════════════════════════ -->
<div class="sfi-section" id="search">
  <h2 class="sfi-section-title">Specification Database</h2>

  <input type="text" class="sfi-search-box" id="sfiSearch"
         placeholder="Search specs... (e.g. helmet, 1.1, drag racing, clutch)">

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
        <th>Date</th>
        <th>PDF</th>
      </tr>
    </thead>
    <tbody id="sfiBody"></tbody>
  </table>

  <div class="sfi-no-results" id="sfiNoResults" style="display:none;">
    No specs match your search.
  </div>
</div>

<!-- ═══════════════════════════════════════════════════
     CATEGORIES GRID
     ═══════════════════════════════════════════════════ -->
<div class="sfi-section" id="categories">
  <h2 class="sfi-section-title">Browse by Category</h2>
  <div class="sfi-cat-grid" id="catGrid"></div>
</div>

<!-- ═══════════════════════════════════════════════════
     ABOUT
     ═══════════════════════════════════════════════════ -->
<div class="sfi-section">
  <h2 class="sfi-section-title">About SFI Foundation</h2>
  <div class="sfi-about-card">
    <p>
      The <strong>SFI Foundation</strong> (originally the SEMA Foundation, Inc.) was established in 1978 as a
      nonprofit organization to develop and administer quality assurance programs for the motorsports
      aftermarket. SFI specifications cover safety equipment used across drag racing, auto racing,
      boat racing, tractor pulling, and more.
    </p>
    <p>
      Each specification number corresponds to a specific type of racing equipment — from driver suits
      and helmets to roll cages, fuel cells, supercharger restraints, and turbochargers. Our ML model
      can identify the correct specification from a plain-text description of any part.
    </p>
    <p>
      Learn more at <a href="https://www.sfifoundation.com" target="_blank">sfifoundation.com</a>
    </p>
  </div>
</div>

<!-- ═══════════════════════════════════════════════════
     ADMIN PANEL (accordion)
     ═══════════════════════════════════════════════════ -->
<div class="sfi-section">
  <button class="sfi-admin-toggle" id="adminToggle">
    Admin Panel <span id="adminArrow">&#9654;</span>
  </button>
  <div class="sfi-admin-body" id="adminBody">
    <div id="adminMsg" class="admin-msg"></div>
    <div class="admin-stats" id="adminStats"></div>

    <div class="admin-form">
      <h3 id="formTitle">Add New Specification</h3>
      <input type="hidden" id="editId">
      <div class="admin-row">
        <input class="admin-field" id="fProduct" placeholder="Product name *">
        <input class="admin-field" id="fSpecNum" placeholder="Spec number (e.g. 3.3) *">
      </div>
      <div class="admin-row">
        <input class="admin-field" id="fCategory" placeholder="Category *">
        <input class="admin-field" id="fSubcategory" placeholder="Subcategory">
      </div>
      <div class="admin-row">
        <input class="admin-field" id="fEffDate" placeholder="Effective date">
        <input class="admin-field" id="fSpecPdf" placeholder="Spec PDF filename">
      </div>
      <div class="admin-row">
        <input class="admin-field" id="fMfrPdf" placeholder="Manufacturer PDF">
        <input class="admin-field" id="fProdPdf" placeholder="Products PDF">
      </div>
      <div class="admin-actions">
        <button class="admin-btn" id="saveBtn">Save Spec</button>
        <button class="admin-btn-danger" id="cancelBtn" style="display:none;">Cancel</button>
      </div>
    </div>

    <h3 style="color:var(--sfi-gold); margin-bottom:12px; font-family:'Inter',sans-serif;">All Specifications</h3>
    <table class="sfi-table" id="adminTable">
      <thead>
        <tr>
          <th>ID</th>
          <th>Spec #</th>
          <th>Product</th>
          <th>Category</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody id="adminTableBody"></tbody>
    </table>
  </div>
</div>

<!-- ═══════════════════════════════════════════════════
     FOOTER
     ═══════════════════════════════════════════════════ -->
<div class="sfi-section">
  <div class="sfi-footer">
    SFI Part Detection &mdash; Built by <a href="https://github.com/TheGreppers" target="_blank">The Greppers</a>
    &bull; Data sourced from <a href="https://www.sfifoundation.com" target="_blank">SFI Foundation</a>
  </div>
</div>

<!-- ═══════════════════════════════════════════════════ -->
<script>
// ── API Configuration ────────────────────────────
const API_BASE = (location.hostname === "localhost" || location.hostname === "127.0.0.1")
  ? "http://localhost:8423"
  : "https://greppers-be.opencodingsociety.com";
const API = API_BASE + "/api/sfi";

const CATEGORY_ICONS = {
  "Auto Racing": "\u{1F3CE}\u{FE0F}",
  "Drag Racing": "\u{1F3C1}",
  "Boat Racing": "\u{1F6A4}",
  "Personal Protective Gear, Restraints & Nets": "\u{1F6E1}\u{FE0F}",
  "Chassis": "\u{1F527}",
  "Fuel Related": "\u26FD",
  "Tractor Pulling": "\u{1F69C}",
};

// ═══════════════════════════════════════════════════
// STATS BAR
// ═══════════════════════════════════════════════════
async function loadStats() {
  try {
    const [statsRes, modelRes] = await Promise.all([
      fetch(`${API}/stats`),
      fetch(`${API}/classifier/status`)
    ]);
    const stats = await statsRes.json();
    const model = await modelRes.json();

    document.getElementById('statSpecs').textContent = stats.total_specs || 0;
    document.getElementById('statCats').textContent = stats.total_categories || 0;
    document.getElementById('statSubs').textContent = stats.total_subcategories || 0;
    document.getElementById('statModel').textContent = model.trained
      ? (model.accuracy * 100).toFixed(0) + '%'
      : 'Offline';
  } catch (e) {
    console.log('Stats load error:', e);
  }
}

// ═══════════════════════════════════════════════════
// ML CLASSIFIER
// ═══════════════════════════════════════════════════
document.getElementById('classifyBtn').addEventListener('click', classifyPart);
document.getElementById('classifyInput').addEventListener('keydown', e => {
  if (e.key === 'Enter') classifyPart();
});

async function classifyPart() {
  const input = document.getElementById('classifyInput').value.trim();
  if (!input) return;

  const countEl = document.getElementById('classifyCount');
  const resultsEl = document.getElementById('classifyResults');
  countEl.innerHTML = '<span class="sfi-spinner"></span> Classifying...';
  resultsEl.innerHTML = '';

  try {
    const res = await fetch(`${API}/classify`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ description: input })
    });
    const data = await res.json();

    countEl.textContent = `Found ${data.count} match(es) \u2014 Predicted category: ${data.predicted_category} (${(data.category_confidence * 100).toFixed(0)}% confidence)`;

    if (!data.predictions || !data.predictions.length) {
      resultsEl.innerHTML = '<div class="sfi-no-results">No matching specs found.</div>';
      return;
    }

    resultsEl.innerHTML = data.predictions.map(p => {
      const confPct = (p.confidence * 100).toFixed(1);
      const pdfs = [];
      if (p.spec_pdf) pdfs.push(`<a class="sfi-pdf-link" href="https://www.sfifoundation.com/wp-content/pdfs/${p.spec_pdf}" target="_blank">Spec PDF</a>`);
      if (p.manufacturer_pdf) pdfs.push(`<a class="sfi-pdf-link" href="https://www.sfifoundation.com/wp-content/pdfs/${p.manufacturer_pdf}" target="_blank">Manufacturers</a>`);

      return `
        <div class="sfi-result-card">
          <div class="sfi-result-header">
            <span class="sfi-result-title">SFI ${p.spec_number}</span>
            <span class="sfi-result-conf">${confPct}%</span>
          </div>
          <div class="sfi-result-name">${p.product_name}</div>
          <div class="sfi-result-meta">
            <span class="sfi-cat-badge">${p.category}</span>
            ${p.subcategory ? `<span class="sfi-cat-badge">${p.subcategory}</span>` : ''}
            ${pdfs.join(' \u2022 ')}
          </div>
          <div class="sfi-conf-bar">
            <div class="sfi-conf-fill" style="width:${confPct}%"></div>
          </div>
        </div>
      `;
    }).join('');
  } catch (e) {
    countEl.textContent = 'Error connecting to API \u2014 is the backend running?';
  }
}

// ═══════════════════════════════════════════════════
// SPEC SEARCH
// ═══════════════════════════════════════════════════
let specs = [];
let activeCategory = 'all';

async function loadSpecs() {
  try {
    const res = await fetch(`${API}/specs`);
    specs = await res.json();
    buildFilters();
    buildCategoryGrid();
    renderSearch();
  } catch (e) {
    document.getElementById('sfiNoResults').style.display = 'block';
    document.getElementById('sfiNoResults').textContent = 'Could not connect to API \u2014 is the backend running?';
  }
}

function buildFilters() {
  const cats = [...new Set(specs.map(s => s.category))].sort();
  const row = document.getElementById('sfiFilters');
  row.innerHTML = '<button class="sfi-filter-btn active" data-category="all">All</button>';
  cats.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'sfi-filter-btn';
    btn.dataset.category = cat;
    btn.textContent = cat;
    row.appendChild(btn);
  });
}

function buildCategoryGrid() {
  const cats = {};
  specs.forEach(s => { cats[s.category] = (cats[s.category] || 0) + 1; });
  const grid = document.getElementById('catGrid');
  grid.innerHTML = Object.entries(cats).sort((a,b) => b[1] - a[1]).map(([cat, count]) => `
    <div class="sfi-cat-card" onclick="filterByCategory('${cat.replace(/'/g, "\\'")}')">
      <div class="sfi-cat-icon">${CATEGORY_ICONS[cat] || '\u{1F4CB}'}</div>
      <div class="sfi-cat-name">${cat}</div>
      <div class="sfi-cat-count">${count} spec${count !== 1 ? 's' : ''}</div>
    </div>
  `).join('');
}

function filterByCategory(cat) {
  activeCategory = cat;
  document.querySelectorAll('.sfi-filter-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.category === cat);
  });
  renderSearch();
  document.getElementById('search').scrollIntoView({ behavior: 'smooth' });
}

function renderSearch() {
  const q = document.getElementById('sfiSearch').value.toLowerCase().trim();
  const tbody = document.getElementById('sfiBody');
  const noRes = document.getElementById('sfiNoResults');
  const countEl = document.getElementById('sfiCount');

  const filtered = specs.filter(s => {
    if (activeCategory !== 'all' && s.category !== activeCategory) return false;
    if (q) {
      const hay = `${s.product_name} ${s.spec_number} ${s.category} ${s.subcategory}`.toLowerCase();
      return hay.includes(q);
    }
    return true;
  });

  countEl.textContent = `Showing ${filtered.length} of ${specs.length} specs`;

  if (!filtered.length) { tbody.innerHTML = ''; noRes.style.display = 'block'; return; }
  noRes.style.display = 'none';

  tbody.innerHTML = filtered.map(s => {
    const pdfs = [];
    if (s.spec_pdf) pdfs.push(`<a class="sfi-pdf-link" href="https://www.sfifoundation.com/wp-content/pdfs/${s.spec_pdf}" target="_blank">Spec</a>`);
    if (s.manufacturer_pdf) pdfs.push(`<a class="sfi-pdf-link" href="https://www.sfifoundation.com/wp-content/pdfs/${s.manufacturer_pdf}" target="_blank">Mfrs</a>`);
    return `<tr>
      <td class="sfi-spec-num">SFI ${s.spec_number}</td>
      <td>${s.product_name}</td>
      <td><span class="sfi-cat-badge">${s.category}</span></td>
      <td>${s.effective_date || '\u2014'}</td>
      <td>${pdfs.join(' \u2022 ') || '\u2014'}</td>
    </tr>`;
  }).join('');
}

document.getElementById('sfiSearch').addEventListener('input', renderSearch);
document.getElementById('sfiFilters').addEventListener('click', e => {
  if (!e.target.classList.contains('sfi-filter-btn')) return;
  document.querySelectorAll('.sfi-filter-btn').forEach(b => b.classList.remove('active'));
  e.target.classList.add('active');
  activeCategory = e.target.dataset.category;
  renderSearch();
});

// ═══════════════════════════════════════════════════
// ADMIN PANEL
// ═══════════════════════════════════════════════════
document.getElementById('adminToggle').addEventListener('click', () => {
  const body = document.getElementById('adminBody');
  const arrow = document.getElementById('adminArrow');
  body.classList.toggle('open');
  arrow.innerHTML = body.classList.contains('open') ? '&#9660;' : '&#9654;';
  if (body.classList.contains('open')) {
    loadAdminStats();
    loadAdminTable();
  }
});

function showMsg(text, type) {
  const el = document.getElementById('adminMsg');
  el.textContent = text;
  el.className = `admin-msg ${type}`;
  setTimeout(() => { el.className = 'admin-msg'; }, 4000);
}

async function loadAdminStats() {
  try {
    const res = await fetch(`${API}/stats`);
    const d = await res.json();
    document.getElementById('adminStats').innerHTML = `
      <div class="admin-stat"><div class="admin-stat-val">${d.total_specs}</div><div class="admin-stat-label">Total Specs</div></div>
      <div class="admin-stat"><div class="admin-stat-val">${d.total_categories}</div><div class="admin-stat-label">Categories</div></div>
      <div class="admin-stat"><div class="admin-stat-val">${d.total_subcategories}</div><div class="admin-stat-label">Subcategories</div></div>
    `;
  } catch (e) {}
}

async function loadAdminTable() {
  try {
    const res = await fetch(`${API}/specs`);
    const data = await res.json();
    document.getElementById('adminTableBody').innerHTML = data.map(s => `
      <tr>
        <td>${s.id}</td>
        <td class="sfi-spec-num">SFI ${s.spec_number}</td>
        <td>${s.product_name}</td>
        <td><span class="sfi-cat-badge">${s.category}</span></td>
        <td>
          <button class="admin-btn" style="padding:4px 10px;font-size:.75rem;" onclick="editSpec(${s.id})">Edit</button>
          <button class="admin-btn-danger" style="padding:4px 10px;font-size:.75rem;" onclick="deleteSpec(${s.id})">Del</button>
        </td>
      </tr>
    `).join('');
  } catch (e) {}
}

function clearForm() {
  ['editId','fProduct','fSpecNum','fCategory','fSubcategory','fEffDate','fSpecPdf','fMfrPdf','fProdPdf']
    .forEach(id => document.getElementById(id).value = '');
  document.getElementById('formTitle').textContent = 'Add New Specification';
  document.getElementById('cancelBtn').style.display = 'none';
}

async function editSpec(id) {
  try {
    const res = await fetch(`${API}/specs/${id}`);
    const s = await res.json();
    document.getElementById('editId').value = s.id;
    document.getElementById('fProduct').value = s.product_name;
    document.getElementById('fSpecNum').value = s.spec_number;
    document.getElementById('fCategory').value = s.category;
    document.getElementById('fSubcategory').value = s.subcategory || '';
    document.getElementById('fEffDate').value = s.effective_date || '';
    document.getElementById('fSpecPdf').value = s.spec_pdf || '';
    document.getElementById('fMfrPdf').value = s.manufacturer_pdf || '';
    document.getElementById('fProdPdf').value = s.products_pdf || '';
    document.getElementById('formTitle').textContent = `Editing Spec #${s.id}`;
    document.getElementById('cancelBtn').style.display = 'inline-block';
  } catch (e) { showMsg('Failed to load spec', 'error'); }
}

async function deleteSpec(id) {
  if (!confirm('Delete this spec?')) return;
  try {
    const res = await fetch(`${API}/specs/${id}`, { method: 'DELETE' });
    if (res.ok) { showMsg('Spec deleted', 'success'); loadAdminTable(); loadAdminStats(); loadSpecs(); }
    else { showMsg('Delete failed', 'error'); }
  } catch (e) { showMsg('Error connecting to API', 'error'); }
}

document.getElementById('saveBtn').addEventListener('click', async () => {
  const body = {
    product_name: document.getElementById('fProduct').value.trim(),
    spec_number: document.getElementById('fSpecNum').value.trim(),
    category: document.getElementById('fCategory').value.trim(),
    subcategory: document.getElementById('fSubcategory').value.trim(),
    effective_date: document.getElementById('fEffDate').value.trim(),
    spec_pdf: document.getElementById('fSpecPdf').value.trim(),
    manufacturer_pdf: document.getElementById('fMfrPdf').value.trim(),
    products_pdf: document.getElementById('fProdPdf').value.trim(),
  };

  if (!body.product_name || !body.spec_number || !body.category) {
    showMsg('Product name, spec number, and category are required', 'error');
    return;
  }

  const editId = document.getElementById('editId').value;
  try {
    let res;
    if (editId) {
      res = await fetch(`${API}/specs/${editId}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
    } else {
      res = await fetch(`${API}/specs`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
    }
    if (res.ok) { showMsg(editId ? 'Spec updated' : 'Spec created', 'success'); clearForm(); loadAdminTable(); loadAdminStats(); loadSpecs(); }
    else { const err = await res.json(); showMsg(err.error || 'Save failed', 'error'); }
  } catch (e) { showMsg('Error connecting to API', 'error'); }
});

document.getElementById('cancelBtn').addEventListener('click', clearForm);

// ═══════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════
loadStats();
loadSpecs();
</script>
