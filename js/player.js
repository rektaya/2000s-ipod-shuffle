(() => {
  "use strict";

  // ---------- mixtapes: 10 crates of 2000s hits, split by genre, 10 tracks each ----------
  const MIXTAPES = {
    pop: {
      name: "Pop Hits",
      tracks: [
        { title: "Rihanna — Umbrella", id: "CvBfHwUxHIk" },
        { title: "Black Eyed Peas — I Gotta Feeling", id: "uSD4vsh1zDA" },
        { title: "Beyoncé — Crazy In Love", id: "ViwtNLUqkMY" },
        { title: "Kelly Clarkson — Since U Been Gone", id: "R7UrFYvl5TE" },
        { title: "Christina Aguilera — Beautiful", id: "eAfyFTzZDMM" },
        { title: "Katy Perry — Hot n Cold", id: "7TRc4MfCjA0" },
        { title: "Lady Gaga — Just Dance", id: "2Abk1jAONjw" },
        { title: "P!nk — So What", id: "FJfFZqTlWrQ" },
        { title: "Miley Cyrus — Party in the U.S.A.", id: "OWjMlBy8n-I" },
        { title: "Justin Timberlake — SexyBack", id: "gEzr8-v-OO8" }
      ]
    },
    rnb: {
      name: "R&B",
      tracks: [
        { title: "Usher — Yeah!", id: "GxBSyx85Kp8" },
        { title: "Alicia Keys — No One", id: "rywUS-ohqeE" },
        { title: "Destiny's Child — Say My Name", id: "sQgd6MccwZc" },
        { title: "Ne-Yo — So Sick", id: "IxszlJppRQI" },
        { title: "Chris Brown — Run It!", id: "mWGvmdyF3bU" },
        { title: "Ciara — Goodies", id: "YtC92pzp5vw" },
        { title: "Mario — Let Me Love You", id: "H64QG4UsrGI" },
        { title: "John Legend — Ordinary People", id: "PIh07c_P4hc" },
        { title: "Rihanna — Unfaithful", id: "rp4UwPZfRis" },
        { title: "Beyoncé — Irreplaceable", id: "Rb7sVoMYuFc" }
      ]
    },
    hiphop: {
      name: "Hip-Hop",
      tracks: [
        { title: "50 Cent — In Da Club", id: "5qm8PH4xAss" },
        { title: "Kanye West — Gold Digger", id: "PE0ynzc6-e4" },
        { title: "Missy Elliott — Get Ur Freak On", id: "FPoKiGQzbSQ" },
        { title: "Ludacris — Stand Up", id: "pZG7IK99OvI" },
        { title: "Nelly — Hot in Herre", id: "GeZZr_p6vB8" },
        { title: "OutKast — Ms. Jackson", id: "EUVo8epKwv0" },
        { title: "Jay-Z — 99 Problems", id: "6dVdd3RsbSE" },
        { title: "T.I. — Whatever You Like", id: "Kgdr2uytpDI" },
        { title: "Lil Wayne — Lollipop", id: "2IH8tNQAzSs" },
        { title: "Flo Rida — Low", id: "BTE3D-bhquY" }
      ]
    },
    dance: {
      name: "Dance Party",
      tracks: [
        { title: "Daft Punk — One More Time", id: "FGBhQbmPwH8" },
        { title: "OutKast — Hey Ya!", id: "PWgvGjAhvIw" },
        { title: "Britney Spears — Toxic", id: "LOZuxwVk7TU" },
        { title: "Black Eyed Peas — Boom Boom Pow", id: "4m48GqaOz90" },
        { title: "David Guetta ft. Kelly Rowland — When Love Takes Over", id: "shUDuIYpAQ8" },
        { title: "Rihanna — Don't Stop the Music", id: "-U51yeIFJCs" },
        { title: "Cascada — Everytime We Touch", id: "mzcPjIOLDTU" },
        { title: "Kelis — Milkshake", id: "6AwXKJoKJz4" },
        { title: "Sean Paul — Get Busy", id: "Y4mP1m_lmJM" },
        { title: "Benny Benassi — Satisfaction", id: "V5bYDhZBFLA" }
      ]
    },
    altrock: {
      name: "Alt Rock",
      tracks: [
        { title: "Eminem — Lose Yourself", id: "xFYQQPAOz7Y" },
        { title: "Gorillaz — Feel Good Inc.", id: "HyHNuVaZJ-k" },
        { title: "Avril Lavigne — Complicated", id: "HPPj6viIBmU" },
        { title: "Green Day — American Idiot", id: "_vbUJ2LtFF8" },
        { title: "Coldplay — Clocks", id: "8IsFmQeQTF0" },
        { title: "Kings of Leon — Sex on Fire", id: "RF0HhrwIwp0" },
        { title: "Foo Fighters — Best of You", id: "h_L4Rixya64" },
        { title: "Red Hot Chili Peppers — Can't Stop", id: "8DyziWtkfBw" },
        { title: "Muse — Starlight", id: "pEyj2qvRwso" },
        { title: "OK Go — Here It Goes Again", id: "dTAAsCNK7RA" }
      ]
    },
    indie: {
      name: "Indie",
      tracks: [
        { title: "The Killers — Mr. Brightside", id: "gGdGFtwCNBE" },
        { title: "Franz Ferdinand — Take Me Out", id: "GhCXAiNz9Jo" },
        { title: "Arctic Monkeys — I Bet You Look Good on the Dancefloor", id: "pK7egZaT3hs" },
        { title: "Phoenix — 1901", id: "36_4xjLFjM0" },
        { title: "MGMT — Kids", id: "fe4EK4HSPkI" },
        { title: "The Strokes — Last Nite", id: "TOypSnKFHrE" },
        { title: "Modest Mouse — Float On", id: "CTAud5O7Qqk" },
        { title: "Death Cab for Cutie — Soul Meets Body", id: "25PHWCE_Iu0" },
        { title: "The White Stripes — Seven Nation Army", id: "0J2QdDbelmY" },
        { title: "Bloc Party — Banquet", id: "vdkmhquF60o" }
      ]
    },
    numetal: {
      name: "Nu-Metal",
      tracks: [
        { title: "Linkin Park — In the End", id: "eVTXPUF4Oz4" },
        { title: "Evanescence — Bring Me to Life", id: "3YxaaGgTQYM" },
        { title: "System of a Down — Chop Suey!", id: "OyLnXriLhpA" },
        { title: "Linkin Park — Numb", id: "8Jwj_lpwnZk" },
        { title: "Papa Roach — Last Resort", id: "VUaM3psXB74" },
        { title: "Disturbed — Down with the Sickness", id: "HkhfL0pnMPQ" },
        { title: "Korn — Falling Away from Me", id: "2s3iGpDqQpQ" },
        { title: "Slipknot — Duality", id: "6fVE8kSM43I" },
        { title: "Godsmack — I Stand Alone", id: "OYjZK_6i37M" },
        { title: "Deftones — Change (In the House of Flies)", id: "WPpDyIJdasg" }
      ]
    },
    punk: {
      name: "Punk & Emo",
      tracks: [
        { title: "Fall Out Boy — Sugar, We're Goin Down", id: "uhG-vLZrb-g" },
        { title: "Paramore — Misery Business", id: "Heu3xuKfoPo" },
        { title: "My Chemical Romance — Welcome to the Black Parade", id: "RRKJiM9Njr8" },
        { title: "Blink-182 — All the Small Things", id: "9Ht5RZpzPqw" },
        { title: "Good Charlotte — The Anthem", id: "desJKYvdq9A" },
        { title: "Simple Plan — Welcome to My Life", id: "Lt0WP9ZBNiY" },
        { title: "Panic! at the Disco — I Write Sins Not Tragedies", id: "XioHVMjtICI" },
        { title: "Sum 41 — In Too Deep", id: "JoC3PUBmhFs" },
        { title: "Yellowcard — Ocean Avenue", id: "X9fLbfzCqWw" },
        { title: "The All-American Rejects — Move Along", id: "XleOkGsYgO8" }
      ]
    },
    latin: {
      name: "Latin",
      tracks: [
        { title: "Shakira — Hips Don't Lie", id: "pakogSCXdmY" },
        { title: "Daddy Yankee — Gasolina", id: "QhuMh97C0yc" },
        { title: "Enrique Iglesias — Hero", id: "koJlIGDImiU" },
        { title: "Ricky Martin — Livin' la Vida Loca", id: "UxQ7PAerVdE" },
        { title: "Juanes — La Camisa Negra", id: "6X3T51JfwFQ" },
        { title: "Wisin & Yandel — Rakata", id: "giMhlfc6pzw" },
        { title: "Don Omar — Dale Don Dale", id: "gwGcyRWnOSw" },
        { title: "RBD — Sálvame", id: "3dQG32_OMg0" },
        { title: "Aventura — Obsesión", id: "yC9u00F-NF0" },
        { title: "Marc Anthony — I Need to Know", id: "fLVzw9wVd9o" }
      ]
    },
    country: {
      name: "Country",
      tracks: [
        { title: "Carrie Underwood — Before He Cheats", id: "WaSy8yy-mr8" },
        { title: "Rascal Flatts — Life Is a Highway", id: "5tXh_MfrMe0" },
        { title: "Taylor Swift — Love Story", id: "LHxXaY7NR3w" },
        { title: "Toby Keith — Courtesy of the Red, White and Blue", id: "ruNrdmjcNTc" },
        { title: "Kenny Chesney — The Good Stuff", id: "lYQZJ9NUzYU" },
        { title: "Tim McGraw — Live Like You Were Dying", id: "_9TShlMkQnc" },
        { title: "Sugarland — Baby Girl", id: "hPzIX3MpMss" },
        { title: "Dixie Chicks — Landslide", id: "J4_wXPZ1Bnk" },
        { title: "Big & Rich — Save a Horse (Ride a Cowboy)", id: "HflDc7PUT2g" },
        { title: "Keith Urban — Days Go By", id: "uxGegHHvk4w" }
      ]
    }
  };

  // no mixtape is selected by default — the center play button still has a
  // playlist to fall back on (Pop Hits), it's just not shown as active
  let activeMixtape = null;
  let PLAYLIST = MIXTAPES.pop.tracks;

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
  const playIcon = $("#playIcon");
  const pauseIcon = $("#pauseIcon");
  const colorCycle = $("#colorCycle");
  const COLOR_ORDER = ["silver", "blue", "green", "orange", "pink", "dark"];
  let colorIndex = 0;

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
          setTimeout(next, 1200);
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
    loadTrack(currentIndex + 1, true);
  }
  function prev() {
    loadTrack(currentIndex - 1, true);
  }

  function changeVolume(delta) {
    volume = Math.max(0, Math.min(100, volume + delta));
    if (ytReady) ytPlayer.setVolume(volume);
  }

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
    if (ytReady) {
      loadTrack(0, true);
    } else {
      ensurePlayerAndPlay();
    }
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
    // next, vol, color dot) even if it sits inside the corner zone
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
