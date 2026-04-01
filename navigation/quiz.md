---
layout: sfi
title: My Gear
description: Track your racing safety equipment, SFI certifications, and expiration dates.
permalink: /quiz/
---

<style>
/* ── My Gear Tracker Styles ───────────────────── */
.gear-wrap {
  max-width: 860px;
  margin: 0 auto;
  padding: 100px 24px 80px;
  font-family: 'Inter', sans-serif;
}

/* Safety Score Ring */
.gear-score-section {
  display: flex;
  align-items: center;
  gap: 40px;
  margin-bottom: 48px;
  flex-wrap: wrap;
}
.gear-score-ring {
  position: relative;
  width: 160px; height: 160px;
  flex-shrink: 0;
}
.gear-score-ring svg { transform: rotate(-90deg); }
.gear-score-ring .ring-bg {
  fill: none;
  stroke: rgba(240,165,0,0.1);
  stroke-width: 10;
}
.gear-score-ring .ring-fill {
  fill: none;
  stroke-width: 10;
  stroke-linecap: round;
  transition: stroke-dashoffset 1s ease, stroke 0.5s;
}
.gear-score-val {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.gear-score-num {
  font-family: 'Oswald', sans-serif;
  font-size: 2.8rem;
  font-weight: 700;
  color: var(--sfi-gold);
  line-height: 1;
}
.gear-score-label {
  font-size: 0.7rem;
  color: var(--sfi-muted);
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-top: 4px;
}
.gear-score-info { flex: 1; min-width: 240px; }
.gear-score-info h2 {
  font-family: 'Oswald', sans-serif;
  font-size: 1.6rem;
  font-weight: 700;
  color: #fff;
  margin: 0 0 8px;
}
.gear-score-info p {
  color: var(--sfi-muted);
  font-size: 0.9rem;
  line-height: 1.6;
  margin: 0 0 16px;
}
.gear-score-badges {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.gear-badge {
  padding: 4px 12px;
  border-radius: 100px;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  border: 1px solid;
}
.gear-badge.good { color: var(--sfi-green); border-color: rgba(63,185,80,0.3); background: rgba(63,185,80,0.08); }
.gear-badge.warn { color: var(--sfi-gold); border-color: rgba(240,165,0,0.3); background: rgba(240,165,0,0.08); }
.gear-badge.bad { color: var(--sfi-red); border-color: rgba(248,81,73,0.3); background: rgba(248,81,73,0.08); }

/* Add Gear Form */
.gear-add-bar {
  display: flex;
  gap: 10px;
  margin-bottom: 32px;
  flex-wrap: wrap;
}
.gear-add-bar input, .gear-add-bar select {
  padding: 12px 16px;
  border: 2px solid var(--sfi-border);
  border-radius: 10px;
  background: var(--sfi-bg);
  color: var(--sfi-text);
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  transition: border-color 0.2s;
}
.gear-add-bar input:focus, .gear-add-bar select:focus { outline: none; border-color: var(--sfi-gold); }
.gear-add-bar input::placeholder { color: #555; }
.gear-add-bar select { cursor: pointer; }
.gear-add-bar select option { background: var(--sfi-bg); color: var(--sfi-text); }
.gear-add-bar .gear-name-input { flex: 2; min-width: 180px; }
.gear-add-bar .gear-spec-input { flex: 1; min-width: 100px; }
.gear-add-bar .gear-date-input { flex: 1; min-width: 140px; }
.gear-add-btn {
  padding: 12px 24px;
  background: linear-gradient(135deg, var(--sfi-gold), var(--sfi-gold-dim));
  color: #000;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  font-size: 0.9rem;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  transition: all 0.3s;
  white-space: nowrap;
}
.gear-add-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(240,165,0,0.3); }

/* Gear spec autocomplete */
.gear-spec-wrap {
  position: relative;
  flex: 1;
  min-width: 100px;
}
.gear-spec-wrap input { width: 100%; }
.gear-autocomplete {
  display: none;
  position: absolute;
  top: 100%;
  left: 0; right: 0;
  background: var(--sfi-surface2);
  border: 1px solid var(--sfi-border);
  border-radius: 0 0 10px 10px;
  max-height: 200px;
  overflow-y: auto;
  z-index: 50;
}
.gear-autocomplete.open { display: block; }
.gear-ac-item {
  padding: 10px 14px;
  font-size: 0.85rem;
  color: var(--sfi-text);
  cursor: pointer;
  transition: background 0.15s;
  border-bottom: 1px solid rgba(255,255,255,0.03);
}
.gear-ac-item:hover { background: rgba(240,165,0,0.06); }
.gear-ac-item small { color: var(--sfi-muted); }

/* Gear Items */
.gear-list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}
.gear-list-title {
  font-family: 'Oswald', sans-serif;
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--sfi-gold);
}
.gear-sort-btn {
  padding: 6px 14px;
  border: 1px solid var(--sfi-border);
  border-radius: 8px;
  background: transparent;
  color: var(--sfi-muted);
  font-size: 0.75rem;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  transition: all 0.2s;
}
.gear-sort-btn:hover { border-color: var(--sfi-gold); color: var(--sfi-text); }

.gear-empty {
  text-align: center;
  padding: 60px 20px;
  color: var(--sfi-muted);
  font-size: 0.95rem;
}
.gear-empty-icon { font-size: 3rem; margin-bottom: 12px; opacity: 0.5; }

.gear-item {
  background: var(--sfi-surface);
  border: 1px solid var(--sfi-border);
  border-radius: 14px;
  padding: 20px 24px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 18px;
  transition: all 0.25s;
  position: relative;
  overflow: hidden;
}
.gear-item::before {
  content: '';
  position: absolute;
  left: 0; top: 0; bottom: 0;
  width: 4px;
}
.gear-item.status-good::before { background: var(--sfi-green); }
.gear-item.status-warn::before { background: var(--sfi-gold); }
.gear-item.status-expired::before { background: var(--sfi-red); }
.gear-item:hover { border-color: var(--sfi-border-bright); transform: translateX(4px); }

.gear-item-icon {
  width: 48px; height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  flex-shrink: 0;
  background: rgba(240,165,0,0.08);
  border: 1px solid rgba(240,165,0,0.12);
}
.gear-item-info { flex: 1; min-width: 0; }
.gear-item-name {
  font-weight: 700;
  color: var(--sfi-text);
  font-size: 0.95rem;
  margin-bottom: 2px;
}
.gear-item-spec {
  font-size: 0.8rem;
  color: var(--sfi-gold);
  font-weight: 600;
}
.gear-item-meta {
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 4px;
}
.gear-item-meta span {
  font-size: 0.75rem;
  color: var(--sfi-muted);
}
.gear-item-status {
  text-align: right;
  flex-shrink: 0;
}
.gear-status-tag {
  padding: 4px 12px;
  border-radius: 100px;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}
.gear-status-tag.good { color: var(--sfi-green); background: rgba(63,185,80,0.12); }
.gear-status-tag.warn { color: var(--sfi-gold); background: rgba(240,165,0,0.12); }
.gear-status-tag.expired { color: var(--sfi-red); background: rgba(248,81,73,0.12); }
.gear-days-left {
  font-size: 0.75rem;
  color: var(--sfi-muted);
  margin-top: 4px;
}
.gear-item-del {
  background: none;
  border: none;
  color: var(--sfi-muted);
  cursor: pointer;
  font-size: 1.1rem;
  padding: 4px 8px;
  border-radius: 6px;
  transition: all 0.2s;
  flex-shrink: 0;
}
.gear-item-del:hover { color: var(--sfi-red); background: rgba(248,81,73,0.1); }

@media (max-width: 600px) {
  .gear-wrap { padding: 80px 16px 60px; }
  .gear-score-section { flex-direction: column; text-align: center; }
  .gear-add-bar { flex-direction: column; }
  .gear-item { flex-wrap: wrap; }
}
</style>

<div class="gear-wrap">

  <!-- ═══════════ SAFETY SCORE ═══════════ -->
  <div class="gear-score-section">
    <div class="gear-score-ring">
      <svg viewBox="0 0 160 160" width="160" height="160">
        <circle class="ring-bg" cx="80" cy="80" r="68"/>
        <circle class="ring-fill" id="scoreRing" cx="80" cy="80" r="68"
                stroke="var(--sfi-gold)"
                stroke-dasharray="427.3"
                stroke-dashoffset="427.3"/>
      </svg>
      <div class="gear-score-val">
        <div class="gear-score-num" id="scoreNum">--</div>
        <div class="gear-score-label">Safety Score</div>
      </div>
    </div>
    <div class="gear-score-info">
      <h2>My Gear Tracker</h2>
      <p>
        Log your racing safety equipment with SFI spec numbers and certification dates.
        Track what's current, what's expiring soon, and what needs replacement.
        SFI certifications typically expire after 5 years.
      </p>
      <div class="gear-score-badges" id="scoreBadges"></div>
    </div>
  </div>

  <!-- ═══════════ ADD GEAR ═══════════ -->
  <div class="gear-add-bar">
    <input type="text" class="gear-name-input" id="gearName" placeholder="Equipment name (e.g. Simpson Diamondback)">
    <div class="gear-spec-wrap">
      <input type="text" class="gear-spec-input" id="gearSpec" placeholder="SFI Spec #" autocomplete="off">
      <div class="gear-autocomplete" id="gearAC"></div>
    </div>
    <input type="date" class="gear-date-input" id="gearDate" title="Certification / manufacture date">
    <button class="gear-add-btn" onclick="addGear()">+ Add Gear</button>
  </div>

  <!-- ═══════════ GEAR LIST ═══════════ -->
  <div class="gear-list-header">
    <div class="gear-list-title" id="gearListTitle">My Equipment (0)</div>
    <button class="gear-sort-btn" onclick="toggleSort()">Sort: <span id="sortLabel">Urgency</span></button>
  </div>

  <div id="gearList"></div>

</div>

<script>
const API_BASE = (location.hostname === "localhost" || location.hostname === "127.0.0.1")
  ? "http://localhost:8423"
  : "https://greppers-be.opencodingsociety.com";

const CERT_LIFE_YEARS = 5;
const WARN_DAYS = 180; // 6 months warning
const STORAGE_KEY = 'sfiMyGear';
const CATEGORY_ICONS = {
  "Auto Racing": "\u{1F3CE}\u{FE0F}",
  "Drag Racing": "\u{1F3C1}",
  "Boat Racing": "\u{1F6A4}",
  "Personal Protective Gear, Restraints & Nets": "\u{1F6E1}\u{FE0F}",
  "Chassis": "\u{1F527}",
  "Fuel Related": "\u26FD",
  "Tractor Pulling": "\u{1F69C}",
};

let allSpecs = [];
let gear = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
let sortMode = 'urgency'; // urgency | name | date

// Load specs for autocomplete
fetch(`${API_BASE}/api/sfi/specs`)
  .then(r => r.json())
  .then(data => { allSpecs = data; })
  .catch(() => {});

// ═══════════ AUTOCOMPLETE ═══════════
const specInput = document.getElementById('gearSpec');
const acList = document.getElementById('gearAC');
let selectedSpecData = null;

specInput.addEventListener('input', () => {
  const q = specInput.value.trim().toLowerCase();
  selectedSpecData = null;
  if (q.length < 1 || !allSpecs.length) { acList.className = 'gear-autocomplete'; return; }

  const matches = allSpecs.filter(s =>
    s.spec_number.toLowerCase().includes(q) ||
    s.product_name.toLowerCase().includes(q)
  ).slice(0, 8);

  if (!matches.length) { acList.className = 'gear-autocomplete'; return; }

  acList.innerHTML = matches.map((s, i) => `
    <div class="gear-ac-item" data-idx="${i}">
      <strong>SFI ${s.spec_number}</strong> &mdash; ${s.product_name}
      <br><small>${s.category}</small>
    </div>
  `).join('');

  acList.querySelectorAll('.gear-ac-item').forEach((el, i) => {
    el.addEventListener('click', () => {
      const s = matches[i];
      specInput.value = s.spec_number;
      selectedSpecData = s;
      acList.className = 'gear-autocomplete';
      // Auto-fill name if empty
      if (!document.getElementById('gearName').value.trim()) {
        document.getElementById('gearName').value = s.product_name;
      }
    });
  });

  acList.className = 'gear-autocomplete open';
});

document.addEventListener('click', e => {
  if (!e.target.closest('.gear-spec-wrap')) acList.className = 'gear-autocomplete';
});

// ═══════════ GEAR MANAGEMENT ═══════════
function addGear() {
  const name = document.getElementById('gearName').value.trim();
  const spec = document.getElementById('gearSpec').value.trim();
  const date = document.getElementById('gearDate').value;

  if (!name) { alert('Enter an equipment name.'); return; }

  const item = {
    id: Date.now(),
    name,
    spec: spec || 'Unknown',
    certDate: date || null,
    category: selectedSpecData ? selectedSpecData.category : null,
    productName: selectedSpecData ? selectedSpecData.product_name : null,
  };

  gear.push(item);
  saveGear();
  renderGear();

  // Clear form
  document.getElementById('gearName').value = '';
  document.getElementById('gearSpec').value = '';
  document.getElementById('gearDate').value = '';
  selectedSpecData = null;
}

function removeGear(id) {
  gear = gear.filter(g => g.id !== id);
  saveGear();
  renderGear();
}

function saveGear() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(gear));
}

function toggleSort() {
  const modes = ['urgency', 'name', 'date'];
  sortMode = modes[(modes.indexOf(sortMode) + 1) % modes.length];
  document.getElementById('sortLabel').textContent =
    sortMode === 'urgency' ? 'Urgency' : sortMode === 'name' ? 'Name' : 'Date';
  renderGear();
}

// ═══════════ STATUS CALCULATIONS ═══════════
function getStatus(item) {
  if (!item.certDate) return { status: 'unknown', label: 'No Date', days: null, color: 'warn' };

  const cert = new Date(item.certDate);
  const expiry = new Date(cert);
  expiry.setFullYear(expiry.getFullYear() + CERT_LIFE_YEARS);
  const now = new Date();
  const daysLeft = Math.ceil((expiry - now) / (1000 * 60 * 60 * 24));

  if (daysLeft < 0) return { status: 'expired', label: 'Expired', days: daysLeft, color: 'expired' };
  if (daysLeft <= WARN_DAYS) return { status: 'expiring', label: 'Expiring Soon', days: daysLeft, color: 'warn' };
  return { status: 'current', label: 'Current', days: daysLeft, color: 'good' };
}

function calcSafetyScore() {
  if (!gear.length) return { score: 0, current: 0, expiring: 0, expired: 0, noDate: 0 };
  let current = 0, expiring = 0, expired = 0, noDate = 0;
  gear.forEach(g => {
    const s = getStatus(g);
    if (s.status === 'current') current++;
    else if (s.status === 'expiring') expiring++;
    else if (s.status === 'expired') expired++;
    else noDate++;
  });
  // Score: current = 100%, expiring = 50%, noDate = 25%, expired = 0%
  const score = Math.round(((current * 100 + expiring * 50 + noDate * 25) / (gear.length * 100)) * 100);
  return { score, current, expiring, expired, noDate };
}

// ═══════════ RENDERING ═══════════
function renderGear() {
  const { score, current, expiring, expired, noDate } = calcSafetyScore();

  // Update score ring
  const ring = document.getElementById('scoreRing');
  const circumference = 2 * Math.PI * 68; // ~427.3
  const offset = circumference - (score / 100) * circumference;
  ring.style.strokeDashoffset = gear.length ? offset : circumference;

  let ringColor = 'var(--sfi-green)';
  if (score < 50) ringColor = 'var(--sfi-red)';
  else if (score < 75) ringColor = 'var(--sfi-gold)';
  ring.style.stroke = ringColor;

  document.getElementById('scoreNum').textContent = gear.length ? score + '%' : '--';

  // Badges
  const badges = document.getElementById('scoreBadges');
  if (gear.length) {
    let html = '';
    if (current) html += `<span class="gear-badge good">${current} Current</span>`;
    if (expiring) html += `<span class="gear-badge warn">${expiring} Expiring</span>`;
    if (expired) html += `<span class="gear-badge bad">${expired} Expired</span>`;
    if (noDate) html += `<span class="gear-badge warn">${noDate} No Date</span>`;
    badges.innerHTML = html;
  } else {
    badges.innerHTML = '';
  }

  // Title
  document.getElementById('gearListTitle').textContent = `My Equipment (${gear.length})`;

  // Sort
  let sorted = [...gear];
  if (sortMode === 'urgency') {
    sorted.sort((a, b) => {
      const sa = getStatus(a), sb = getStatus(b);
      const pri = { expired: 0, expiring: 1, unknown: 2, current: 3 };
      if (pri[sa.status] !== pri[sb.status]) return pri[sa.status] - pri[sb.status];
      return (sa.days || 9999) - (sb.days || 9999);
    });
  } else if (sortMode === 'name') {
    sorted.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    sorted.sort((a, b) => (a.certDate || '').localeCompare(b.certDate || ''));
  }

  // Render list
  const list = document.getElementById('gearList');
  if (!sorted.length) {
    list.innerHTML = `
      <div class="gear-empty">
        <div class="gear-empty-icon">&#128737;&#65039;</div>
        Add your racing safety equipment above to start tracking certifications.<br>
        Type an SFI spec number to auto-fill from the database.
      </div>`;
    return;
  }

  list.innerHTML = sorted.map(g => {
    const s = getStatus(g);
    const icon = g.category ? (CATEGORY_ICONS[g.category] || '\u{1F4CB}') : '\u{1F6E1}\u{FE0F}';
    let daysText = '';
    if (s.days !== null) {
      if (s.days < 0) daysText = `Expired ${Math.abs(s.days)} days ago`;
      else if (s.days === 0) daysText = 'Expires today';
      else if (s.days <= 30) daysText = `${s.days} days left`;
      else if (s.days <= 365) daysText = `${Math.round(s.days / 30)} months left`;
      else daysText = `${(s.days / 365).toFixed(1)} years left`;
    }

    return `
      <div class="gear-item status-${s.color === 'expired' ? 'expired' : s.color === 'warn' ? 'warn' : 'good'}">
        <div class="gear-item-icon">${icon}</div>
        <div class="gear-item-info">
          <div class="gear-item-name">${g.name}</div>
          <div class="gear-item-spec">SFI ${g.spec}</div>
          <div class="gear-item-meta">
            ${g.category ? `<span>${g.category}</span>` : ''}
            ${g.certDate ? `<span>Cert: ${g.certDate}</span>` : '<span>No cert date</span>'}
          </div>
        </div>
        <div class="gear-item-status">
          <div class="gear-status-tag ${s.color}">${s.label}</div>
          ${daysText ? `<div class="gear-days-left">${daysText}</div>` : ''}
        </div>
        <button class="gear-item-del" onclick="removeGear(${g.id})" title="Remove">&times;</button>
      </div>`;
  }).join('');
}

// Enter key to add
document.getElementById('gearName').addEventListener('keydown', e => { if (e.key === 'Enter') addGear(); });
document.getElementById('gearDate').addEventListener('keydown', e => { if (e.key === 'Enter') addGear(); });

// Initial render
renderGear();
</script>
