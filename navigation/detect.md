---
layout: sfi
title: AI Equipment Detector
description: AI-powered detection of SFI motorsport safety equipment from images or camera feed.
permalink: /detect/
---

<style>
/* ── Detector Page Styles ──────────────────────── */
.detect-hero {
  background: linear-gradient(135deg, var(--sfi-bg) 0%, #0f1a12 40%, var(--sfi-bg) 100%);
  padding: 120px 20px 60px;
  text-align: center;
  position: relative;
  overflow: hidden;
}
.detect-hero::before {
  content: '';
  position: absolute;
  top: -50%; left: -50%;
  width: 200%; height: 200%;
  background: radial-gradient(ellipse at 40% 50%, rgba(0,212,255,0.06) 0%, transparent 60%),
              radial-gradient(ellipse at 60% 40%, rgba(240,165,0,0.05) 0%, transparent 60%);
  animation: detectPulse 10s ease-in-out infinite alternate;
}
@keyframes detectPulse {
  0% { transform: scale(1) rotate(0deg); }
  100% { transform: scale(1.04) rotate(1deg); }
}
.detect-hero-content { position: relative; z-index: 1; max-width: 800px; margin: 0 auto; }
.detect-hero h1 {
  font-family: 'Oswald', sans-serif;
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  font-weight: 700;
  color: #fff;
  margin: 0 0 8px;
  letter-spacing: 2px;
  text-transform: uppercase;
}
.detect-hero h1 span { color: var(--sfi-cyan); }
.detect-hero-tag {
  font-family: 'Inter', sans-serif;
  font-size: 1.05rem;
  color: var(--sfi-muted);
  margin-bottom: 24px;
  line-height: 1.6;
}

/* Model status */
.model-status {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 24px;
  background: var(--sfi-surface);
  border: 1px solid var(--sfi-border);
  border-radius: 100px;
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
  color: var(--sfi-muted);
  margin-bottom: 20px;
}
.model-status .dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: var(--sfi-gold);
  animation: statusPulse 1.5s ease-in-out infinite;
}
.model-status.ready .dot {
  background: var(--sfi-green);
  animation: none;
}
.model-status.error .dot {
  background: var(--sfi-red);
  animation: none;
}
@keyframes statusPulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}
.model-progress {
  width: 200px;
  height: 4px;
  background: var(--sfi-surface2);
  border-radius: 2px;
  overflow: hidden;
  margin-top: 4px;
}
.model-progress-bar {
  height: 100%;
  background: linear-gradient(90deg, var(--sfi-gold), var(--sfi-cyan));
  border-radius: 2px;
  transition: width 0.3s;
  width: 0%;
}

/* Tab system */
.detect-tabs {
  display: flex;
  gap: 4px;
  justify-content: center;
  margin-bottom: 32px;
}
.detect-tab {
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 12px 28px;
  border: 1px solid var(--sfi-border);
  background: var(--sfi-surface);
  color: var(--sfi-muted);
  cursor: pointer;
  transition: all 0.2s;
}
.detect-tab:first-child { border-radius: 10px 0 0 10px; }
.detect-tab:last-child { border-radius: 0 10px 10px 0; }
.detect-tab.active {
  background: rgba(240,165,0,0.12);
  border-color: var(--sfi-gold);
  color: var(--sfi-gold);
}
.detect-tab:hover:not(.active) {
  background: var(--sfi-surface2);
  color: var(--sfi-text);
}

/* Upload area */
.upload-zone {
  border: 2px dashed var(--sfi-border-bright);
  border-radius: var(--sfi-radius);
  padding: 60px 40px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
  background: rgba(240,165,0,0.02);
  position: relative;
}
.upload-zone:hover, .upload-zone.dragover {
  border-color: var(--sfi-gold);
  background: rgba(240,165,0,0.06);
  transform: translateY(-2px);
}
.upload-zone-icon {
  font-size: 3rem;
  margin-bottom: 16px;
  display: block;
  opacity: 0.6;
}
.upload-zone-text {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: var(--sfi-muted);
  margin-bottom: 8px;
}
.upload-zone-hint {
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  color: var(--sfi-muted);
  opacity: 0.6;
}
.upload-zone input[type="file"] {
  position: absolute;
  inset: 0;
  opacity: 0;
  cursor: pointer;
}

/* Camera area */
.camera-zone {
  background: var(--sfi-surface);
  border: 1px solid var(--sfi-border);
  border-radius: var(--sfi-radius);
  padding: 32px;
  text-align: center;
}
.camera-preview {
  position: relative;
  display: inline-block;
  width: 100%;
  max-width: 640px;
  background: #000;
  border-radius: var(--sfi-radius-sm);
  overflow: hidden;
  aspect-ratio: 4/3;
}
.camera-preview video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.camera-preview canvas {
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.camera-controls {
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-top: 20px;
  flex-wrap: wrap;
}
.cam-btn {
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  padding: 10px 24px;
  border-radius: 8px;
  border: 1px solid var(--sfi-border);
  background: var(--sfi-surface2);
  color: var(--sfi-text);
  cursor: pointer;
  transition: all 0.2s;
}
.cam-btn:hover { border-color: var(--sfi-gold); background: rgba(240,165,0,0.1); }
.cam-btn.primary {
  background: linear-gradient(135deg, var(--sfi-gold), var(--sfi-gold-dim));
  color: #000;
  border: none;
}
.cam-btn.primary:hover { box-shadow: 0 4px 16px rgba(240,165,0,0.3); }
.cam-btn.danger { border-color: var(--sfi-red); color: var(--sfi-red); }
.cam-btn.danger:hover { background: rgba(248,81,73,0.1); }
.cam-btn:disabled { opacity: 0.4; cursor: not-allowed; }

/* Results canvas container */
.result-canvas-wrap {
  position: relative;
  display: inline-block;
  width: 100%;
  max-width: 800px;
  border-radius: var(--sfi-radius-sm);
  overflow: hidden;
  background: #000;
  margin-bottom: 24px;
}
.result-canvas-wrap img {
  width: 100%;
  display: block;
}
.result-canvas-wrap canvas {
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 100%;
}

/* Results list */
.detect-results {
  margin-top: 32px;
}
.detect-results-title {
  font-family: 'Oswald', sans-serif;
  font-size: 1.4rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 16px;
  letter-spacing: 0.5px;
}
.detect-result-card {
  display: flex;
  align-items: center;
  gap: 16px;
  background: var(--sfi-surface);
  border: 1px solid var(--sfi-border);
  border-radius: var(--sfi-radius-sm);
  padding: 16px 20px;
  margin-bottom: 10px;
  transition: border-color 0.2s;
}
.detect-result-card:hover { border-color: var(--sfi-border-bright); }
.detect-result-color {
  width: 6px;
  height: 48px;
  border-radius: 3px;
  flex-shrink: 0;
}
.detect-result-info { flex: 1; }
.detect-result-name {
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--sfi-text);
  margin-bottom: 2px;
}
.detect-result-items {
  font-family: 'Inter', sans-serif;
  font-size: 0.78rem;
  color: var(--sfi-muted);
  line-height: 1.4;
}
.detect-result-conf {
  font-family: 'Oswald', sans-serif;
  font-size: 1.6rem;
  font-weight: 700;
  flex-shrink: 0;
}
.detect-result-conf-label {
  font-family: 'Inter', sans-serif;
  font-size: 0.65rem;
  color: var(--sfi-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: right;
}
.no-results {
  text-align: center;
  padding: 40px;
  color: var(--sfi-muted);
  font-family: 'Inter', sans-serif;
}

/* Analyzing overlay */
.analyzing-overlay {
  position: absolute;
  inset: 0;
  background: rgba(6,10,20,0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;
  border-radius: var(--sfi-radius-sm);
}
.analyzing-spinner {
  width: 48px; height: 48px;
  border: 3px solid var(--sfi-surface2);
  border-top-color: var(--sfi-gold);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin-bottom: 12px;
}
@keyframes spin { to { transform: rotate(360deg); } }
.analyzing-text {
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  color: var(--sfi-gold);
  font-weight: 600;
}

/* Category grid at bottom */
.cat-ref-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 12px;
}
.cat-ref-item {
  background: var(--sfi-surface);
  border: 1px solid var(--sfi-border);
  border-radius: var(--sfi-radius-sm);
  padding: 16px;
  transition: border-color 0.2s;
}
.cat-ref-item:hover { border-color: var(--sfi-border-bright); }
.cat-ref-dot {
  width: 10px; height: 10px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
}
.cat-ref-name {
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--sfi-text);
  margin-bottom: 4px;
}
.cat-ref-specs {
  font-family: 'Inter', sans-serif;
  font-size: 0.72rem;
  color: var(--sfi-muted);
  line-height: 1.5;
}

/* Responsive */
@media (max-width: 600px) {
  .upload-zone { padding: 40px 20px; }
  .camera-zone { padding: 16px; }
  .detect-tabs { flex-direction: column; align-items: stretch; }
  .detect-tab { border-radius: 8px !important; }
  .detect-result-card { flex-wrap: wrap; }
}
</style>

<!-- ── Hero ───────────────────────────────────────── -->
<div class="detect-hero">
  <div class="detect-hero-content">
    <h1>AI EQUIPMENT <span>DETECTOR</span></h1>
    <p class="detect-hero-tag">
      Upload an image or use your camera to identify SFI-certified motorsport safety equipment.
      Powered by on-device machine learning &mdash; nothing leaves your browser.
    </p>
    <div class="model-status" id="modelStatus">
      <span class="dot"></span>
      <span id="modelStatusText">Initializing models&hellip;</span>
    </div>
    <div class="model-progress" id="modelProgress">
      <div class="model-progress-bar" id="modelProgressBar"></div>
    </div>
  </div>
</div>

<!-- ── Main Detector ─────────────────────────────── -->
<section class="sfi-sect">
  <div class="sfi-sect-label">Detect</div>
  <div class="sfi-sect-title">Identify Equipment</div>
  <div class="sfi-sect-desc">
    Choose an input method below. The AI will detect and classify motorsport safety equipment
    into SFI specification categories with bounding boxes.
  </div>

  <!-- Tabs -->
  <div class="detect-tabs">
    <button class="detect-tab active" onclick="switchTab('upload')">Upload Image</button>
    <button class="detect-tab" onclick="switchTab('camera')">Use Camera</button>
  </div>

  <!-- Upload panel -->
  <div id="uploadPanel">
    <div class="upload-zone" id="uploadZone">
      <span class="upload-zone-icon">&#128247;</span>
      <div class="upload-zone-text">Drag & drop an image here, or click to browse</div>
      <div class="upload-zone-hint">Supports JPG, PNG, WebP &bull; Max 20 MB</div>
      <input type="file" id="fileInput" accept="image/*">
    </div>
  </div>

  <!-- Camera panel -->
  <div id="cameraPanel" style="display:none;">
    <div class="camera-zone">
      <div class="camera-preview" id="cameraPreview">
        <video id="cameraVideo" playsinline autoplay muted></video>
        <canvas id="cameraOverlay"></canvas>
      </div>
      <div class="camera-controls">
        <button class="cam-btn primary" id="btnStartCam" onclick="startCamera()">Start Camera</button>
        <button class="cam-btn primary" id="btnCapture" onclick="captureAndAnalyze()" disabled>Capture & Analyze</button>
        <button class="cam-btn" id="btnFlip" onclick="flipCamera()" disabled>Flip Camera</button>
        <button class="cam-btn danger" id="btnStopCam" onclick="stopCamera()" disabled>Stop</button>
      </div>
    </div>
  </div>

  <!-- Results area -->
  <div id="resultsArea" style="display:none; margin-top:40px;">
    <div style="text-align:center;">
      <div class="result-canvas-wrap" id="resultWrap">
        <img id="resultImg" src="" alt="Analysis result">
        <canvas id="resultCanvas"></canvas>
        <div class="analyzing-overlay" id="analyzingOverlay" style="display:none;">
          <div class="analyzing-spinner"></div>
          <div class="analyzing-text">Analyzing equipment&hellip;</div>
        </div>
      </div>
    </div>
    <div class="detect-results" id="detectResults"></div>
  </div>
</section>

<div class="sfi-divider"><hr></div>

<!-- ── Category Reference ────────────────────────── -->
<section class="sfi-sect">
  <div class="sfi-sect-label">Reference</div>
  <div class="sfi-sect-title">Detectable Categories</div>
  <div class="sfi-sect-desc">
    The AI maps detections to these 15 major SFI equipment categories, covering
    clutches, helmets, roll cages, fuel cells, supercharger devices, and more.
  </div>
  <div class="cat-ref-grid" id="catRefGrid"></div>
</section>

<div class="sfi-divider"><hr></div>

<section class="sfi-sect">
  <div class="sfi-cta-banner">
    <h2>NEED THE FULL SPEC DATABASE?</h2>
    <p>Search all SFI specifications by number, name, or category.</p>
    <a href="/sfi-specs/" class="sfi-btn sfi-btn-primary">Open Spec Search &rarr;</a>
  </div>
</section>

<!-- ── TensorFlow.js + Models ────────────────────── -->
<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@4.17.0/dist/tf.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/coco-ssd@2.2.3/dist/coco-ssd.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/mobilenet@2.1.1/dist/mobilenet.min.js"></script>

<script>
// ════════════════════════════════════════════════════
// SFI AI Equipment Detector
// Uses COCO-SSD (bounding boxes) + MobileNet (classification)
// with a custom mapping layer to SFI specification categories
// ════════════════════════════════════════════════════

// ── SFI Category Definitions ────────────────────────
const SFI_CATEGORIES = [
  {
    name: "Helmets",
    color: "#F0A500",
    items: [
      "Flame Resistant Motorsports Helmets",
      "Youth Full Face Helmets",
      "Motorsports Helmet"
    ],
    cocoKeys: [],
    mnetKeys: ["helmet", "crash helmet", "football helmet", "hard hat", "protective helmet", "head protector", "visor"],
    boost: 0
  },
  {
    name: "Driver Suits & Protective Gear",
    color: "#00d4ff",
    items: [
      "Driver Suits", "Advanced Driver Suits",
      "Driver Accessories", "Abrasion Resistant Driver/Rider Suits",
      "Go-Kart Chest Protector (Youth)", "Fueler Apron", "Shift Boot Covers"
    ],
    cocoKeys: ["person"],
    mnetKeys: ["suit", "uniform", "military uniform", "bulletproof vest", "jersey", "lab coat", "vestment",
               "protective garment", "coverall", "trench coat", "cloak", "apron", "bib"],
    boost: -0.05
  },
  {
    name: "Clutch & Flywheel Assemblies",
    color: "#ff6b6b",
    items: [
      "Replacement Flywheels and Clutch Assemblies",
      "Multiple Disc Clutch Assemblies for Naturally Aspirated Engines",
      "Nitro-Methane Drag Race Multiple Disc Clutch Assemblies",
      "Methanol Drag Race Multiple Disc Clutch Assemblies",
      "Multiple Disc Clutch Assemblies for Supercharged/Turbo/Nitrous Vehicles"
    ],
    cocoKeys: [],
    mnetKeys: ["disc", "disk", "plate", "clutch", "flywheel", "brake pad", "brake disc",
               "circular saw", "manhole cover", "rotary", "washer"],
    boost: 0
  },
  {
    name: "Bellhousings",
    color: "#a855f7",
    items: [
      "Containment Bellhousing for SFI 1.1 & 1.2 Clutch Assemblies",
      "Passenger Car Replacement Containment Bellhousings",
      "Containment Bellhousing for SFI 1.3 & 1.4 Clutch Assemblies",
      "Containment Bellhousing for Supercharged/Nitrous-Oxide Applications",
      "Pulling and Diesel Drag Racing Bellhousing"
    ],
    cocoKeys: [],
    mnetKeys: ["bell", "dome", "caldron", "cauldron", "cast iron", "housing", "shield",
               "cylinder", "bucket", "pail", "pot"],
    boost: 0
  },
  {
    name: "Transmission & Drivetrain",
    color: "#22d3ee",
    items: [
      "Automatic Transmission Shields (Flexible Type)",
      "Automatic Transmission Shields (Rigid Type)",
      "Automatic Transmission Flexplates",
      "High Horsepower Automatic Transmission Flexplates",
      "Automatic Transmission Flexplates for Diesel Applications",
      "Automatic Transmission Flexplate Shields",
      "Drive Shafts",
      "Steering Wheel Quick Disconnect/Release"
    ],
    cocoKeys: [],
    mnetKeys: ["shaft", "axle", "rod", "pipe", "steel", "metal", "gear", "cog",
               "steering wheel", "wheel", "reel", "spool", "spindle"],
    boost: 0
  },
  {
    name: "Roll Cages & Chassis",
    color: "#f97316",
    items: [
      "Funny Car Roll Cage (Alcohol, Advanced ET, Nostalgia, etc.)",
      "Altered Car Roll Cage - 6.00 to 7.49 Seconds",
      "Altered and Funny Car Roll Cage - 7.50 Seconds & Slower",
      "Side Steer Roadster Roll Cage",
      "Nitro Fuel Funny Car Chassis - 4.99 Seconds & Quicker",
      "Full Bodied Car Tube Chassis (all variants)",
      "Driver Roll Cage for Tractors (all weight classes)"
    ],
    cocoKeys: ["car", "truck"],
    mnetKeys: ["cage", "framework", "steel arch bridge", "suspension bridge", "trestle",
               "lattice", "grille", "grill", "tubular", "scaffold", "frame",
               "go-kart", "gokart", "racer", "race car", "sports car"],
    boost: 0
  },
  {
    name: "Supercharger & Turbo Systems",
    color: "#ec4899",
    items: [
      "Supercharger Restraint Devices",
      "Methanol Fuel Supercharger Restraint Devices",
      "Nitro-Methane Fuel Supercharger Restraint Devices",
      "Screw-Type Supercharger Restraint Devices",
      "Nitro-Methane Fuel Supercharger Restraint Strap Engine Brackets",
      "Supercharger Pressure Relief Assemblies",
      "Screw-Type Superchargers",
      "Turbochargers"
    ],
    cocoKeys: [],
    mnetKeys: ["turbine", "engine", "motor", "compressor", "pump", "machine",
               "chain", "chain mail", "strap", "buckle", "harness",
               "power drill", "vacuum", "fan", "impeller"],
    boost: 0
  },
  {
    name: "Engine Components",
    color: "#84cc16",
    items: [
      "Lower Engine Containment Device",
      "Sportsman Lower Engine Containment Device",
      "Containment Valve Covers/Valve Cover Shields",
      "Manifold Blankets", "Engine Blankets - Rear",
      "Crankshaft Hub Harmonic Dampers"
    ],
    cocoKeys: [],
    mnetKeys: ["engine", "motor", "piston", "cylinder", "radiator", "valve",
               "manifold", "gasket", "mechanical", "machine", "damper",
               "shock absorber", "carburetor"],
    boost: 0
  },
  {
    name: "Wheels",
    color: "#eab308",
    items: [
      "Drag Race Drive Wheels", "Drag Race Front Wheels",
      "High Horsepower Drag Race Drive Wheels",
      "Top Fuel and Funny Car Drag Race Drive Beadlock Wheels",
      "Stock Car Steel Wheels", "Heavy Duty Stock Car Steel Wheels",
      "Alloy Stock Car Wheels", "Stock Car Wheel Spacers"
    ],
    cocoKeys: [],
    mnetKeys: ["wheel", "car wheel", "tire", "rim", "spoke", "hubcap",
               "disc", "alloy wheel", "mag wheel"],
    boost: 0.05
  },
  {
    name: "Driver Restraint Systems",
    color: "#14b8a6",
    items: [
      "Driver Restraint Assemblies",
      "Restraint Assemblies for Youth Drivers",
      "Stock Car Driver Restraint Assemblies",
      "Advanced Motorsport Driver Restraint Assemblies",
      "Reclined Driver Advanced Motorsport Restraint Assemblies",
      "Head and Neck Restraint Systems"
    ],
    cocoKeys: [],
    mnetKeys: ["seat belt", "safety belt", "harness", "strap", "buckle", "leash",
               "brace", "restraint", "collar", "neck brace", "yoke"],
    boost: 0
  },
  {
    name: "Fire Suppression Systems",
    color: "#ef4444",
    items: [
      "On Board Fire Suppression Systems",
      "Single Seat Open Wheel Rear Engine On Board Fire Suppression Systems",
      "Single Seat Open Wheel Front Engine On Board Fire Suppression Systems",
      "Non Flammable, Thermal Barrier / Fire Extinguishing Coatings"
    ],
    cocoKeys: ["fire hydrant"],
    mnetKeys: ["fire extinguisher", "extinguisher", "cylinder", "canister", "tank",
               "bottle", "oxygen mask", "nozzle", "hose", "spray can"],
    boost: 0
  },
  {
    name: "Fuel Cells & Tanks",
    color: "#06b6d4",
    items: [
      "Polymer (Foam-Filled) Fuel Cells",
      "Crash Resistant Fuel Cells",
      "Competition Fuel Cell Bladder",
      "Open Wheel Front Engine Fuel Cells",
      "Stock Car Fuel Cell Bladder",
      "Stock Car Fill/Vent Check Valve Assembly"
    ],
    cocoKeys: [],
    mnetKeys: ["container", "barrel", "drum", "tank", "bucket", "tub", "vat",
               "crate", "chest", "box", "canister", "jerry can", "gas pump"],
    boost: 0
  },
  {
    name: "Racing Seats",
    color: "#8b5cf6",
    items: [
      "Stock Car Type Racing Seats (Custom)",
      "Racing Seats (Standard)"
    ],
    cocoKeys: ["chair"],
    mnetKeys: ["seat", "chair", "throne", "barber chair", "rocking chair",
               "folding chair", "car seat", "bucket seat"],
    boost: 0
  },
  {
    name: "Safety Nets, Padding & Blankets",
    color: "#10b981",
    items: [
      "Window Nets", "Roll Cage Nets",
      "Roll Bar Padding", "Impact Padding",
      "Tractor Blankets", "Centrifugal Supercharger Blankets",
      "Manifold Blankets", "Engine Blankets - Rear"
    ],
    cocoKeys: [],
    mnetKeys: ["net", "mesh", "web", "hammock", "volleyball net",
               "cushion", "pillow", "pad", "mattress", "quilt", "blanket",
               "comforter", "sleeping bag", "wool", "fabric", "velvet"],
    boost: 0
  },
  {
    name: "Aero, Structural & Specialty",
    color: "#f59e0b",
    items: [
      "Top Fuel Rear Wing", "Top Fuel Front Wing",
      "NASCAR-Type Tethers",
      "NASCAR Dashboard and Other Carbon Fiber Components",
      "Drag Boat Capsule Shell Material",
      "Drag Boat Capsule Canopy Material",
      "Drag Boat Capsule Roll Cage",
      "Nitro-Methane Fuel Motorcycle Engine Restraint Devices"
    ],
    cocoKeys: ["boat", "airplane"],
    mnetKeys: ["wing", "airfoil", "spoiler", "fin", "rudder",
               "canopy", "parachute", "cable", "wire", "tether",
               "carbon fiber", "composite", "hull", "speedboat",
               "aircraft carrier", "warplane"],
    boost: 0
  }
];

// ── Globals ─────────────────────────────────────────
let cocoModel = null;
let mnetModel = null;
let modelsReady = false;
let cameraStream = null;
let facingMode = 'environment';

// ── Model Loading ───────────────────────────────────
async function loadModels() {
  const statusEl = document.getElementById('modelStatus');
  const textEl = document.getElementById('modelStatusText');
  const bar = document.getElementById('modelProgressBar');

  try {
    textEl.textContent = 'Loading TensorFlow.js runtime\u2026';
    bar.style.width = '15%';
    await tf.ready();

    textEl.textContent = 'Loading object detection model (COCO-SSD)\u2026';
    bar.style.width = '35%';
    cocoModel = await cocoSsd.load({ base: 'lite_mobilenet_v2' });

    textEl.textContent = 'Loading classification model (MobileNet)\u2026';
    bar.style.width = '70%';
    mnetModel = await mobilenet.load({ version: 2, alpha: 1.0 });

    bar.style.width = '100%';
    textEl.textContent = 'Models ready \u2014 upload an image or start your camera';
    statusEl.classList.add('ready');
    document.getElementById('modelProgress').style.display = 'none';
    modelsReady = true;
  } catch (err) {
    console.error('Model loading failed:', err);
    textEl.textContent = 'Failed to load models \u2014 check your connection and refresh';
    statusEl.classList.add('error');
  }
}

// ── Tab Switching ───────────────────────────────────
function switchTab(tab) {
  document.querySelectorAll('.detect-tab').forEach((t, i) => {
    t.classList.toggle('active', (tab === 'upload' && i === 0) || (tab === 'camera' && i === 1));
  });
  document.getElementById('uploadPanel').style.display = tab === 'upload' ? 'block' : 'none';
  document.getElementById('cameraPanel').style.display = tab === 'camera' ? 'block' : 'none';
  if (tab === 'upload' && cameraStream) stopCamera();
}

// ── File Upload Handling ────────────────────────────
function setupUpload() {
  const zone = document.getElementById('uploadZone');
  const input = document.getElementById('fileInput');

  zone.addEventListener('dragover', (e) => {
    e.preventDefault();
    zone.classList.add('dragover');
  });
  zone.addEventListener('dragleave', () => zone.classList.remove('dragover'));
  zone.addEventListener('drop', (e) => {
    e.preventDefault();
    zone.classList.remove('dragover');
    if (e.dataTransfer.files.length) handleFile(e.dataTransfer.files[0]);
  });
  input.addEventListener('change', () => {
    if (input.files.length) handleFile(input.files[0]);
    input.value = '';
  });
}

function handleFile(file) {
  if (!file.type.startsWith('image/')) return;
  if (!modelsReady) {
    alert('Models are still loading. Please wait a moment.');
    return;
  }
  const reader = new FileReader();
  reader.onload = (e) => {
    const img = new Image();
    img.onload = () => analyzeImage(img);
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

// ── Camera ──────────────────────────────────────────
async function startCamera() {
  try {
    if (cameraStream) stopCamera();
    cameraStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: facingMode, width: { ideal: 1280 }, height: { ideal: 720 } },
      audio: false
    });
    const video = document.getElementById('cameraVideo');
    video.srcObject = cameraStream;
    await video.play();

    document.getElementById('btnStartCam').disabled = true;
    document.getElementById('btnCapture').disabled = false;
    document.getElementById('btnFlip').disabled = false;
    document.getElementById('btnStopCam').disabled = false;
  } catch (err) {
    console.error('Camera error:', err);
    alert('Could not access camera. Please check permissions.');
  }
}

function stopCamera() {
  if (cameraStream) {
    cameraStream.getTracks().forEach(t => t.stop());
    cameraStream = null;
  }
  const video = document.getElementById('cameraVideo');
  video.srcObject = null;

  document.getElementById('btnStartCam').disabled = false;
  document.getElementById('btnCapture').disabled = true;
  document.getElementById('btnFlip').disabled = true;
  document.getElementById('btnStopCam').disabled = true;

  // Clear overlay
  const overlay = document.getElementById('cameraOverlay');
  const ctx = overlay.getContext('2d');
  ctx.clearRect(0, 0, overlay.width, overlay.height);
}

function flipCamera() {
  facingMode = facingMode === 'environment' ? 'user' : 'environment';
  startCamera();
}

async function captureAndAnalyze() {
  if (!modelsReady) return;
  const video = document.getElementById('cameraVideo');
  const tempCanvas = document.createElement('canvas');
  tempCanvas.width = video.videoWidth;
  tempCanvas.height = video.videoHeight;
  const ctx = tempCanvas.getContext('2d');
  ctx.drawImage(video, 0, 0);

  const img = new Image();
  img.onload = () => analyzeImage(img);
  img.src = tempCanvas.toDataURL('image/jpeg', 0.9);
}

// ── Core Analysis Pipeline ──────────────────────────
async function analyzeImage(imgEl) {
  const area = document.getElementById('resultsArea');
  const resultImg = document.getElementById('resultImg');
  const overlay = document.getElementById('analyzingOverlay');
  const resultsDiv = document.getElementById('detectResults');

  // Show image + analyzing state
  resultImg.src = imgEl.src;
  area.style.display = 'block';
  overlay.style.display = 'flex';
  resultsDiv.innerHTML = '';

  // Scroll to results
  area.scrollIntoView({ behavior: 'smooth', block: 'start' });

  // Wait for image to render so canvas sizing is correct
  await new Promise(r => setTimeout(r, 100));

  try {
    // Run both models in parallel
    const [cocoResults, mnetResults] = await Promise.all([
      cocoModel.detect(imgEl),
      mnetModel.classify(imgEl, 10)
    ]);

    // Classify cropped regions from COCO detections
    const regionClassifications = [];
    for (const det of cocoResults) {
      if (det.score < 0.25) continue;
      try {
        const cropped = cropRegion(imgEl, det.bbox);
        const cropClass = await mnetModel.classify(cropped, 5);
        regionClassifications.push({ bbox: det.bbox, cocoClass: det.class, cocoScore: det.score, mnetClasses: cropClass });
      } catch (e) {
        regionClassifications.push({ bbox: det.bbox, cocoClass: det.class, cocoScore: det.score, mnetClasses: [] });
      }
    }

    // Map to SFI categories
    const sfiResults = mapToSFI(mnetResults, regionClassifications);

    // Draw bounding boxes
    drawBoundingBoxes(imgEl, regionClassifications, sfiResults);

    // Display results
    displayResults(sfiResults, mnetResults, cocoResults);
  } catch (err) {
    console.error('Analysis error:', err);
    resultsDiv.innerHTML = '<div class="no-results">Analysis failed. Please try a different image.</div>';
  }

  overlay.style.display = 'none';
}

// ── Crop a region from image ────────────────────────
function cropRegion(imgEl, bbox) {
  const [x, y, w, h] = bbox;
  const canvas = document.createElement('canvas');
  canvas.width = Math.max(w, 10);
  canvas.height = Math.max(h, 10);
  const ctx = canvas.getContext('2d');
  ctx.drawImage(imgEl, x, y, w, h, 0, 0, canvas.width, canvas.height);
  return canvas;
}

// ── Map detections to SFI categories ────────────────
function mapToSFI(globalMnet, regionClassifications) {
  const scores = {};
  SFI_CATEGORIES.forEach(cat => { scores[cat.name] = { score: 0, matches: [], cat }; });

  // Score from global MobileNet classification
  globalMnet.forEach(pred => {
    const label = pred.className.toLowerCase();
    SFI_CATEGORIES.forEach(cat => {
      cat.mnetKeys.forEach(key => {
        if (label.includes(key.toLowerCase())) {
          const s = pred.probability * 0.8;
          scores[cat.name].score += s;
          if (!scores[cat.name].matches.includes('image: ' + pred.className)) {
            scores[cat.name].matches.push('image: ' + pred.className);
          }
        }
      });
    });
  });

  // Score from region-level detections
  regionClassifications.forEach(region => {
    // COCO label matching
    SFI_CATEGORIES.forEach(cat => {
      cat.cocoKeys.forEach(key => {
        if (region.cocoClass.toLowerCase().includes(key.toLowerCase())) {
          scores[cat.name].score += region.cocoScore * 0.3;
        }
      });
    });

    // MobileNet on cropped region
    region.mnetClasses.forEach(pred => {
      const label = pred.className.toLowerCase();
      SFI_CATEGORIES.forEach(cat => {
        cat.mnetKeys.forEach(key => {
          if (label.includes(key.toLowerCase())) {
            const s = pred.probability * 1.0;
            scores[cat.name].score += s;
            if (!scores[cat.name].matches.includes('region: ' + pred.className)) {
              scores[cat.name].matches.push('region: ' + pred.className);
            }
          }
        });
      });
    });
  });

  // Apply boosts
  SFI_CATEGORIES.forEach(cat => {
    scores[cat.name].score += cat.boost;
  });

  // Normalize and filter
  const results = Object.values(scores)
    .filter(r => r.score > 0.05)
    .sort((a, b) => b.score - a.score);

  // Normalize scores to percentages (max = top score mapped to ~95%)
  if (results.length > 0) {
    const maxScore = results[0].score;
    results.forEach(r => {
      r.confidence = Math.min(95, Math.round((r.score / Math.max(maxScore, 0.5)) * 85));
    });
  }

  return results;
}

// ── Draw Bounding Boxes ─────────────────────────────
function drawBoundingBoxes(imgEl, regions, sfiResults) {
  const canvas = document.getElementById('resultCanvas');
  const wrap = document.getElementById('resultWrap');
  const displayWidth = wrap.clientWidth;
  const displayHeight = imgEl.naturalHeight * (displayWidth / imgEl.naturalWidth);

  canvas.width = displayWidth;
  canvas.height = displayHeight;
  canvas.style.height = displayHeight + 'px';

  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const scaleX = displayWidth / imgEl.naturalWidth;
  const scaleY = displayHeight / imgEl.naturalHeight;

  // Determine SFI category for each region
  regions.forEach((region, idx) => {
    let bestCat = null;
    let bestScore = 0;

    SFI_CATEGORIES.forEach(cat => {
      let regionScore = 0;
      // COCO match
      cat.cocoKeys.forEach(key => {
        if (region.cocoClass.toLowerCase().includes(key)) regionScore += region.cocoScore;
      });
      // MobileNet on crop
      region.mnetClasses.forEach(pred => {
        const label = pred.className.toLowerCase();
        cat.mnetKeys.forEach(key => {
          if (label.includes(key.toLowerCase())) regionScore += pred.probability;
        });
      });
      if (regionScore > bestScore) {
        bestScore = regionScore;
        bestCat = cat;
      }
    });

    if (!bestCat) {
      // Default: use the top SFI result
      bestCat = sfiResults.length > 0 ? sfiResults[0].cat : SFI_CATEGORIES[0];
    }

    const [x, y, w, h] = region.bbox;
    const sx = x * scaleX;
    const sy = y * scaleY;
    const sw = w * scaleX;
    const sh = h * scaleY;

    const color = bestCat.color;

    // Draw box
    ctx.strokeStyle = color;
    ctx.lineWidth = 2.5;
    ctx.setLineDash([]);
    ctx.strokeRect(sx, sy, sw, sh);

    // Semi-transparent fill
    ctx.fillStyle = color + '15';
    ctx.fillRect(sx, sy, sw, sh);

    // Label background
    const label = bestCat.name;
    ctx.font = 'bold 13px Inter, sans-serif';
    const textWidth = ctx.measureText(label).width;
    const labelH = 22;
    const labelY = sy > labelH + 4 ? sy - labelH - 2 : sy + 2;

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.roundRect(sx, labelY, textWidth + 14, labelH, 4);
    ctx.fill();

    // Label text
    ctx.fillStyle = '#000';
    ctx.fillText(label, sx + 7, labelY + 15);
  });

  // If no COCO detections but we have MobileNet results, draw a full-image label
  if (regions.length === 0 && sfiResults.length > 0) {
    const cat = sfiResults[0].cat;
    const color = cat.color;
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.setLineDash([8, 4]);
    ctx.strokeRect(8, 8, canvas.width - 16, canvas.height - 16);

    ctx.font = 'bold 16px Inter, sans-serif';
    const label = cat.name + ' (image-level)';
    const tw = ctx.measureText(label).width;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.roundRect(12, 12, tw + 20, 28, 6);
    ctx.fill();
    ctx.fillStyle = '#000';
    ctx.fillText(label, 22, 32);
    ctx.setLineDash([]);
  }
}

// ── Display Results List ────────────────────────────
function displayResults(sfiResults, globalMnet, cocoResults) {
  const div = document.getElementById('detectResults');

  if (sfiResults.length === 0) {
    div.innerHTML = `
      <div class="no-results">
        <p style="font-size:1.5rem;margin-bottom:8px;">&#128269;</p>
        <p>No SFI equipment detected in this image.</p>
        <p style="font-size:0.8rem;opacity:0.6;margin-top:4px;">
          Try an image of motorsport safety equipment &mdash; helmets, harnesses, roll cages, wheels, etc.
        </p>
      </div>`;
    return;
  }

  let html = '<div class="detect-results-title">Detected SFI Equipment Categories</div>';

  sfiResults.forEach(result => {
    const conf = result.confidence;
    const confColor = conf >= 60 ? 'var(--sfi-green)' : conf >= 30 ? 'var(--sfi-gold)' : 'var(--sfi-muted)';
    html += `
      <div class="detect-result-card">
        <div class="detect-result-color" style="background:${result.cat.color}"></div>
        <div class="detect-result-info">
          <div class="detect-result-name">${result.cat.name}</div>
          <div class="detect-result-items">${result.cat.items.slice(0, 3).join(' &bull; ')}${result.cat.items.length > 3 ? ' &bull; +' + (result.cat.items.length - 3) + ' more' : ''}</div>
        </div>
        <div style="text-align:right;">
          <div class="detect-result-conf" style="color:${confColor}">${conf}%</div>
          <div class="detect-result-conf-label">confidence</div>
        </div>
      </div>`;
  });

  // Raw model output (collapsible)
  html += `
    <details style="margin-top:20px;">
      <summary style="font-family:'Inter',sans-serif;font-size:0.8rem;color:var(--sfi-muted);cursor:pointer;padding:8px 0;">
        Show raw model output
      </summary>
      <div style="background:var(--sfi-surface);border:1px solid var(--sfi-border);border-radius:8px;padding:16px;margin-top:8px;font-family:monospace;font-size:0.75rem;color:var(--sfi-muted);line-height:1.8;">
        <strong style="color:var(--sfi-text);">COCO-SSD Detections:</strong><br>
        ${cocoResults.length === 0 ? 'None' : cocoResults.map(d => `${d.class} (${Math.round(d.score * 100)}%)`).join(', ')}<br><br>
        <strong style="color:var(--sfi-text);">MobileNet Classifications:</strong><br>
        ${globalMnet.slice(0, 5).map(p => `${p.className} (${Math.round(p.probability * 100)}%)`).join('<br>')}
      </div>
    </details>`;

  div.innerHTML = html;
}

// ── Build Category Reference Grid ───────────────────
function buildCatRef() {
  const grid = document.getElementById('catRefGrid');
  grid.innerHTML = SFI_CATEGORIES.map(cat => `
    <div class="cat-ref-item">
      <div class="cat-ref-name">
        <span class="cat-ref-dot" style="background:${cat.color}"></span>
        ${cat.name}
      </div>
      <div class="cat-ref-specs">${cat.items.join('<br>')}</div>
    </div>
  `).join('');
}

// ── Polyfill roundRect if needed ────────────────────
if (!CanvasRenderingContext2D.prototype.roundRect) {
  CanvasRenderingContext2D.prototype.roundRect = function(x, y, w, h, r) {
    if (typeof r === 'number') r = [r, r, r, r];
    this.moveTo(x + r[0], y);
    this.lineTo(x + w - r[1], y);
    this.quadraticCurveTo(x + w, y, x + w, y + r[1]);
    this.lineTo(x + w, y + h - r[2]);
    this.quadraticCurveTo(x + w, y + h, x + w - r[2], y + h);
    this.lineTo(x + r[3], y + h);
    this.quadraticCurveTo(x, y + h, x, y + h - r[3]);
    this.lineTo(x, y + r[0]);
    this.quadraticCurveTo(x, y, x + r[0], y);
    this.closePath();
    return this;
  };
}

// ── Init ────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  setupUpload();
  buildCatRef();
  loadModels();
});
</script>
