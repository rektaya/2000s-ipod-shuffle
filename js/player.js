(() => {
  "use strict";

  // ---------- mixtapes: 10 crates of 2000s hits, split by genre ----------
  const MIXTAPES = {
    pop: {
      name: "Pop Hits",
      tracks: [
        { title: "Rihanna — Umbrella", id: "CvBfHwUxHIk" },
        { title: "Black Eyed Peas — I Gotta Feeling", id: "uSD4vsh1zDA" },
        { title: "Beyoncé — Crazy In Love", id: "ViwtNLUqkMY" },
        { title: "Kelly Clarkson — Since U Been Gone", id: "2xUgTLfRVeM" }
      ]
    },
    rnb: {
      name: "R&B",
      tracks: [
        { title: "Usher — Yeah!", id: "GxBSyx85Kp8" },
        { title: "Alicia Keys — No One", id: "rywUS-ohqeE" },
        { title: "Destiny's Child — Say My Name", id: "sQgd6MccwZc" }
      ]
    },
    hiphop: {
      name: "Hip-Hop",
      tracks: [
        { title: "50 Cent — In Da Club", id: "5qm8PH4xAss" },
        { title: "Kanye West — Gold Digger", id: "PE0ynzc6-e4" },
        { title: "Missy Elliott — Get Ur Freak On", id: "FPoKiGQzbSQ" }
      ]
    },
    dance: {
      name: "Dance Party",
      tracks: [
        { title: "Daft Punk — One More Time", id: "FGBhQbmPwH8" },
        { title: "OutKast — Hey Ya!", id: "PWgvGjAhvIw" },
        { title: "Britney Spears — Toxic", id: "LOZuxwVk7TU" }
      ]
    },
    altrock: {
      name: "Alt Rock",
      tracks: [
        { title: "Eminem — Lose Yourself", id: "xFYQQPAOz7Y" },
        { title: "Gorillaz — Feel Good Inc.", id: "HyHNuVaZJ-k" },
        { title: "Avril Lavigne — Complicated", id: "HPPj6viIBmU" }
      ]
    },
    indie: {
      name: "Indie",
      tracks: [
        { title: "The Killers — Mr. Brightside", id: "gGdGFtwCNBE" },
        { title: "Franz Ferdinand — Take Me Out", id: "GhCXAiNz9Jo" },
        { title: "Arctic Monkeys — I Bet You Look Good on the Dancefloor", id: "pK7egZaT3hs" }
      ]
    },
    numetal: {
      name: "Nu-Metal",
      tracks: [
        { title: "Linkin Park — In the End", id: "eVTXPUF4Oz4" },
        { title: "Evanescence — Bring Me to Life", id: "3YxaaGgTQYM" },
        { title: "System of a Down — Chop Suey!", id: "OyLnXriLhpA" }
      ]
    },
    punk: {
      name: "Punk & Emo",
      tracks: [
        { title: "Fall Out Boy — Sugar, We're Goin Down", id: "uhG-vLZrb-g" },
        { title: "Paramore — Misery Business", id: "Heu3xuKfoPo" },
        { title: "My Chemical Romance — Welcome to the Black Parade", id: "RRKJiM9Njr8" }
      ]
    },
    latin: {
      name: "Latin",
      tracks: [
        { title: "Shakira — Hips Don't Lie", id: "pakogSCXdmY" },
        { title: "Daddy Yankee — Gasolina", id: "QhuMh97C0yc" },
        { title: "Enrique Iglesias — Hero", id: "koJlIGDImiU" }
      ]
    },
    country: {
      name: "Country",
      tracks: [
        { title: "Carrie Underwood — Before He Cheats", id: "WaSy8yy-mr8" },
        { title: "Rascal Flatts — Life Is a Highway", id: "5tXh_MfrMe0" },
        { title: "Taylor Swift — Love Story", id: "LHxXaY7NR3w" }
      ]
    }
  };

  let activeMixtape = "pop";
  let PLAYLIST = MIXTAPES[activeMixtape].tracks;

  const COLORS = {
    silver: { c1:"#e7e9eb", c2:"#a8adb3", ring:"#ffffff", ring2:"#f0f1f2", icon:"#8a8d91" },
    blue:   { c1:"#5aa7e0", c2:"#1f5fa8", ring:"#ffffff", ring2:"#f0f1f2", icon:"#8a8d91" },
    green:  { c1:"#9ecf4a", c2:"#5f8a1f", ring:"#ffffff", ring2:"#f0f1f2", icon:"#8a8d91" },
    orange: { c1:"#f6a53c", c2:"#c9701a", ring:"#ffffff", ring2:"#f0f1f2", icon:"#8a8d91" },
    pink:   { c1:"#f26fa0", c2:"#c22a6a", ring:"#ffffff", ring2:"#f0f1f2", icon:"#8a8d91" },
    dark:   { c1:"#4b4f54", c2:"#191b1d", ring:"#141516", ring2:"#000000", icon:"#c9cbce" }
  };

  const $ = (sel) => document.querySelector(sel);

  const stage = $("#stage");
  const ipod = $("#ipod");
  const bodyEl = $("#body");
  const powerSwitch = $("#powerSwitch");
  const playIcon = $("#playIcon");
  const pauseIcon = $("#pauseIcon");
  const colorCycle = $("#colorCycle");
  const COLOR_ORDER = ["silver", "blue", "green", "orange", "pink", "dark"];
  let colorIndex = 0;

  let power = false;
  let ytPlayer = null;
  let ytReady = false;
  let currentIndex = 0;
  let isPlaying = false;
  let volume = 70;

  // ---------- YouTube IFrame API ----------
  window.onYouTubeIframeAPIReady = function () {
    ytPlayer = new YT.Player("ytplayer", {
      height: "180",
      width: "320",
      videoId: PLAYLIST[0].id,
      playerVars: { autoplay: 0, controls: 0, disablekb: 1, fs: 0, modestbranding: 1 },
      events: {
        onReady: () => {
          ytReady = true;
          ytPlayer.setVolume(volume);
        },
        onStateChange: onPlayerStateChange,
        onError: () => {
          setTimeout(() => power && next(), 1200);
        }
      }
    });
  };

  function onPlayerStateChange(e) {
    if (e.data === YT.PlayerState.ENDED) next();
    if (e.data === YT.PlayerState.PLAYING) { isPlaying = true; updatePlayIcon(); }
    if (e.data === YT.PlayerState.PAUSED) { isPlaying = false; updatePlayIcon(); }
  }

  function updatePlayIcon() {
    playIcon.style.display = isPlaying ? "none" : "block";
    pauseIcon.style.display = isPlaying ? "block" : "none";
  }

  function loadTrack(i, autoplay) {
    currentIndex = ((i % PLAYLIST.length) + PLAYLIST.length) % PLAYLIST.length;
    const track = PLAYLIST[currentIndex];
    if (ytReady) {
      if (autoplay) ytPlayer.loadVideoById(track.id);
      else ytPlayer.cueVideoById(track.id);
    }
  }

  function ensurePlayerAndPlay() {
    if (!ytReady) {
      const wait = setInterval(() => {
        if (ytReady) {
          clearInterval(wait);
          loadTrack(currentIndex, true);
        }
      }, 200);
      return;
    }
    loadTrack(currentIndex, true);
  }

  function togglePlay() {
    if (!power) return;
    if (!ytReady) { ensurePlayerAndPlay(); return; }
    if (isPlaying) {
      ytPlayer.pauseVideo();
    } else {
      if (ytPlayer.getPlayerState() === -1 || ytPlayer.getPlayerState() === YT.PlayerState.CUED) {
        ensurePlayerAndPlay();
      } else {
        ytPlayer.playVideo();
      }
    }
  }

  function next() {
    if (!power) return;
    loadTrack(currentIndex + 1, true);
  }
  function prev() {
    if (!power) return;
    loadTrack(currentIndex - 1, true);
  }

  function changeVolume(delta) {
    if (!power) return;
    volume = Math.max(0, Math.min(100, volume + delta));
    if (ytReady) ytPlayer.setVolume(volume);
  }

  // ---------- power switch ----------
  function setPower(on) {
    power = on;
    powerSwitch.classList.toggle("on", on);
    powerSwitch.setAttribute("aria-checked", String(on));
    if (on) {
      loadTrack(currentIndex, false);
    } else {
      if (ytReady && isPlaying) ytPlayer.pauseVideo();
    }
  }

  powerSwitch.addEventListener("click", () => setPower(!power));

  $("#btnPlay").addEventListener("click", togglePlay);
  $("#btnNext").addEventListener("click", next);
  $("#btnPrev").addEventListener("click", prev);
  $("#btnVolUp").addEventListener("click", () => changeVolume(8));
  $("#btnVolDown").addEventListener("click", () => changeVolume(-8));

  // ---------- color — single corner dot on the body cycles the housing color ----------
  function applyColor(name) {
    const c = COLORS[name] || COLORS.silver;
    bodyEl.style.setProperty("--c1", c.c1);
    bodyEl.style.setProperty("--c2", c.c2);
    document.documentElement.style.setProperty("--ring-fill", c.ring);
    document.documentElement.style.setProperty("--ring-fill2", c.ring2);
    document.querySelectorAll(".seg").forEach(el => el.style.color = c.icon);
  }

  colorCycle.addEventListener("click", (e) => {
    e.stopPropagation();
    colorIndex = (colorIndex + 1) % COLOR_ORDER.length;
    applyColor(COLOR_ORDER[colorIndex]);
  });

  applyColor(COLOR_ORDER[colorIndex]);

  // ---------- mixtapes (cassette rack, left side) ----------
  function selectMixtape(key) {
    if (!MIXTAPES[key] || key === activeMixtape) return;
    activeMixtape = key;
    PLAYLIST = MIXTAPES[key].tracks;
    currentIndex = 0;
    document.querySelectorAll(".cassette").forEach(c => c.classList.toggle("active", c.dataset.mixtape === key));
    if (power) loadTrack(0, isPlaying);
  }
  document.querySelectorAll(".cassette").forEach(c => {
    c.addEventListener("click", () => selectMixtape(c.dataset.mixtape));
  });

  // ---------- drag-to-spin (grab a corner, keeps spinning while held) ----------
  const CORNER_ZONE = 50; // px from each visual corner considered "grabbable"
  const INITIAL_ROTATION = -5; // just a slight tilt off vertical, no perspective skew

  let dragging = false;
  let lastAngle = 0;
  let rotation = INITIAL_ROTATION;
  let velocity = 0;
  let lastTime = 0;
  let spinRAF = null;
  let resetTimer = null;
  let movedDuringDrag = false;

  function suppressNextClick(e) {
    e.stopPropagation();
    e.preventDefault();
  }

  function centerOf(el) {
    const r = el.getBoundingClientRect();
    return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
  }

  // Corners of the ipod in viewport space, accounting for its current
  // rotation — a plain getBoundingClientRect() only gives the axis-aligned
  // box, whose corners drift away from the visible corners once rotated.
  function getVisualCorners() {
    const c = centerOf(ipod);
    const halfW = ipod.offsetWidth / 2;
    const halfH = ipod.offsetHeight / 2;
    const rad = (rotation * Math.PI) / 180;
    const cos = Math.cos(rad);
    const sin = Math.sin(rad);
    return [
      [-halfW, -halfH], [halfW, -halfH], [-halfW, halfH], [halfW, halfH]
    ].map(([x, y]) => ({
      x: c.x + x * cos - y * sin,
      y: c.y + x * sin + y * cos
    }));
  }

  function isNearCorner(clientX, clientY) {
    return getVisualCorners().some(c => Math.hypot(clientX - c.x, clientY - c.y) < CORNER_ZONE);
  }

  function angleFromCenter(clientX, clientY) {
    const c = centerOf(stage);
    return Math.atan2(clientY - c.y, clientX - c.x) * (180 / Math.PI);
  }

  function renderStageTransform() {
    stage.style.transform = `rotate(${rotation}deg)`;
  }

  function onPointerDown(e) {
    // never hijack a press that started on an actual control (play, prev,
    // next, vol, power, color dot) even if it sits inside the corner zone
    if (e.target.closest("button")) return;
    if (!isNearCorner(e.clientX, e.clientY)) return;
    dragging = true;
    movedDuringDrag = false;
    cancelAnimationFrame(spinRAF);
    clearTimeout(resetTimer);
    stage.classList.remove("reset-anim");
    lastAngle = angleFromCenter(e.clientX, e.clientY);
    lastTime = performance.now();
    velocity = 0;
    ipod.setPointerCapture && ipod.setPointerCapture(e.pointerId);
  }

  // While the pointer stays down, every move keeps rotating the player live —
  // it does not need to be released to spin.
  function onPointerMove(e) {
    if (!dragging) return;
    const angle = angleFromCenter(e.clientX, e.clientY);
    let delta = angle - lastAngle;
    if (delta > 180) delta -= 360;
    if (delta < -180) delta += 360;
    if (Math.abs(delta) > 0.3) movedDuringDrag = true;
    const now = performance.now();
    const dt = Math.max(now - lastTime, 1);
    velocity = delta / dt * 16.6; // deg per frame(~60fps), used for release inertia
    rotation += delta;
    lastAngle = angle;
    lastTime = now;
    renderStageTransform();
  }

  function onPointerUp() {
    if (!dragging) return;
    dragging = false;
    if (movedDuringDrag) {
      window.addEventListener("click", suppressNextClick, { capture: true, once: true });
    }
    spin();
  }

  function spin() {
    const friction = 0.965;
    function frame() {
      velocity *= friction;
      rotation += velocity;
      renderStageTransform();
      if (Math.abs(velocity) > 0.15) {
        spinRAF = requestAnimationFrame(frame);
      }
    }
    spinRAF = requestAnimationFrame(frame);
  }

  function resetRotation() {
    cancelAnimationFrame(spinRAF);
    dragging = false;
    velocity = 0;
    stage.classList.add("reset-anim");
    rotation = INITIAL_ROTATION;
    renderStageTransform();
    clearTimeout(resetTimer);
    resetTimer = setTimeout(() => stage.classList.remove("reset-anim"), 460);
  }

  window.addEventListener("pointerdown", onPointerDown);
  window.addEventListener("pointermove", onPointerMove);
  window.addEventListener("pointerup", onPointerUp);
  window.addEventListener("pointercancel", onPointerUp);
  ipod.addEventListener("dblclick", resetRotation);

  renderStageTransform();
  updatePlayIcon();
})();
