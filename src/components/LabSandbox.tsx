/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Sliders, Eye, RotateCcw, Check, Sparkles, BookOpen } from 'lucide-react';
import { CircleDiagram } from './CircleDiagram';
import { MathView } from './MathView';

export const LabSandbox: React.FC = () => {
  const [r, setR] = useState<number>(10);
  const [theta, setTheta] = useState<number>(60);
  const [inscribedPos, setInscribedPos] = useState<number>(270); // top
  const [piChoice, setPiChoice] = useState<'3.14' | '22/7' | 'exact'>('exact');

  // Layer toggles
  const [layers, setLayers] = useState({
    radius: true,
    diameter: false,
    arc: true,
    chord: true,
    apothem: true,
    sector: true,
    triangle: true,
    segment: true,
    inscribed: false,
  });

  const piVal = useMemo(() => {
    if (piChoice === '22/7') return 22 / 7;
    if (piChoice === '3.14') return 3.14;
    return Math.PI;
  }, [piChoice]);

  // Calculations
  const calcs = useMemo(() => {
    const radTheta = (theta * Math.PI) / 180;
    const radHalf = (theta * Math.PI) / 360;

    const keliling = 2 * piVal * r;
    const luasLingkaran = piVal * r * r;
    const panjangBusur = (theta / 360) * 2 * piVal * r;
    const panjangTaliBusur = 2 * r * Math.sin(radHalf);
    const panjangApotema = r * Math.cos(radHalf);
    const luasJuring = (theta / 360) * piVal * r * r;
    const luasSegitiga = 0.5 * r * r * Math.sin(radTheta);
    const luasTembereng = Math.max(0, luasJuring - luasSegitiga);
    const sudutKeliling = theta / 2;

    return {
      keliling,
      luasLingkaran,
      panjangBusur,
      panjangTaliBusur,
      panjangApotema,
      luasJuring,
      luasSegitiga,
      luasTembereng,
      sudutKeliling,
    };
  }, [r, theta, piVal]);

  const toggleLayer = (key: keyof typeof layers) => {
    setLayers((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const setPreset = (angle: number) => {
    setTheta(angle);
  };

  const handleReset = () => {
    setR(10);
    setTheta(60);
    setLayers({
      radius: true,
      diameter: false,
      arc: true,
      chord: true,
      apothem: true,
      sector: true,
      triangle: true,
      segment: true,
      inscribed: false,
    });
  };

  return (
    <div className="space-y-6">
      {/* Sandbox Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
        <div>
          <h2 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <Sliders className="w-5 h-5 text-indigo-600" />
            Laboratorium Eksplorasi Lingkaran Dinamis
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Geser slider jari-jari dan sudut untuk melihat reaksi geometri, koordinat akurat, dan perhitungan real-time.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {/* Pi choice selector */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg text-xs">
            <span className="px-2 text-slate-500 font-medium">Nilai π:</span>
            <button
              onClick={() => setPiChoice('exact')}
              className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
                piChoice === 'exact' ? 'bg-white text-indigo-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Presisi (π)
            </button>
            <button
              onClick={() => setPiChoice('22/7')}
              className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
                piChoice === '22/7' ? 'bg-white text-indigo-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              22/7
            </button>
            <button
              onClick={() => setPiChoice('3.14')}
              className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
                piChoice === '3.14' ? 'bg-white text-indigo-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              3,14
            </button>
          </div>

          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Reset
          </button>
        </div>
      </div>

      {/* Main 2-Zone Sandbox */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Zone: Live SVG Visual Canvas */}
        <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-5 shadow-sm flex flex-col items-center">
          <CircleDiagram
            r={r}
            theta={theta}
            width={380}
            height={380}
            showCenter={true}
            showRadius={layers.radius}
            showDiameter={layers.diameter}
            showArc={layers.arc}
            showChord={layers.chord}
            showApothem={layers.apothem}
            showSector={layers.sector}
            showTriangle={layers.triangle}
            showSegment={layers.segment}
            showInscribed={layers.inscribed}
            inscribedAnglePos={inscribedPos}
            title={`Lingkaran r = ${r} cm | θ = ${theta}°`}
            subtitle={
              layers.segment
                ? 'Arsiran Hijau: Tembereng | Kuning: Juring | Biru: Segitiga'
                : 'Menampilkan komponen geometris aktif'
            }
          />

          {/* Quick Presets */}
          <div className="w-full mt-4 pt-3 border-t border-slate-100">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-2">
              Preset Sudut Istimewa:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {[30, 45, 60, 90, 120, 180, 270].map((angle) => (
                <button
                  key={angle}
                  onClick={() => setPreset(angle)}
                  className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                    theta === angle
                      ? 'bg-indigo-600 text-white font-semibold'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {angle}°
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Zone: Interactive Control Deck & Live Metrics */}
        <div className="lg:col-span-7 space-y-5">
          {/* Controls Box */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-4">
            <h3 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center justify-between">
              <span>Pengaturan Geometri Langsung</span>
              <span className="text-xs font-normal text-slate-500">Nilai langsung sinkron</span>
            </h3>

            {/* Slider 1: Jari-Jari */}
            <div>
              <div className="flex items-center justify-between text-xs font-medium text-slate-700 mb-1.5">
                <span className="flex items-center gap-1.5 font-bold">
                  <span className="w-2 h-2 rounded-full bg-slate-700" />
                  Jari-jari (r):
                </span>
                <span className="font-mono text-sm font-bold text-indigo-600">{r} cm</span>
              </div>
              <input
                type="range"
                min="3"
                max="20"
                step="0.5"
                value={r}
                onChange={(e) => setR(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-0.5">
                <span>3 cm</span>
                <span>Diameter (d) = {r * 2} cm</span>
                <span>20 cm</span>
              </div>
            </div>

            {/* Slider 2: Sudut Pusat */}
            <div>
              <div className="flex items-center justify-between text-xs font-medium text-slate-700 mb-1.5">
                <span className="flex items-center gap-1.5 font-bold">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  Sudut Pusat (θ):
                </span>
                <span className="font-mono text-sm font-bold text-amber-600">{theta}°</span>
              </div>
              <input
                type="range"
                min="5"
                max="355"
                step="1"
                value={theta}
                onChange={(e) => setTheta(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-0.5">
                <span>5° (Lancip)</span>
                <span>90° (Siku) · 180° (Lurus)</span>
                <span>355° (Hampir Penuh)</span>
              </div>
            </div>

            {/* Slider 3: Sudut Keliling C (if inscribed active) */}
            {layers.inscribed && (
              <div>
                <div className="flex items-center justify-between text-xs font-medium text-slate-700 mb-1.5">
                  <span className="flex items-center gap-1.5 font-bold text-cyan-700">
                    <span className="w-2 h-2 rounded-full bg-cyan-600" />
                    Posisi Titik C (Sudut Keliling):
                  </span>
                  <span className="font-mono text-sm font-bold text-cyan-700">{inscribedPos}°</span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="340"
                  step="2"
                  value={inscribedPos}
                  onChange={(e) => setInscribedPos(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-cyan-600"
                />
              </div>
            )}

            {/* Layer Toggles */}
            <div className="pt-2 border-t border-slate-100">
              <span className="text-xs font-bold text-slate-700 block mb-2">
                Lapisan Geometris (Tampilkan / Sembunyikan):
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                {[
                  { key: 'sector', label: 'Juring', color: 'text-amber-700 bg-amber-50 border-amber-200' },
                  { key: 'triangle', label: 'Segitiga', color: 'text-indigo-700 bg-indigo-50 border-indigo-200' },
                  { key: 'segment', label: 'Tembereng', color: 'text-emerald-700 bg-emerald-50 border-emerald-200' },
                  { key: 'chord', label: 'Tali Busur', color: 'text-purple-700 bg-purple-50 border-purple-200' },
                  { key: 'apothem', label: 'Apotema', color: 'text-rose-700 bg-rose-50 border-rose-200' },
                  { key: 'arc', label: 'Busur (s)', color: 'text-orange-700 bg-orange-50 border-orange-200' },
                  { key: 'radius', label: 'Jari-jari (r)', color: 'text-slate-700 bg-slate-50 border-slate-200' },
                  { key: 'inscribed', label: 'Sudut Keliling', color: 'text-cyan-700 bg-cyan-50 border-cyan-200' },
                ].map(({ key, label, color }) => {
                  const isActive = layers[key as keyof typeof layers];
                  return (
                    <button
                      key={key}
                      onClick={() => toggleLayer(key as keyof typeof layers)}
                      className={`flex items-center justify-between p-2 rounded-lg border text-left font-medium transition-all ${
                        isActive
                          ? `${color} ring-1 ring-inset ring-current font-bold`
                          : 'bg-white border-slate-200 text-slate-400 hover:text-slate-600'
                      }`}
                    >
                      <span className="truncate">{label}</span>
                      {isActive && <Check className="w-3.5 h-3.5 shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Real-time Math Output Grid */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-3">
            <h3 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-2">
              Hasil Perhitungan Matematis Real-Time (Akurat)
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {/* 1. Keliling */}
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                <span className="text-[11px] font-medium text-slate-500 block">Keliling (K)</span>
                <span className="text-base font-bold font-mono text-slate-900">
                  {calcs.keliling.toFixed(2)}
                </span>
                <span className="text-[11px] text-slate-500 ml-1">cm</span>
                <div className="text-[10px] text-slate-400 mt-1">2 · π · {r}</div>
              </div>

              {/* 2. Luas Lingkaran */}
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                <span className="text-[11px] font-medium text-slate-500 block">Luas Lingkaran (L)</span>
                <span className="text-base font-bold font-mono text-slate-900">
                  {calcs.luasLingkaran.toFixed(2)}
                </span>
                <span className="text-[11px] text-slate-500 ml-1">cm²</span>
                <div className="text-[10px] text-slate-400 mt-1">π · {r}²</div>
              </div>

              {/* 3. Busur */}
              <div className="p-3 bg-orange-50/70 rounded-xl border border-orange-200/70">
                <span className="text-[11px] font-medium text-orange-700 block">Panjang Busur (s)</span>
                <span className="text-base font-bold font-mono text-orange-900">
                  {calcs.panjangBusur.toFixed(2)}
                </span>
                <span className="text-[11px] text-orange-700 ml-1">cm</span>
                <div className="text-[10px] text-orange-600/80 mt-1">
                  ({theta}/360) · {calcs.keliling.toFixed(1)}
                </div>
              </div>

              {/* 4. Tali Busur */}
              <div className="p-3 bg-purple-50/70 rounded-xl border border-purple-200/70">
                <span className="text-[11px] font-medium text-purple-700 block">Tali Busur (c)</span>
                <span className="text-base font-bold font-mono text-purple-900">
                  {calcs.panjangTaliBusur.toFixed(2)}
                </span>
                <span className="text-[11px] text-purple-700 ml-1">cm</span>
                <div className="text-[10px] text-purple-600/80 mt-1">
                  2 · {r} · sin({theta / 2}°)
                </div>
              </div>

              {/* 5. Apotema */}
              <div className="p-3 bg-rose-50/70 rounded-xl border border-rose-200/70">
                <span className="text-[11px] font-medium text-rose-700 block">Apotema (a)</span>
                <span className="text-base font-bold font-mono text-rose-900">
                  {calcs.panjangApotema.toFixed(2)}
                </span>
                <span className="text-[11px] text-rose-700 ml-1">cm</span>
                <div className="text-[10px] text-rose-600/80 mt-1">
                  √({r}² - ({(calcs.panjangTaliBusur / 2).toFixed(1)})²)
                </div>
              </div>

              {/* 6. Luas Juring */}
              <div className="p-3 bg-amber-50/70 rounded-xl border border-amber-200/70">
                <span className="text-[11px] font-medium text-amber-700 block">Luas Juring (L_j)</span>
                <span className="text-base font-bold font-mono text-amber-900">
                  {calcs.luasJuring.toFixed(2)}
                </span>
                <span className="text-[11px] text-amber-700 ml-1">cm²</span>
                <div className="text-[10px] text-amber-600/80 mt-1">
                  ({theta}/360) · π · {r}²
                </div>
              </div>

              {/* 7. Luas Segitiga */}
              <div className="p-3 bg-indigo-50/70 rounded-xl border border-indigo-200/70">
                <span className="text-[11px] font-medium text-indigo-700 block">Luas Segitiga (L_Δ)</span>
                <span className="text-base font-bold font-mono text-indigo-900">
                  {calcs.luasSegitiga.toFixed(2)}
                </span>
                <span className="text-[11px] text-indigo-700 ml-1">cm²</span>
                <div className="text-[10px] text-indigo-600/80 mt-1">
                  ½ · {r}² · sin({theta}°)
                </div>
              </div>

              {/* 8. Luas Tembereng */}
              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 col-span-2 sm:col-span-1">
                <span className="text-[11px] font-medium text-emerald-700 block">Luas Tembereng</span>
                <span className="text-base font-bold font-mono text-emerald-900">
                  {calcs.luasTembereng.toFixed(2)}
                </span>
                <span className="text-[11px] text-emerald-700 ml-1">cm²</span>
                <div className="text-[10px] text-emerald-600 mt-1">
                  {calcs.luasJuring.toFixed(1)} - {calcs.luasSegitiga.toFixed(1)}
                </div>
              </div>

              {/* 9. Hubungan Sudut Keliling */}
              {layers.inscribed && (
                <div className="p-3 bg-cyan-50 rounded-xl border border-cyan-200 col-span-2 sm:col-span-1">
                  <span className="text-[11px] font-medium text-cyan-700 block">Sudut Keliling (∠ACB)</span>
                  <span className="text-base font-bold font-mono text-cyan-900">
                    {calcs.sudutKeliling.toFixed(1)}°
                  </span>
                  <div className="text-[10px] text-cyan-600 mt-1">
                    ½ × {theta}° (menghadap busur yang sama)
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
