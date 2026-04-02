---
layout: sfi
title: SFI Foundation
description: Setting the Standard for Motorsports Safety Since 1978
permalink: /
---

<section class="sfi-hero">
  <div class="sfi-hero-content">
    <div class="sfi-hero-badge">NON-PROFIT SINCE 1978</div>
    <h1><span class="gold">SFI</span> Foundation</h1>
    <p class="sfi-hero-sub">
      Setting the standard for motorsports safety. We develop and administer quality
      assurance programs for specialty performance and racing equipment across
      drag racing, auto racing, boat racing, and more.
    </p>
    <div class="sfi-hero-actions">
      <a href="/sfi-specs/" class="sfi-btn sfi-btn-primary">Search Specifications &rarr;</a>
      <a href="/about/" class="sfi-btn sfi-btn-secondary">Learn More</a>
    </div>
  </div>
</section>

<div class="sfi-stats-strip">
  <div class="sfi-stat-item">
    <div class="sfi-stat-num">100+</div>
    <div class="sfi-stat-desc">Sanctioning Bodies</div>
  </div>
  <div class="sfi-stat-item">
    <div class="sfi-stat-num">300+</div>
    <div class="sfi-stat-desc">Manufacturers</div>
  </div>
  <div class="sfi-stat-item">
    <div class="sfi-stat-num">85+</div>
    <div class="sfi-stat-desc">Spec Programs</div>
  </div>
  <div class="sfi-stat-item">
    <div class="sfi-stat-num">47</div>
    <div class="sfi-stat-desc">Years of Service</div>
  </div>
</div>

<section class="sfi-sect">
  <div class="sfi-sect-label">What We Do</div>
  <div class="sfi-sect-title">Quality Assurance for Motorsports</div>
  <div class="sfi-sect-desc">
    The SFI Foundation serves the automotive aftermarket and motorsports industry through
    rigorous standards development, testing, and certification.
  </div>

  <div class="sfi-features">
    <a href="/about/" class="sfi-feature-card" style="text-decoration:none;">
      <div class="sfi-feature-icon">&#9881;&#65039;</div>
      <h3>Specs Program</h3>
      <p>Quality performance specifications &mdash; the heart of SFI. Standards for design, manufacturing, and evaluation of racing safety products.</p>
    </a>
    <a href="/services/" class="sfi-feature-card" style="text-decoration:none;">
      <div class="sfi-feature-icon">&#128300;</div>
      <h3>Test Laboratory</h3>
      <p>Our Poway, CA lab simulates real-world conditions for testing heat resistance, seatbelt strength, and mechanical properties.</p>
    </a>
    <a href="/services/" class="sfi-feature-card" style="text-decoration:none;">
      <div class="sfi-feature-icon">&#128736;&#65039;</div>
      <h3>Certification & Training</h3>
      <p>Tech inspector certification and incident response training for safety professionals across motorsports.</p>
    </a>
    <a href="/sfi-specs/" class="sfi-feature-card" style="text-decoration:none;">
      <div class="sfi-feature-icon">&#129302;</div>
      <h3>ML Spec Search</h3>
      <p>Machine learning-powered tool to identify SFI specifications from plain-text descriptions of any racing part.</p>
    </a>
  </div>
</section>

<div class="sfi-divider"><hr></div>

<section class="sfi-sect">
  <div class="sfi-sect-label">Browse Specs</div>
  <div class="sfi-sect-title">Specification Categories</div>
  <div class="sfi-sect-desc">
    SFI specifications cover safety equipment used across all forms of motorsport.
  </div>

  <div class="sfi-cat-browse">
    <a class="sfi-cat-tile" href="/specs/">
      <span class="sfi-cat-tile-icon">&#128737;&#65039;</span>
      <div class="sfi-cat-tile-name">Protective Gear & Restraints</div>
      <div class="sfi-cat-tile-count">Suits, helmets, harnesses</div>
    </a>
    <a class="sfi-cat-tile" href="/specs/">
      <span class="sfi-cat-tile-icon">&#127950;&#65039;</span>
      <div class="sfi-cat-tile-name">Auto Racing</div>
      <div class="sfi-cat-tile-count">Roll cages, seats, fuel cells</div>
    </a>
    <a class="sfi-cat-tile" href="/specs/">
      <span class="sfi-cat-tile-icon">&#127937;</span>
      <div class="sfi-cat-tile-name">Drag Racing</div>
      <div class="sfi-cat-tile-count">Superchargers, clutches, turbos</div>
    </a>
    <a class="sfi-cat-tile" href="/specs/">
      <span class="sfi-cat-tile-icon">&#128295;</span>
      <div class="sfi-cat-tile-name">Chassis</div>
      <div class="sfi-cat-tile-count">Drag racing chassis specs</div>
    </a>
    <a class="sfi-cat-tile" href="/specs/">
      <span class="sfi-cat-tile-icon">&#9981;</span>
      <div class="sfi-cat-tile-name">Fuel Related</div>
      <div class="sfi-cat-tile-count">Fuel systems, tanks, lines</div>
    </a>
    <a class="sfi-cat-tile" href="/specs/">
      <span class="sfi-cat-tile-icon">&#128676;</span>
      <div class="sfi-cat-tile-name">Boat Racing</div>
      <div class="sfi-cat-tile-count">Marine safety equipment</div>
    </a>
    <a class="sfi-cat-tile" href="/specs/">
      <span class="sfi-cat-tile-icon">&#128668;</span>
      <div class="sfi-cat-tile-name">Tractor Pulling</div>
      <div class="sfi-cat-tile-count">Pulling chassis & components</div>
    </a>
  </div>
</section>

<div class="sfi-divider"><hr></div>

<section class="sfi-sect" id="safety-showcase">
  <div class="sfi-sect-label">Interactive</div>
  <div class="sfi-sect-title">Safety Showcase</div>
  <div class="sfi-sect-desc">Hover over the glowing zones to explore the SFI specs that protect drivers — click to pin details</div>

  <div style="display:grid;grid-template-columns:1fr 300px;gap:20px;align-items:start;margin-top:28px;">
    <div style="position:relative;background:#070d1a;border-radius:14px;border:1px solid rgba(240,165,0,0.15);overflow:hidden;cursor:crosshair;">
      <canvas id="safetyCanvas" width="850" height="320" style="width:100%;height:auto;display:block;"></canvas>
      <div style="position:absolute;bottom:9px;left:50%;transform:translateX(-50%);background:rgba(0,0,0,0.65);color:rgba(240,165,0,0.6);font-size:0.68rem;padding:3px 11px;border-radius:20px;white-space:nowrap;pointer-events:none;font-family:'Inter',sans-serif;letter-spacing:0.5px;">Hover zones · Click to pin</div>
    </div>
    <div id="showcasePanel" style="background:#0d1525;border-radius:14px;border:1px solid rgba(240,165,0,0.12);padding:20px;min-height:260px;display:flex;flex-direction:column;">
      <div id="showcaseEmpty" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:10px;">
        <div style="font-size:2.5rem;opacity:0.3;">🏎️</div>
        <p style="color:#8b949e;font-size:0.84rem;line-height:1.5;font-family:'Inter',sans-serif;max-width:200px;margin:0;">Hover over a glowing zone to see SFI specs</p>
      </div>
      <div id="showcaseContent" style="display:none;flex-direction:column;flex:1;">
        <div id="spCat" style="font-size:0.68rem;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:4px;font-family:'Inter',sans-serif;"></div>
        <h3 id="spTitle" style="font-family:'Oswald',sans-serif;font-size:1.35rem;font-weight:700;margin:0 0 9px;text-transform:uppercase;"></h3>
        <p id="spDesc" style="font-size:0.8rem;color:#8b949e;line-height:1.6;margin-bottom:13px;font-family:'Inter',sans-serif;"></p>
        <div style="font-size:0.68rem;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;color:#8b949e;margin-bottom:6px;font-family:'Inter',sans-serif;">SFI Specifications</div>
        <div id="spSpecs"></div>
        <a href="/sfi-specs/" style="display:inline-flex;align-items:center;justify-content:center;margin-top:14px;padding:8px 14px;background:rgba(240,165,0,0.08);border:1px solid rgba(240,165,0,0.25);border-radius:8px;color:#F0A500;font-family:'Inter',sans-serif;font-weight:600;font-size:0.8rem;text-decoration:none;">Search All Specs →</a>
      </div>
    </div>
  </div>

  <div id="showcasePills" style="display:flex;flex-wrap:wrap;gap:7px;margin-top:16px;justify-content:center;"></div>
</section>

<script>
(function(){
  var PARTS=[
    {id:'helmet',label:'Helmet',icon:'🪖',color:'#F0A500',pulse:0,
     shape:'ellipse',cx:552,cy:112,rx:23,ry:20,
     category:'Personal Protective Gear',
     desc:'SFI-certified helmets protect drivers from head impacts. Flame-resistant models add critical seconds to escape a fire.',
     specs:[{num:'24.1',name:'Youth Full Face Helmets',pdf:'specs/Spec_24.1.pdf'},{num:'31.1',name:'Flame Resistant Motorsports Helmets',pdf:'specs/Spec_31.1_032713.pdf'},{num:'41.1',name:'Motorsports Helmet',pdf:'specs/Spec_41.1_032713.pdf'}]},
    {id:'rollcage',label:'Roll Cage',icon:'🔩',color:'#f85149',pulse:1.6,
     shape:'rect',x:390,y:104,w:28,h:86,
     category:'Chassis & Structure',
     desc:'The roll cage\'s C-pillar is the backbone of driver protection during rollovers and side impacts. SFI specs cover padding and net requirements.',
     specs:[{num:'45.1',name:'Roll Bar Padding',pdf:'specs/Spec_45.1_081105.pdf'},{num:'37.1',name:'Roll Cage Nets',pdf:'specs/Spec_37.1_101106.pdf'},{num:'10.1G',name:'Funny Car Roll Cage',pdf:null}]},
    {id:'driver',label:'Suit & Harness',icon:'🧥',color:'#7c3aed',pulse:3.2,
     shape:'rect',x:468,y:142,w:108,h:56,
     category:'Personal Protective Gear & Restraints',
     desc:'Multi-layer fire-resistant suits give drivers seconds to escape. Racing harnesses distribute crash forces and prevent ejection.',
     specs:[{num:'3.2A',name:'Driver Suits',pdf:'specs/Spec_3.2A_062620.pdf'},{num:'3.4',name:'Advanced Driver Suits',pdf:'specs/Spec_3.4_101819.pdf'},{num:'16.1',name:'Driver Restraint Assemblies',pdf:'specs/Spec_16.1_022614.pdf'},{num:'16.6',name:'Advanced Motorsport Driver Restraint Assemblies',pdf:'specs/Spec_16.6_042018.pdf'}]},
    {id:'fuelcell',label:'Fuel Cell',icon:'⛽',color:'#3fb950',pulse:4.8,
     shape:'rect',x:104,y:180,w:94,h:56,
     category:'Fuel Related',
     desc:'Crash-resistant fuel cells prevent fuel spillage and fire after impact. Required in nearly all sanctioned racing classes.',
     specs:[{num:'28.1',name:'Polymer (Foam-Filled) Fuel Cells',pdf:'specs/Spec_28.1_082517.pdf'},{num:'28.2',name:'Crash Resistant Fuel Cells',pdf:'specs/Spec_28.2_071400.pdf'},{num:'32.1',name:'Stock Car Fuel Cell Bladder',pdf:'specs/Spec_32.1.pdf'}]}
  ];
  var PDF_BASE='https://www.sfifoundation.com/wp-content/pdfs/';

  var canvas=document.getElementById('safetyCanvas');
  if(!canvas)return;
  var ctx=canvas.getContext('2d');
  var activeId=null,hoveredId=null,phase=0;

  function getZone(mx,my){
    var r=canvas.getBoundingClientRect(),sx=canvas.width/r.width,sy=canvas.height/r.height;
    var cx=(mx-r.left)*sx,cy=(my-r.top)*sy;
    for(var i=0;i<PARTS.length;i++){
      var p=PARTS[i];
      if(p.shape==='ellipse'){var dx=(cx-p.cx)/p.rx,dy=(cy-p.cy)/p.ry;if(dx*dx+dy*dy<=1)return p;}
      else if(cx>=p.x&&cx<=p.x+p.w&&cy>=p.y&&cy<=p.y+p.h)return p;
    }
    return null;
  }

  function showPanel(part){
    document.getElementById('showcaseEmpty').style.display='none';
    var c=document.getElementById('showcaseContent');c.style.display='flex';
    var cat=document.getElementById('spCat');cat.textContent=part.category;cat.style.color=part.color;
    var t=document.getElementById('spTitle');t.textContent=part.label;t.style.color=part.color;
    document.getElementById('spDesc').textContent=part.desc;
    document.getElementById('spSpecs').innerHTML=part.specs.map(function(s){
      var pdfLink=s.pdf?'<a href="'+PDF_BASE+s.pdf+'" target="_blank" style="margin-left:auto;font-size:0.68rem;color:'+part.color+';opacity:0.8;text-decoration:none;border:1px solid '+part.color+'44;padding:2px 7px;border-radius:10px;white-space:nowrap;">PDF ↗</a>':'';
      return '<div style="display:flex;align-items:center;gap:9px;padding:6px 9px;background:rgba(255,255,255,0.04);border-radius:7px;margin-bottom:5px;border:1px solid rgba(255,255,255,0.05);"><span style="font-family:Oswald,sans-serif;font-weight:700;font-size:0.9rem;min-width:50px;color:'+part.color+'">SFI '+s.num+'</span><span style="font-size:0.76rem;color:#c9d1d9;font-family:Inter,sans-serif;line-height:1.3;flex:1;">'+s.name+'</span>'+pdfLink+'</div>';
    }).join('');
    document.querySelectorAll('.sc-pill').forEach(function(el){
      var isThis=el.dataset.id===part.id;
      el.style.background=isThis?part.color+'28':'transparent';
      var pp=PARTS.find(function(x){return x.id===el.dataset.id;});
      if(pp){el.style.borderColor=isThis?pp.color:pp.color+'55';el.style.color=isThis?pp.color:pp.color+'99';}
    });
  }
  function hidePanel(){
    document.getElementById('showcaseEmpty').style.display='flex';
    document.getElementById('showcaseContent').style.display='none';
    document.querySelectorAll('.sc-pill').forEach(function(el){
      var pp=PARTS.find(function(x){return x.id===el.dataset.id;});
      if(pp){el.style.background='transparent';el.style.borderColor=pp.color+'55';el.style.color=pp.color+'99';}
    });
  }

  function draw(){
    var W=850,H=320;
    ctx.fillStyle='#070d1a';ctx.fillRect(0,0,W,H);
    ctx.strokeStyle='rgba(240,165,0,0.03)';ctx.lineWidth=1;
    for(var x=0;x<W;x+=50){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,H);ctx.stroke();}
    for(var y=0;y<H;y+=50){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke();}
    var gg=ctx.createLinearGradient(0,295,0,320);gg.addColorStop(0,'rgba(240,165,0,0.06)');gg.addColorStop(1,'transparent');
    ctx.fillStyle=gg;ctx.fillRect(80,295,720,25);

    // Car body
    ctx.save();ctx.shadowColor='rgba(240,165,0,0.1)';ctx.shadowBlur=20;
    ctx.beginPath();
    ctx.moveTo(100,248);ctx.lineTo(100,195);ctx.lineTo(148,168);ctx.lineTo(240,156);
    ctx.lineTo(315,140);ctx.lineTo(388,116);ctx.lineTo(396,108);ctx.lineTo(540,104);
    ctx.lineTo(578,104);ctx.lineTo(628,114);ctx.lineTo(668,128);ctx.lineTo(720,148);
    ctx.lineTo(782,158);ctx.bezierCurveTo(822,161,836,180,834,215);
    ctx.lineTo(834,250);ctx.lineTo(800,256);ctx.lineTo(758,258);
    ctx.arc(700,258,55,0,Math.PI,true);
    ctx.lineTo(275,258);ctx.arc(220,258,55,0,Math.PI,true);
    ctx.lineTo(100,258);ctx.closePath();
    ctx.fillStyle='#18253a';ctx.fill();
    ctx.strokeStyle='rgba(240,165,0,0.22)';ctx.lineWidth=1.5;ctx.stroke();
    ctx.restore();

    // Side window
    ctx.beginPath();ctx.moveTo(396,108);ctx.lineTo(540,104);ctx.lineTo(578,104);
    ctx.lineTo(625,116);ctx.lineTo(625,157);ctx.lineTo(580,160);ctx.lineTo(396,153);ctx.closePath();
    ctx.fillStyle='rgba(0,212,255,0.06)';ctx.fill();ctx.strokeStyle='rgba(0,212,255,0.16)';ctx.lineWidth=1;ctx.stroke();

    // Windshield
    ctx.beginPath();ctx.moveTo(625,116);ctx.lineTo(668,128);ctx.lineTo(710,150);
    ctx.lineTo(668,160);ctx.lineTo(625,157);ctx.closePath();
    ctx.fillStyle='rgba(0,212,255,0.08)';ctx.fill();ctx.strokeStyle='rgba(0,212,255,0.18)';ctx.lineWidth=1;ctx.stroke();

    // Rear window
    ctx.beginPath();ctx.moveTo(315,140);ctx.lineTo(388,116);ctx.lineTo(396,108);
    ctx.lineTo(396,153);ctx.lineTo(325,160);ctx.closePath();
    ctx.fillStyle='rgba(0,212,255,0.04)';ctx.fill();

    // Headlight
    ctx.save();ctx.shadowColor='rgba(240,165,0,0.45)';ctx.shadowBlur=8;
    ctx.beginPath();ctx.ellipse(808,196,8,16,-0.25,0,Math.PI*2);
    ctx.fillStyle='rgba(240,165,0,0.1)';ctx.fill();ctx.strokeStyle='rgba(240,165,0,0.4)';ctx.lineWidth=1;ctx.stroke();
    ctx.restore();

    // Door seam
    ctx.beginPath();ctx.moveTo(500,160);ctx.lineTo(500,250);
    ctx.strokeStyle='rgba(240,165,0,0.09)';ctx.lineWidth=1;ctx.stroke();

    // Wheels
    [{cx:220,cy:265,r:44},{cx:700,cy:265,r:44}].forEach(function(w){
      ctx.save();ctx.shadowColor='rgba(240,165,0,0.15)';ctx.shadowBlur=10;
      ctx.beginPath();ctx.arc(w.cx,w.cy,w.r,0,Math.PI*2);
      ctx.fillStyle='#09101a';ctx.fill();ctx.strokeStyle='rgba(240,165,0,0.3)';ctx.lineWidth=2.5;ctx.stroke();
      ctx.restore();
      ctx.beginPath();ctx.arc(w.cx,w.cy,w.r*0.58,0,Math.PI*2);
      ctx.fillStyle='#121e2e';ctx.fill();ctx.strokeStyle='rgba(240,165,0,0.2)';ctx.lineWidth=1.5;ctx.stroke();
      for(var s=0;s<5;s++){
        var a=(s/5)*Math.PI*2;
        ctx.beginPath();ctx.moveTo(w.cx+Math.cos(a)*w.r*0.1,w.cy+Math.sin(a)*w.r*0.1);
        ctx.lineTo(w.cx+Math.cos(a)*w.r*0.53,w.cy+Math.sin(a)*w.r*0.53);
        ctx.strokeStyle='rgba(240,165,0,0.16)';ctx.lineWidth=2;ctx.stroke();
      }
      ctx.beginPath();ctx.arc(w.cx,w.cy,4,0,Math.PI*2);ctx.fillStyle='rgba(240,165,0,0.3)';ctx.fill();
    });

    // Zones
    phase+=0.025;
    PARTS.forEach(function(p){
      var isA=activeId===p.id,isH=hoveredId===p.id;
      var pulse=0.5+0.5*Math.sin(phase*1.8+p.pulse);
      ctx.save();
      if(isA||isH){ctx.shadowColor=p.color;ctx.shadowBlur=isA?16:10;}
      ctx.globalAlpha=isA?0.45:isH?0.32:0.08+pulse*0.07;
      ctx.fillStyle=p.color;ctx.beginPath();
      if(p.shape==='ellipse')ctx.ellipse(p.cx,p.cy,p.rx,p.ry,0,0,Math.PI*2);
      else{if(ctx.roundRect)ctx.roundRect(p.x,p.y,p.w,p.h,5);else ctx.rect(p.x,p.y,p.w,p.h);}
      ctx.fill();
      ctx.globalAlpha=isA?1:isH?0.8:0.3+pulse*0.3;
      ctx.strokeStyle=p.color;ctx.lineWidth=isA?2.5:isH?2:1.5;
      ctx.beginPath();
      if(p.shape==='ellipse')ctx.ellipse(p.cx,p.cy,p.rx,p.ry,0,0,Math.PI*2);
      else{if(ctx.roundRect)ctx.roundRect(p.x,p.y,p.w,p.h,5);else ctx.rect(p.x,p.y,p.w,p.h);}
      ctx.stroke();
      ctx.globalAlpha=1;ctx.restore();

      var lx=p.shape==='ellipse'?p.cx:p.x+p.w/2,ly=p.shape==='ellipse'?p.cy:p.y+p.h/2;
      ctx.save();ctx.globalAlpha=isA||isH?1:0.4+pulse*0.3;
      ctx.beginPath();ctx.arc(lx,ly,isA||isH?5:3,0,Math.PI*2);ctx.fillStyle=p.color;ctx.fill();
      ctx.restore();

      if(isH||isA){
        var ty=(p.shape==='ellipse'?p.cy-p.ry:p.y)-10;
        ctx.save();ctx.font='bold 11px Inter,sans-serif';
        var tw=ctx.measureText(p.label).width;
        ctx.fillStyle='rgba(0,0,0,0.88)';ctx.beginPath();
        if(ctx.roundRect)ctx.roundRect(lx-tw/2-5,ty-12,tw+10,16,7);else ctx.rect(lx-tw/2-5,ty-12,tw+10,16);
        ctx.fill();ctx.fillStyle=p.color;ctx.textAlign='center';ctx.fillText(p.label,lx,ty);
        ctx.restore();
      }
    });
  }

  function loop(){draw();requestAnimationFrame(loop);}

  canvas.addEventListener('mousemove',function(e){
    var z=getZone(e.clientX,e.clientY),nid=z?z.id:null;
    if(nid!==hoveredId){hoveredId=nid;canvas.style.cursor=nid?'pointer':'crosshair';
      if(nid&&nid!==activeId)showPanel(PARTS.find(function(p){return p.id===nid;}));
      else if(!nid&&!activeId)hidePanel();}
  });
  canvas.addEventListener('mouseleave',function(){hoveredId=null;canvas.style.cursor='crosshair';if(!activeId)hidePanel();});
  canvas.addEventListener('click',function(e){
    var z=getZone(e.clientX,e.clientY);
    if(z){activeId=activeId===z.id?null:z.id;if(activeId)showPanel(z);else hidePanel();}
    else{activeId=null;hidePanel();}
  });

  var pillsEl=document.getElementById('showcasePills');
  if(pillsEl){PARTS.forEach(function(p){
    var btn=document.createElement('button');
    btn.className='sc-pill';btn.dataset.id=p.id;btn.textContent=p.icon+' '+p.label;
    btn.style.cssText='padding:5px 12px;border-radius:20px;font-size:0.75rem;font-weight:600;font-family:Inter,sans-serif;cursor:pointer;border:1px solid '+p.color+'55;color:'+p.color+'99;background:transparent;transition:all 0.18s;';
    btn.addEventListener('click',function(){activeId=activeId===p.id?null:p.id;if(activeId)showPanel(p);else hidePanel();});
    pillsEl.appendChild(btn);
  });}

  loop();
})();
</script>

<div class="sfi-divider"><hr></div>

<section class="sfi-sect">
  <div class="sfi-cta-banner">
    <h2>FIND YOUR SPECIFICATION</h2>
    <p>
      Search our complete database or use the ML-powered classifier
      to identify the right spec for any racing part.
    </p>
    <a href="/sfi-specs/" class="sfi-btn sfi-btn-primary">Open Spec Search &rarr;</a>
    <a href="/sfi-specs/#classify" class="sfi-btn sfi-btn-secondary">ML Classifier</a>
  </div>
</section>
