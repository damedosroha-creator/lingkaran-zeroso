/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Calculator, ArrowRight, CheckCircle2, RefreshCw } from 'lucide-react';
import { CircleDiagram } from './CircleDiagram';
import { MathView } from './MathView';

export const CircleCalculator: React.FC = () => {
  const [inputType, setInputType] = useState<'r' | 'd'>('r');
  const [inputValue, setInputValue] = useState<number>(14);
  const [theta, setTheta] = useState<number>(90);
  const [piMode, setPiMode] = useState<'auto' | '22/7' | '3.14'>('auto');

  const r = inputType === 'r' ? inputValue : inputValue / 2;
  const d = r * 2;

  // Decide pi value
  const isMultipleOf7 = r % 7 === 0 || (r * 2) % 7 === 0;
  const useFractionPi = piMode === '22/7' || (piMode === 'auto' && isMultipleOf7);
  const piVal = useFractionPi ? 22 / 7 : 3.14;
  const piText = useFractionPi ? '\\frac{22}{7}' : '3{,}14';

  // Math values
  const radTheta = (theta * Math.PI) / 180;
  const radHalf = (theta * Math.PI) / 360;

  const keliling = 2 * piVal * r;
  const luas = piVal * r * r;
  const busur = (theta / 360) * 2 * piVal * r;
  const taliBusur = 2 * r * Math.sin(radHalf);
  const apotema = r * Math.cos(radHalf);
  const luasJuring = (theta / 360) * piVal * r * r;
  const luasSegitiga = 0.5 * r * r * Math.sin(radTheta);
  const luasTembereng = Math.max(0, luasJuring - luasSegitiga);
  const sudutKeliling = theta / 2;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
      {/* Title */}
      <div className="border-b border-slate-200 pb-4">
        <h3 className="text-base font-bold text-slate-900 tracking-tight flex items-center gap-2">
          <Calculator className="w-5 h-5 text-indigo-600" />
          Kalkulator Geometri Lingkaran Cerdas & Penjabaran Langkah
        </h3>
        <p className="text-xs text-slate-500 mt-1">
          Masukkan parameter lingkaran dan dapatkan penyelesaian terperinci untuk seluruh 8 unsur lingkaran.
        </p>
      </div>

      {/* Input Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200/80">
        <div>
          <label className="text-xs font-semibold text-slate-700 block mb-1.5">
            Jenis Input Dimensi:
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setInputType('r')}
              className={`py-1.5 px-3 text-xs font-semibold rounded-lg border transition-all ${
                inputType === 'r'
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              Jari-jari (r)
            </button>
            <button
              onClick={() => setInputType('d')}
              className={`py-1.5 px-3 text-xs font-semibold rounded-lg border transition-all ${
                inputType === 'd'
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              Diameter (d)
            </button>
          </div>
          <div className="mt-2">
            <input
              type="number"
              min="0.1"
              step="0.5"
              value={inputValue}
              onChange={(e) => setInputValue(Math.max(0.1, Number(e.target.value)))}
              className="w-full px-3 py-1.5 text-sm font-mono font-bold bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <span className="text-[10px] text-slate-400 mt-0.5 block">
              Nilai r = {r} cm, d = {d} cm
            </span>
          </div>
        </div>

        <div>
          <label className="text-xs font-semibold text-slate-700 block mb-1.5">
            Besar Sudut Pusat (θ):
          </label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              min="1"
              max="360"
              value={theta}
              onChange={(e) => setTheta(Math.min(360, Math.max(1, Number(e.target.value))))}
              className="w-full px-3 py-1.5 text-sm font-mono font-bold bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <span className="text-xs font-bold text-slate-600">Derajat (°)</span>
          </div>
          <span className="text-[10px] text-slate-400 mt-1 block">
            Sudut Keliling bersesuaian = {sudutKeliling}°
          </span>
        </div>

        <div>
          <label className="text-xs font-semibold text-slate-700 block mb-1.5">
            Pemilihan Nilai Konstan π:
          </label>
          <select
            value={piMode}
            onChange={(e) => setPiMode(e.target.value as any)}
            className="w-full px-3 py-2 text-xs font-medium bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="auto">
              Otomatis ({isMultipleOf7 ? '22/7 karena kelipatan 7' : '3,14'})
            </option>
            <option value="22/7">Paksa π = 22/7</option>
            <option value="3.14">Paksa π = 3,14</option>
          </select>
          <span className="text-[10px] text-indigo-600 font-semibold mt-1 block">
            Digunakan: π = {useFractionPi ? '22/7' : '3,14'}
          </span>
        </div>
      </div>

      {/* Main Solver Breakdown & Visual Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Diagram Stimulus */}
        <div className="lg:col-span-5 bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-col items-center">
          <CircleDiagram
            r={r}
            theta={theta}
            width={340}
            height={340}
            showCenter={true}
            showRadius={true}
            showArc={true}
            showChord={true}
            showApothem={true}
            showSector={true}
            showTriangle={true}
            showSegment={true}
            showInscribed={true}
            title={`Visual Geometri: r = ${r} cm, θ = ${theta}°`}
          />
        </div>

        {/* Step-by-Step Solved Proofs */}
        <div className="lg:col-span-7 space-y-3">
          <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            Langkah Pengerjaan Rinci:
          </h4>

          {/* 1. Keliling */}
          <div className="p-3 bg-slate-50 rounded-lg border border-slate-200/80 text-xs">
            <span className="font-bold text-slate-800">1. Keliling Lingkaran:</span>
            <MathView math={`K = 2\\pi r = 2 \\times ${piText} \\times ${r} = ${keliling.toFixed(2)}\\text{ cm}`} block />
          </div>

          {/* 2. Luas Lingkaran */}
          <div className="p-3 bg-slate-50 rounded-lg border border-slate-200/80 text-xs">
            <span className="font-bold text-slate-800">2. Luas Lingkaran:</span>
            <MathView math={`L = \\pi r^2 = ${piText} \\times ${r}^2 = ${luas.toFixed(2)}\\text{ cm}^2`} block />
          </div>

          {/* 3. Busur */}
          <div className="p-3 bg-orange-50/70 rounded-lg border border-orange-200/70 text-xs">
            <span className="font-bold text-orange-900">3. Panjang Busur:</span>
            <MathView
              math={`s = \\frac{\\theta}{360^\\circ} \\times 2\\pi r = \\frac{${theta}}{360} \\times ${keliling.toFixed(2)} = ${busur.toFixed(2)}\\text{ cm}`}
              block
            />
          </div>

          {/* 4. Tali Busur */}
          <div className="p-3 bg-purple-50/70 rounded-lg border border-purple-200/70 text-xs">
            <span className="font-bold text-purple-900">4. Panjang Tali Busur:</span>
            <MathView
              math={`c = 2r \\sin\\left(\\frac{\\theta}{2}\\right) = 2(${r}) \\sin(${theta / 2}^\\circ) = ${taliBusur.toFixed(2)}\\text{ cm}`}
              block
            />
          </div>

          {/* 5. Apotema */}
          <div className="p-3 bg-rose-50/70 rounded-lg border border-rose-200/70 text-xs">
            <span className="font-bold text-rose-900">5. Panjang Apotema (Pythagoras):</span>
            <MathView
              math={`a = \\sqrt{r^2 - \\left(\\frac{c}{2}\\right)^2} = \\sqrt{${r}^2 - (${(taliBusur / 2).toFixed(2)})^2} = ${apotema.toFixed(2)}\\text{ cm}`}
              block
            />
          </div>

          {/* 6. Luas Juring */}
          <div className="p-3 bg-amber-50/70 rounded-lg border border-amber-200/70 text-xs">
            <span className="font-bold text-amber-900">6. Luas Juring:</span>
            <MathView
              math={`L_{\\text{juring}} = \\frac{\\theta}{360^\\circ} \\times \\pi r^2 = \\frac{${theta}}{360} \\times ${luas.toFixed(2)} = ${luasJuring.toFixed(2)}\\text{ cm}^2`}
              block
            />
          </div>

          {/* 7. Luas Segitiga */}
          <div className="p-3 bg-indigo-50/70 rounded-lg border border-indigo-200/70 text-xs">
            <span className="font-bold text-indigo-900">7. Luas Segitiga OAB:</span>
            <MathView
              math={`L_{\\triangle} = \\frac{1}{2} r^2 \\sin \\theta = \\frac{1}{2}(${r}^2) \\sin(${theta}^\\circ) = ${luasSegitiga.toFixed(2)}\\text{ cm}^2`}
              block
            />
          </div>

          {/* 8. Luas Tembereng */}
          <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200 text-xs">
            <span className="font-bold text-emerald-900">8. Luas Tembereng (Juring - Segitiga):</span>
            <MathView
              math={`L_{\\text{tembereng}} = L_{\\text{juring}} - L_{\\triangle} = ${luasJuring.toFixed(2)} - ${luasSegitiga.toFixed(2)} = ${luasTembereng.toFixed(2)}\\text{ cm}^2`}
              block
            />
          </div>
        </div>
      </div>
    </div>
  );
};
