/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Play, RotateCcw, ChevronRight, Layers, HelpCircle } from 'lucide-react';
import { MathView } from './MathView';

export const ProofAnimation: React.FC = () => {
  const [activeProof, setActiveProof] = useState<'area' | 'segment'>('area');
  
  // State for Area Proof Animation
  const [sectorCount, setSectorCount] = useState<number>(16);
  const [unfoldProgress, setUnfoldProgress] = useState<number>(0); // 0 = circle, 100 = rectangle
  const [isPlayingUnfold, setIsPlayingUnfold] = useState<boolean>(false);

  // State for Segment Proof Animation
  const [segmentStep, setSegmentStep] = useState<number>(0); // 0 = juring, 1 = segitiga, 2 = tembereng

  // Animation player for circle to rectangle
  const handlePlayUnfold = () => {
    setIsPlayingUnfold(true);
    let step = 0;
    const interval = setInterval(() => {
      step += 2;
      if (step > 100) {
        clearInterval(interval);
        setIsPlayingUnfold(false);
      } else {
        setUnfoldProgress(step);
      }
    }, 30);
  };

  const handleResetUnfold = () => {
    setIsPlayingUnfold(false);
    setUnfoldProgress(0);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
      {/* Tab Switcher */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
        <div>
          <h3 className="text-base font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <Layers className="w-5 h-5 text-indigo-600" />
            Laboratorium Pembuktian Visual Geometris
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Eksplorasi asal-usul rumus secara intuitif tanpa hafalan buta
          </p>
        </div>

        <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg">
          <button
            onClick={() => setActiveProof('area')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
              activeProof === 'area'
                ? 'bg-white text-indigo-700 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Pembuktian Luas L = πr²
          </button>
          <button
            onClick={() => setActiveProof('segment')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
              activeProof === 'segment'
                ? 'bg-white text-emerald-700 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Pembuktian Luas Tembereng
          </button>
        </div>
      </div>

      {/* 1. PEMBUKTIAN LUAS LINGKARAN */}
      {activeProof === 'area' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Visual Canvas */}
            <div className="lg:col-span-7 bg-slate-50 rounded-xl p-4 border border-slate-200/80 flex flex-col items-center justify-center min-h-[300px]">
              {unfoldProgress === 0 ? (
                // Initial Circle with 16 sectors
                <div className="relative flex flex-col items-center">
                  <svg viewBox="0 0 280 280" className="w-64 h-64">
                    <circle cx="140" cy="140" r="110" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1.5" />
                    {Array.from({ length: sectorCount }).map((_, i) => {
                      const ang1 = (i * 360) / sectorCount;
                      const ang2 = ((i + 1) * 360) / sectorCount;
                      const rad1 = (ang1 * Math.PI) / 180;
                      const rad2 = (ang2 * Math.PI) / 180;
                      const x1 = 140 + 110 * Math.cos(rad1);
                      const y1 = 140 + 110 * Math.sin(rad1);
                      const x2 = 140 + 110 * Math.cos(rad2);
                      const y2 = 140 + 110 * Math.sin(rad2);
                      const isEven = i % 2 === 0;
                      return (
                        <path
                          key={i}
                          d={`M 140 140 L ${x1} ${y1} A 110 110 0 0 1 ${x2} ${y2} Z`}
                          fill={isEven ? '#3b82f6' : '#f59e0b'}
                          fillOpacity="0.75"
                          stroke="#ffffff"
                          strokeWidth="1"
                        />
                      );
                    })}
                    <circle cx="140" cy="140" r="4" fill="#0f172a" />
                  </svg>
                  <span className="text-xs font-semibold text-slate-700 mt-2">
                    Lingkaran utuh dipotong menjadi {sectorCount} juring sama besar
                  </span>
                </div>
              ) : (
                // Unfolded into Parallelogram / Rectangle
                <div className="w-full flex flex-col items-center">
                  <svg viewBox="0 0 420 180" className="w-full max-w-[420px] h-auto">
                    {/* Interlocking wedge sectors */}
                    {Array.from({ length: sectorCount }).map((_, i) => {
                      const isUp = i % 2 === 0;
                      const wedgeWidth = 360 / sectorCount;
                      const startX = 30 + (i * wedgeWidth * (unfoldProgress / 100));
                      const height = 90;
                      return (
                        <polygon
                          key={i}
                          points={
                            isUp
                              ? `${startX},${130} ${startX + wedgeWidth},${130} ${startX + wedgeWidth / 2},${130 - height}`
                              : `${startX},${130 - height} ${startX + wedgeWidth},${130 - height} ${startX + wedgeWidth / 2},${130}`
                          }
                          fill={isUp ? '#3b82f6' : '#f59e0b'}
                          fillOpacity="0.8"
                          stroke="#ffffff"
                          strokeWidth="1"
                        />
                      );
                    })}

                    {/* Dimension lines when unfolded */}
                    {unfoldProgress > 70 && (
                      <g>
                        {/* Base line label: π * r */}
                        <line x1="30" y1="145" x2="390" y2="145" stroke="#2563eb" strokeWidth="2" />
                        <text x="210" y="162" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1d4ed8">
                          Alas = ½ × Keliling = πr
                        </text>

                        {/* Height line label: r */}
                        <line x1="20" y1="40" x2="20" y2="130" stroke="#0f172a" strokeWidth="2" />
                        <line x1="16" y1="40" x2="24" y2="40" stroke="#0f172a" strokeWidth="2" />
                        <line x1="16" y1="130" x2="24" y2="130" stroke="#0f172a" strokeWidth="2" />
                        <text x="12" y="88" textAnchor="end" fontSize="13" fontWeight="bold" fill="#0f172a">
                          Tinggi = r
                        </text>
                      </g>
                    )}
                  </svg>
                  <span className="text-xs font-semibold text-indigo-700 mt-2">
                    Bentuk mendekati Persegi Panjang (Panjang = πr, Lebar/Tinggi = r)
                  </span>
                </div>
              )}

              {/* Slider & Controls */}
              <div className="w-full mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePlayUnfold}
                    disabled={isPlayingUnfold || unfoldProgress === 100}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white disabled:opacity-50 transition-colors"
                  >
                    <Play className="w-3.5 h-3.5" /> Bentangkan
                  </button>
                  <button
                    onClick={handleResetUnfold}
                    className="p-1.5 text-xs font-medium rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 transition-colors"
                    title="Kembali ke Lingkaran"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="flex-1 max-w-[200px] flex items-center gap-2">
                  <span className="text-[11px] text-slate-500 whitespace-nowrap">Proses:</span>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={unfoldProgress}
                    onChange={(e) => setUnfoldProgress(Number(e.target.value))}
                    className="w-full accent-indigo-600 h-1.5 bg-slate-200 rounded-lg cursor-pointer"
                  />
                  <span className="text-xs font-mono font-medium text-slate-700">{unfoldProgress}%</span>
                </div>
              </div>
            </div>

            {/* Explanation & Math Deduction */}
            <div className="lg:col-span-5 space-y-3">
              <div className="bg-indigo-50/70 rounded-xl p-4 border border-indigo-100">
                <h4 className="text-sm font-bold text-indigo-950 mb-2">
                  Logika Penurunan Rumus Luas Lingkaran:
                </h4>
                <ol className="text-xs text-indigo-900 space-y-2 list-decimal list-inside leading-relaxed">
                  <li>
                    Lingkaran dengan keliling <MathView math="K = 2\pi r" /> dibagi menjadi banyak juring sama besar.
                  </li>
                  <li>
                    Setengah juring diarahkan ke atas, dan setengah lainnya diarahkan ke bawah berselang-seling.
                  </li>
                  <li>
                    Sisi bawah terdiri dari busur setengah lingkaran, sehingga panjang alasnya adalah:
                    <MathView math="\text{Alas} = \frac{1}{2} \times K = \frac{1}{2}(2\pi r) = \pi r" block />
                  </li>
                  <li>
                    Tinggi jajaran juring sama dengan jari-jari lingkaran (<MathView math="t = r" />).
                  </li>
                  <li>
                    Jika juring dipotong semakin banyak tak hingga, bentuknya menjadi persegi panjang sempurna:
                    <MathView math="L = \text{Alas} \times \text{Tinggi} = (\pi r) \times r = \pi r^2" block />
                  </li>
                </ol>
              </div>

              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900">
                <span className="font-bold">Kesimpulan Ilmiah:</span> Rumus <MathView math="L = \pi r^2" /> bukanlah dogma yang harus dihafal mati, melainkan hasil integrasi geometri dari juring-juring yang direorganisasi menjadi bangun datar beraturan!
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. PEMBUKTIAN LUAS TEMBERENG */}
      {activeProof === 'segment' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Visual 3-Stage Diagram */}
            <div className="lg:col-span-7 bg-slate-50 rounded-xl p-4 border border-slate-200/80 flex flex-col items-center">
              <div className="w-full flex items-center justify-center py-2">
                <svg viewBox="0 0 320 300" className="w-64 h-64">
                  {/* Outer circle */}
                  <circle cx="160" cy="150" r="110" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 3" />
                  
                  {/* Point coordinates for theta = 90 deg at bottom */}
                  {/* O = (160, 150), A = (160 - 77.78, 150 + 77.78), B = (160 + 77.78, 150 + 77.78) */}
                  {/* Sector path */}
                  {(segmentStep === 0 || segmentStep === 1) && (
                    <path
                      d="M 160 150 L 82.22 227.78 A 110 110 0 0 1 237.78 227.78 Z"
                      fill="#fbbf24"
                      fillOpacity={segmentStep === 1 ? '0.3' : '0.7'}
                      stroke="#d97706"
                      strokeWidth="2"
                    />
                  )}

                  {/* Triangle path */}
                  {segmentStep === 1 && (
                    <polygon
                      points="160,150 82.22,227.78 237.78,227.78"
                      fill="#6366f1"
                      fillOpacity="0.65"
                      stroke="#4f46e5"
                      strokeWidth="2"
                      strokeDasharray="4 2"
                    />
                  )}

                  {/* Segment path */}
                  {segmentStep === 2 && (
                    <path
                      d="M 82.22 227.78 A 110 110 0 0 1 237.78 227.78 Z"
                      fill="#10b981"
                      fillOpacity="0.8"
                      stroke="#059669"
                      strokeWidth="2.5"
                    />
                  )}

                  {/* Lines & Points */}
                  <line x1="160" y1="150" x2="82.22" y2="227.78" stroke="#1e293b" strokeWidth="2" />
                  <line x1="160" y1="150" x2="237.78" y2="227.78" stroke="#1e293b" strokeWidth="2" />
                  <line x1="82.22" y1="227.78" x2="237.78" y2="227.78" stroke="#7c3aed" strokeWidth="2.5" />

                  {/* Center O */}
                  <circle cx="160" cy="150" r="4.5" fill="#0f172a" />
                  <text x="155" y="140" fontSize="13" fontWeight="bold" fill="#0f172a">O</text>

                  {/* Points A & B */}
                  <circle cx="82.22" cy="227.78" r="4.5" fill="#2563eb" />
                  <text x="66" y="240" fontSize="12" fontWeight="bold" fill="#2563eb">A</text>
                  <circle cx="237.78" cy="227.78" r="4.5" fill="#2563eb" />
                  <text x="246" y="240" fontSize="12" fontWeight="bold" fill="#2563eb">B</text>

                  {/* Angle label 90 deg */}
                  <path d="M 160 170 A 20 20 0 0 1 145.86 164.14" fill="none" stroke="#b45309" strokeWidth="1.5" />
                  <text x="160" y="180" fontSize="11" fontWeight="bold" fill="#b45309" textAnchor="middle">θ = 90°</text>
                </svg>
              </div>

              {/* Step Navigation Pill Selector */}
              <div className="flex items-center gap-2 mt-2">
                {[
                  { step: 0, label: '1. Juring OAB Penuh' },
                  { step: 1, label: '2. Segitiga Pengurang' },
                  { step: 2, label: '3. Sisa: Tembereng' },
                ].map((s) => (
                  <button
                    key={s.step}
                    onClick={() => setSegmentStep(s.step)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                      segmentStep === s.step
                        ? 'bg-emerald-600 text-white shadow-sm'
                        : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Explanatory Formula Breakdown */}
            <div className="lg:col-span-5 space-y-3">
              <div className="bg-emerald-50/80 rounded-xl p-4 border border-emerald-100">
                <h4 className="text-sm font-bold text-emerald-950 mb-2">
                  Penurunan Konseptual Tembereng:
                </h4>
                <p className="text-xs text-emerald-900 leading-relaxed mb-3">
                  Tembereng adalah daerah yang dibatasi oleh sebuah busur lingkaran dan tali busurnya. Daerah ini didapatkan langsung dengan mengambil satu juring utuh dan memotong bagian segitiganya:
                </p>

                <div className="p-2.5 bg-white rounded-lg border border-emerald-200 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-amber-700">1. Luas Juring:</span>
                    <MathView math="L_{\text{juring}} = \frac{\theta}{360^\circ} \pi r^2" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-indigo-700">2. Luas Segitiga:</span>
                    <MathView math="L_{\triangle} = \frac{1}{2} r^2 \sin \theta" />
                  </div>
                  <div className="border-t border-slate-200 pt-2 flex items-center justify-between font-bold text-emerald-800">
                    <span>3. Luas Tembereng:</span>
                    <MathView math="L_{\text{tembereng}} = L_{\text{juring}} - L_{\triangle}" />
                  </div>
                </div>

                <div className="mt-3">
                  <MathView
                    math="L_{\text{tembereng}} = \left(\frac{\theta}{360^\circ} \pi r^2\right) - \left(\frac{1}{2} r^2 \sin \theta\right)"
                    block
                  />
                </div>
              </div>

              <div className="p-3 bg-blue-50 rounded-xl border border-blue-200 text-xs text-blue-900">
                <span className="font-bold">Mengapa <MathView math="\frac{1}{2}r^2 \sin\theta" />?</span> Segitiga <MathView math="\triangle OAB" /> memiliki dua sisi yang panjangnya sama dengan jari-jari <MathView math="r" /> yang mengapit sudut pusat <MathView math="\theta" />. Dengan trigonometri dasar luas segitiga: <MathView math="L = \frac{1}{2} \cdot a \cdot b \cdot \sin C = \frac{1}{2} \cdot r \cdot r \cdot \sin\theta = \frac{1}{2}r^2 \sin\theta" />.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
