// ════════════════════════════════════════════════════
// Detect Input – Upload & Camera Handling
// Single Responsibility: Accept images from the user
// via file upload, drag-drop, or camera capture.
// ════════════════════════════════════════════════════

const DetectInput = (() => {
  let cameraStream = null;
  let facingMode = 'environment';
  let _onImageReady = null;

  function init(onImageReady) {
    _onImageReady = onImageReady;
    setupUpload();
  }

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
    if (!DetectEngine.isReady()) {
      alert('Models are still loading. Please wait a moment.');
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => _onImageReady(img);
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  function switchTab(tab) {
    document.querySelectorAll('.detect-tab').forEach((t, i) => {
      t.classList.toggle('active', (tab === 'upload' && i === 0) || (tab === 'camera' && i === 1));
    });
    document.getElementById('uploadPanel').style.display = tab === 'upload' ? 'block' : 'none';
    document.getElementById('cameraPanel').style.display = tab === 'camera' ? 'block' : 'none';
    if (tab === 'upload' && cameraStream) stopCamera();
  }

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

      setCameraButtons(true);
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
    document.getElementById('cameraVideo').srcObject = null;
    setCameraButtons(false);

    const overlay = document.getElementById('cameraOverlay');
    overlay.getContext('2d').clearRect(0, 0, overlay.width, overlay.height);
  }

  function flipCamera() {
    facingMode = facingMode === 'environment' ? 'user' : 'environment';
    startCamera();
  }

  function captureAndAnalyze() {
    if (!DetectEngine.isReady()) return;
    const video = document.getElementById('cameraVideo');
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = video.videoWidth;
    tempCanvas.height = video.videoHeight;
    tempCanvas.getContext('2d').drawImage(video, 0, 0);

    const img = new Image();
    img.onload = () => _onImageReady(img);
    img.src = tempCanvas.toDataURL('image/jpeg', 0.9);
  }

  function setCameraButtons(streaming) {
    document.getElementById('btnStartCam').disabled = streaming;
    document.getElementById('btnCapture').disabled = !streaming;
    document.getElementById('btnFlip').disabled = !streaming;
    document.getElementById('btnStopCam').disabled = !streaming;
  }

  return { init, switchTab, startCamera, stopCamera, flipCamera, captureAndAnalyze };
})();
