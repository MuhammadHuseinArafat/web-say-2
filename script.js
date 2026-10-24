"use strict";

/* ===== 1. Latar bintang (canvas) ===== */
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
let stars = [];
let shooting = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const count = Math.floor((canvas.width * canvas.height) / 6000);
  stars = Array.from({ length: count }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.4 + 0.2,
    speed: Math.random() * 0.15 + 0.02,
    phase: Math.random() * Math.PI * 2,
  }));
}

function spawnShootingStar() {
  shooting.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height * 0.4,
    len: Math.random() * 80 + 60,
    vx: 7 + Math.random() * 4,
    vy: 3 + Math.random() * 2,
    life: 1,
  });
}

function drawStars(t) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (const s of stars) {
    const twinkle = 0.5 + 0.5 * Math.sin(t * 0.002 + s.phase);
    ctx.globalAlpha = 0.3 + twinkle * 0.7;
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
    s.y += s.speed;
    if (s.y > canvas.height) { s.y = 0; s.x = Math.random() * canvas.width; }
  }

  for (let i = shooting.length - 1; i >= 0; i--) {
    const m = shooting[i];
    const grad = ctx.createLinearGradient(m.x, m.y, m.x - m.len, m.y - m.len * 0.45);
    grad.addColorStop(0, `rgba(255,255,255,${m.life})`);
    grad.addColorStop(1, "rgba(255,255,255,0)");
    ctx.globalAlpha = 1;
    ctx.strokeStyle = grad;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(m.x, m.y);
    ctx.lineTo(m.x - m.len, m.y - m.len * 0.45);
    ctx.stroke();
    m.x += m.vx; m.y += m.vy; m.life -= 0.015;
    if (m.life <= 0) shooting.splice(i, 1);
  }

  requestAnimationFrame(drawStars);
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();
requestAnimationFrame(drawStars);
setInterval(() => { if (Math.random() < 0.7) spawnShootingStar(); }, 3500);

/* ===== 2. Efek mengetik ===== */
const roles = ["Penjelajah Digital", "Web Developer", "Pecinta Astronomi", "Pembelajar Seumur Hidup"];
const typingEl = document.getElementById("typing");
let roleIdx = 0, charIdx = 0, deleting = false;

function typeLoop() {
  const word = roles[roleIdx];
  typingEl.textContent = word.slice(0, charIdx);

  if (!deleting && charIdx < word.length) {
    charIdx++;
    setTimeout(typeLoop, 90);
  } else if (!deleting) {
    deleting = true;
    setTimeout(typeLoop, 1400);
  } else if (charIdx > 0) {
    charIdx--;
    setTimeout(typeLoop, 45);
  } else {
    deleting = false;
    roleIdx = (roleIdx + 1) % roles.length;
    setTimeout(typeLoop, 400);
  }
}
typeLoop();

/* ===== 3. Menu mobile ===== */
const nav = document.getElementById("nav");
document.getElementById("menuToggle").addEventListener("click", () => nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => nav.classList.remove("open")));

/* ===== 4. Animasi saat scroll (reveal, skill bar, counter) ===== */
function animateCounter(el) {
  const target = +el.dataset.target;
  let current = 0;
  const step = Math.max(1, Math.ceil(target / 60));
  const timer = setInterval(() => {
    current += step;
    if (current >= target) { current = target; clearInterval(timer); }
    el.textContent = current;
  }, 25);
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const section = entry.target;
      section.classList.add("visible");
      section.querySelectorAll(".fill").forEach((f) => (f.style.width = f.dataset.width + "%"));
      section.querySelectorAll(".num").forEach(animateCounter);
      observer.unobserve(section);
    });
  },
  { threshold: 0.2 }
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

/* ===== 5. Link navigasi aktif & tombol ke atas ===== */
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll("nav a");
const toTop = document.getElementById("toTop");

window.addEventListener("scroll", () => {
  let current = "beranda";
  sections.forEach((sec) => {
    if (window.scrollY >= sec.offsetTop - 160) current = sec.id;
  });
  navLinks.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + current));
  toTop.classList.toggle("show", window.scrollY > 500);
});
toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

/* ===== 6. Form kontak (membuka aplikasi email) ===== */
const EMAIL_TUJUAN = "emailkamu@example.com"; // <-- ganti dengan email kamu
const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const subject = encodeURIComponent(`Pesan dari ${name}`);
  const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
  window.location.href = `mailto:${EMAIL_TUJUAN}?subject=${subject}&body=${body}`;

  status.textContent = "Sinyal terkirim! Aplikasi email kamu akan terbuka 🛰️";
  form.reset();
});

/* ===== 7. Tahun otomatis di footer ===== */
document.getElementById("year").textContent = new Date().getFullYear();
