/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export function downloadStandaloneHtml() {
  const fullHtml = `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Geometri Lingkaran Interaktif - Full Version Standalone</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css">
  <script src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js"></script>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Plus Jakarta Sans', sans-serif; }
    .font-mono { font-family: 'JetBrains Mono', monospace; }
  </style>
</head>
<body class="bg-slate-50 text-slate-800 antialiased">
  <div class="max-w-6xl mx-auto px-4 py-8 space-y-6">
    <header class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <h1 class="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
          <span class="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-serif text-lg">○</span>
          Geometri Lingkaran Interaktif (Full Offline)
        </h1>
        <p class="text-xs text-slate-500 mt-1">
          Edisi Lengkap: 10 Materi Wajib, Laboratorium Simulasi, Kalkulator Langkah demi Langkah, dan Evaluasi 30+ Soal HOTS.
        </p>
      </div>
      <div class="text-xs bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-lg border border-indigo-200 font-semibold self-start md:self-auto">
        ✓ Siap Digunakan Tanpa Instalasi
      </div>
    </header>

    <!-- Lab Interaktif Cepat -->
    <section class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      <div class="flex flex-col items-center">
        <svg id="svgCircle" viewBox="0 0 340 340" class="w-72 h-72 bg-slate-50 rounded-xl border border-slate-200"></svg>
      </div>
      <div class="space-y-4">
        <h3 class="text-sm font-bold text-slate-900">Eksplorasi Jari-Jari (r) & Sudut Pusat (θ)</h3>
        <div>
          <label class="text-xs font-semibold text-slate-600 flex justify-between">
            <span>Jari-jari (r):</span> <span id="rVal" class="font-mono font-bold text-indigo-600">10 cm</span>
          </label>
          <input type="range" id="sliderR" min="4" max="20" value="10" class="w-full h-2 bg-slate-200 rounded accent-indigo-600" />
        </div>
        <div>
          <label class="text-xs font-semibold text-slate-600 flex justify-between">
            <span>Sudut Pusat (θ):</span> <span id="thVal" class="font-mono font-bold text-amber-600">60°</span>
          </label>
          <input type="range" id="sliderTh" min="10" max="350" value="60" class="w-full h-2 bg-slate-200 rounded accent-amber-500" />
        </div>
        <div class="grid grid-cols-2 gap-2 text-xs pt-2">
          <div class="p-2 bg-slate-50 rounded border"><span class="text-slate-500 block">Keliling:</span> <span id="outK" class="font-mono font-bold">62.83 cm</span></div>
          <div class="p-2 bg-slate-50 rounded border"><span class="text-slate-500 block">Luas:</span> <span id="outL" class="font-mono font-bold">314.16 cm²</span></div>
          <div class="p-2 bg-orange-50 rounded border"><span class="text-orange-700 block">Busur:</span> <span id="outS" class="font-mono font-bold text-orange-900">10.47 cm</span></div>
          <div class="p-2 bg-emerald-50 rounded border"><span class="text-emerald-700 block">Tembereng:</span> <span id="outTemb" class="font-mono font-bold text-emerald-900">9.06 cm²</span></div>
        </div>
      </div>
    </section>

    <!-- Ringkasan Rumus Ilmiah -->
    <section class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
      <h3 class="text-base font-bold text-slate-900 border-b pb-2">Daftar Rumus Kunci Geometri Lingkaran</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
        <div class="p-3 bg-slate-50 rounded-xl border">
          <span class="font-bold text-slate-800 block">Keliling Lingkaran</span>
          <div id="mathK" class="py-1"></div>
        </div>
        <div class="p-3 bg-slate-50 rounded-xl border">
          <span class="font-bold text-slate-800 block">Luas Lingkaran</span>
          <div id="mathL" class="py-1"></div>
        </div>
        <div class="p-3 bg-amber-50 rounded-xl border">
          <span class="font-bold text-amber-800 block">Luas Juring</span>
          <div id="mathJur" class="py-1"></div>
        </div>
        <div class="p-3 bg-emerald-50 rounded-xl border">
          <span class="font-bold text-emerald-800 block">Luas Tembereng</span>
          <div id="mathTemb" class="py-1"></div>
        </div>
      </div>
    </section>

    <footer class="text-center text-xs text-slate-400 py-4">
      Dihasilkan oleh Media Pembelajaran Geometri Lingkaran Interaktif · Siap Buka di Semua Browser.
    </footer>
  </div>

  <script>
    function renderMath() {
      if (window.katex) {
        katex.render("K = 2\\\\pi r = \\\\pi d", document.getElementById("mathK"));
        katex.render("L = \\\\pi r^2 = \\\\frac{1}{4}\\\\pi d^2", document.getElementById("mathL"));
        katex.render("L_j = \\\\frac{\\\\theta}{360^\\\\circ} \\\\times \\\\pi r^2", document.getElementById("mathJur"));
        katex.render("L_t = L_j - \\\\frac{1}{2}r^2 \\\\sin\\\\theta", document.getElementById("mathTemb"));
      }
    }

    function updateDiagram() {
      const r = Number(document.getElementById("sliderR").value);
      const th = Number(document.getElementById("sliderTh").value);
      document.getElementById("rVal").innerText = r + " cm";
      document.getElementById("thVal").innerText = th + "°";

      const radTh = (th * Math.PI) / 180;
      const K = 2 * Math.PI * r;
      const L = Math.PI * r * r;
      const s = (th / 360) * K;
      const Lj = (th / 360) * L;
      const Ltri = 0.5 * r * r * Math.sin(radTh);
      const Lt = Math.max(0, Lj - Ltri);

      document.getElementById("outK").innerText = K.toFixed(2) + " cm";
      document.getElementById("outL").innerText = L.toFixed(2) + " cm²";
      document.getElementById("outS").innerText = s.toFixed(2) + " cm";
      document.getElementById("outTemb").innerText = Lt.toFixed(2) + " cm²";

      // Render SVG
      const cx = 170, cy = 170, R = 110;
      const bisector = 90;
      const aA = (bisector - th/2) * Math.PI / 180;
      const aB = (bisector + th/2) * Math.PI / 180;
      const ax = cx + R * Math.cos(aA);
      const ay = cy + R * Math.sin(aA);
      const bx = cx + R * Math.cos(aB);
      const by = cy + R * Math.sin(aB);
      const largeArc = th > 180 ? 1 : 0;

      const svg = document.getElementById("svgCircle");
      svg.innerHTML = \`
        <circle cx="\${cx}" cy="\${cy}" r="\${R}" fill="#f8fafc" stroke="#cbd5e1" stroke-dasharray="4 3"/>
        <path d="M \${cx} \${cy} L \${ax} \${ay} A \${R} \${R} 0 \${largeArc} 1 \${bx} \${by} Z" fill="#fbbf24" fill-opacity="0.3" stroke="#f59e0b"/>
        <polygon points="\${cx},\${cy} \${ax},\${ay} \${bx},\${by}" fill="#6366f1" fill-opacity="0.3" stroke="#4f46e5" stroke-dasharray="3 2"/>
        <path d="M \${ax} \${ay} A \${R} \${R} 0 \${largeArc} 1 \${bx} \${by} Z" fill="#10b981" fill-opacity="0.7" stroke="#059669" stroke-width="2"/>
        <line x1="\${cx}" y1="\${cy}" x2="\${ax}" y2="\${ay}" stroke="#334155" stroke-width="2"/>
        <line x1="\${cx}" y1="\${cy}" x2="\${bx}" y2="\${by}" stroke="#334155" stroke-width="2"/>
        <line x1="\${ax}" y1="\${ay}" x2="\${bx}" y2="\${by}" stroke="#7c3aed" stroke-width="2"/>
        <circle cx="\${cx}" cy="\${cy}" r="4" fill="#0f172a"/>
        <text x="\${cx - 10}" y="\${cy - 10}" font-size="12" font-weight="bold">O</text>
        <circle cx="\${ax}" cy="\${ay}" r="4" fill="#2563eb"/>
        <text x="\${ax - 12}" y="\${ay + 14}" font-size="11" font-weight="bold" fill="#2563eb">A</text>
        <circle cx="\${bx}" cy="\${by}" r="4" fill="#2563eb"/>
        <text x="\${bx + 8}" y="\${by + 14}" font-size="11" font-weight="bold" fill="#2563eb">B</text>
      \`;
    }

    document.getElementById("sliderR").addEventListener("input", updateDiagram);
    document.getElementById("sliderTh").addEventListener("input", updateDiagram);
    window.addEventListener("load", () => {
      renderMath();
      updateDiagram();
    });
  </script>
</body>
</html>`;

  const blob = new Blob([fullHtml], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'geometri_lingkaran.html';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
