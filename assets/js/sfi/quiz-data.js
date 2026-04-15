// ════════════════════════════════════════════════════
// Quiz Data – Gear Management & Business Logic
// Single Responsibility: CRUD operations on gear items,
// localStorage persistence, status/score calculations.
// ════════════════════════════════════════════════════

const QuizData = (() => {
  const API_BASE = (location.hostname === "localhost" || location.hostname === "127.0.0.1")
    ? "http://localhost:8423"
    : "https://greppers-be.opencodingsociety.com";

  const CERT_LIFE_YEARS = 5;
  const WARN_DAYS = 180;
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

  let gear = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  let allSpecs = [];

  function fetchSpecs() {
    return fetch(`${API_BASE}/api/sfi/specs`)
      .then(r => r.json())
      .then(data => { allSpecs = data; })
      .catch(() => {});
  }

  function getSpecs() { return allSpecs; }
  function getGear() { return gear; }
  function getCategoryIcon(category) { return category ? (CATEGORY_ICONS[category] || '\u{1F4CB}') : '\u{1F6E1}\u{FE0F}'; }

  function addItem(name, spec, certDate, specData) {
    gear.push({
      id: Date.now(),
      name,
      spec: spec || 'Unknown',
      certDate: certDate || null,
      category: specData ? specData.category : null,
      productName: specData ? specData.product_name : null,
    });
    save();
  }

  function removeItem(id) {
    gear = gear.filter(g => g.id !== id);
    save();
  }

  function save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(gear));
  }

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
    const score = Math.round(((current * 100 + expiring * 50 + noDate * 25) / (gear.length * 100)) * 100);
    return { score, current, expiring, expired, noDate };
  }

  function sortGear(mode) {
    const sorted = [...gear];
    if (mode === 'urgency') {
      sorted.sort((a, b) => {
        const sa = getStatus(a), sb = getStatus(b);
        const pri = { expired: 0, expiring: 1, unknown: 2, current: 3 };
        if (pri[sa.status] !== pri[sb.status]) return pri[sa.status] - pri[sb.status];
        return (sa.days || 9999) - (sb.days || 9999);
      });
    } else if (mode === 'name') {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      sorted.sort((a, b) => (a.certDate || '').localeCompare(b.certDate || ''));
    }
    return sorted;
  }

  return { fetchSpecs, getSpecs, getGear, getCategoryIcon, addItem, removeItem, getStatus, calcSafetyScore, sortGear };
})();
