/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Target,
  Lightbulb,
  AlertCircle,
  CheckCircle2,
  HelpCircle,
  Compass,
} from 'lucide-react';
import { LearningModule, WorkedExample } from '../types/circle';
import { CircleDiagram } from './CircleDiagram';
import { MathView } from './MathView';
import { AudioNarrator } from './AudioNarrator';

interface ModuleViewerProps {
  module: LearningModule;
  onPrev?: () => void;
  onNext?: () => void;
  hasPrev?: boolean;
  hasNext?: boolean;
}

export const ModuleViewer: React.FC<ModuleViewerProps> = ({
  module,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}) => {
  const [selectedExampleTab, setSelectedExampleTab] = useState<number>(0);
  const [practiceAnswers, setPracticeAnswers] = useState<{ [id: string]: number }>({});
  const [showPracticeFeedback, setShowPracticeFeedback] = useState<{ [id: string]: boolean }>({});

  const activeExample: WorkedExample = module.contohSoal[selectedExampleTab] || module.contohSoal[0];

  const handleSelectPracticeOption = (questionId: string, optIndex: number) => {
    setPracticeAnswers((prev) => ({ ...prev, [questionId]: optIndex }));
    setShowPracticeFeedback((prev) => ({ ...prev, [questionId]: true }));
  };

  return (
    <div className="space-y-8">
      {/* 1. Header & Learning Objectives */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-indigo-600 bg-indigo-50 border border-indigo-200 px-2.5 py-1 rounded-md">
              Modul {module.nomor}
            </span>
            <span
              className={`text-[11px] font-semibold px-2 py-0.5 rounded ${
                module.level === 'Dasar'
                  ? 'bg-emerald-50 text-emerald-700'
                  : module.level === 'Menengah'
                  ? 'bg-amber-50 text-amber-700'
                  : 'bg-rose-50 text-rose-700 font-bold'
              }`}
            >
              Tingkat: {module.level}
            </span>
          </div>

          <div className="text-xs text-slate-400 font-medium">
            Materi Wajib {module.id} dari 10
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            {module.judul}
          </h2>
          <p className="text-sm text-slate-600 mt-1 leading-relaxed">
            {module.subhead}
          </p>
        </div>

        {/* Goals */}
        <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80">
          <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Target className="w-4 h-4 text-indigo-600" />
            Tujuan Pembelajaran:
          </h4>
          <ul className="space-y-1 text-xs text-slate-700">
            {module.tujuan.map((goal, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{goal}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 2. Audio Narrator (Guru Privat Digital) */}
      <AudioNarrator
        narasiText={module.narasiSuara}
        moduleTitle={module.judul}
      />

      {/* 3. Intuitive Explanation & Visual Stimulus Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Concept Explanation */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
          <h3 className="text-base font-bold text-slate-900 tracking-tight flex items-center gap-2 border-b border-slate-100 pb-2">
            <Lightbulb className="w-4 h-4 text-amber-500" />
            Pemahaman Konsep & Analogi Intuitif
          </h3>

          <p className="text-sm text-slate-700 leading-relaxed">
            {module.penjelasanIntuitif}
          </p>

          <div className="p-3.5 bg-amber-50/70 rounded-xl border border-amber-200/80 text-xs text-amber-950">
            <span className="font-bold block mb-1">Analogi Kehidupan Sehari-hari:</span>
            <p className="leading-relaxed">{module.analogiDuniaNyata}</p>
          </div>

          {/* Main Formula Presentation */}
          <div className="pt-2">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1.5">
              Rumus Utama:
            </span>
            <div className="p-4 bg-indigo-50/60 rounded-xl border border-indigo-200 flex items-center justify-center">
              <MathView math={module.rumusUtama} block className="text-lg font-bold" />
            </div>
          </div>
        </div>

        {/* Right: SVG Diagram Stimulus */}
        <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-5 shadow-sm flex flex-col items-center">
          <CircleDiagram
            r={module.diagramParams.r}
            theta={module.diagramParams.theta}
            showChord={module.diagramParams.showChord}
            showApothem={module.diagramParams.showApothem}
            showSector={module.diagramParams.showSector}
            showSegment={module.diagramParams.showSegment}
            showTriangle={module.diagramParams.showTriangle}
            showDiameter={module.diagramParams.showDiameter}
            showInscribed={module.diagramParams.showInscribed}
            highlight={module.diagramParams.highlight}
            title={`Visual Geometri: ${module.judul}`}
            subtitle="Model matematis akurat dengan penandaan titik O, A, B"
          />
        </div>
      </div>

      {/* 4. Derivation / Penurunan Rumus & Variable Table */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Derivation Steps */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
          <h3 className="text-base font-bold text-slate-900 tracking-tight flex items-center gap-2 border-b border-slate-100 pb-2">
            <Compass className="w-4 h-4 text-indigo-600" />
            {module.penurunanRumus.judul}
          </h3>

          <div className="space-y-3">
            {module.penurunanRumus.langkah.map((step, idx) => (
              <div key={idx} className="flex items-start gap-3 text-xs text-slate-700">
                <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-800 font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <div className="space-y-1">
                  <p className="leading-relaxed">{step.teks}</p>
                  {step.formula && (
                    <div className="bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200/80 inline-block">
                      <MathView math={step.formula} />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-900">
            <span className="font-bold">Kesimpulan: </span>
            {module.penurunanRumus.kesimpulan}
          </div>
        </div>

        {/* Variables Table & Pi Tips */}
        <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-4">
          <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
            Keterangan Variabel & Satuan
          </h4>

          <div className="space-y-2 text-xs">
            {module.keteranganVariabel.map((v, idx) => (
              <div key={idx} className="p-2.5 bg-slate-50 rounded-lg border border-slate-200/70">
                <div className="flex items-center justify-between font-bold text-slate-800 mb-0.5">
                  <span className="flex items-center gap-1.5">
                    <MathView math={v.simbol} />
                    <span>— {v.nama}</span>
                  </span>
                  <span className="font-mono text-[11px] text-indigo-600">{v.satuan}</span>
                </div>
                <p className="text-[11px] text-slate-500">{v.catatan}</p>
              </div>
            ))}
          </div>

          {/* Pi Tip Box */}
          <div className="p-3 bg-blue-50/80 rounded-xl border border-blue-200/80 text-xs text-blue-900">
            <span className="font-bold block mb-1">Pedoman Numerik (π & Derajat):</span>
            <p className="text-[11px] leading-relaxed">{module.tipsPi}</p>
          </div>
        </div>
      </div>

      {/* 5. Common Pitfalls / Kesalahan Umum */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
        <h3 className="text-base font-bold text-slate-900 tracking-tight flex items-center gap-2 border-b border-slate-100 pb-2">
          <AlertCircle className="w-4 h-4 text-rose-500" />
          Kesalahan Umum Siswa & Jebakan Soal (Mitos vs Fakta)
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {module.kesalahanUmum.map((item, idx) => (
            <div key={idx} className="p-4 bg-rose-50/40 rounded-xl border border-rose-200/80 space-y-2 text-xs">
              <div className="flex items-start gap-2 text-rose-900">
                <span className="font-bold text-rose-600 uppercase tracking-wider text-[10px] bg-rose-100 px-1.5 py-0.5 rounded shrink-0">
                  Mitos
                </span>
                <span className="italic">"{item.mitos}"</span>
              </div>
              <div className="flex items-start gap-2 text-emerald-950">
                <span className="font-bold text-emerald-700 uppercase tracking-wider text-[10px] bg-emerald-100 px-1.5 py-0.5 rounded shrink-0">
                  Fakta
                </span>
                <span>{item.fakta}</span>
              </div>
              <div className="pt-2 border-t border-rose-200/50 text-[11px] text-slate-600">
                <span className="font-bold text-slate-800">Tips Pengajar: </span>
                {item.tips}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 6. Comprehensive Worked Examples (3 Tingkat Kesulitan) */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
          <div>
            <h3 className="text-base font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-indigo-600" />
              Contoh Soal Terbimbing & Solusi Komprehensif (3 Variasi Tingkat)
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Setiap soal dilengkapi stimulus gambar khusus, proses perhitungan langkah demi langkah, dan satuan.
            </p>
          </div>

          {/* Example Selector Tabs */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg text-xs">
            {module.contohSoal.map((ex, idx) => (
              <button
                key={ex.id}
                onClick={() => setSelectedExampleTab(idx)}
                className={`px-3 py-1.5 rounded-md font-semibold transition-colors ${
                  selectedExampleTab === idx
                    ? 'bg-white text-indigo-700 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Contoh {idx + 1} ({ex.tingkat})
              </button>
            ))}
          </div>
        </div>

        {/* Selected Example Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Example Text & Math Solvers */}
          <div className="lg:col-span-7 space-y-4 text-xs">
            <div>
              <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider block">
                {activeExample.judul}
              </span>
              {activeExample.konteksCerita && (
                <p className="text-sm font-medium text-slate-800 mt-1 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-200">
                  {activeExample.konteksCerita}
                </p>
              )}
            </div>

            {/* Known & Wanted */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="font-bold text-slate-700 block mb-1">Diketahui:</span>
                <ul className="space-y-0.5 text-slate-600">
                  {activeExample.diketahui.map((d, i) => (
                    <li key={i}>• {d.label}: <strong className="text-slate-800">{d.value}</strong></li>
                  ))}
                </ul>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="font-bold text-slate-700 block mb-1">Ditanyakan:</span>
                <p className="text-indigo-900 font-medium">{activeExample.ditanyakan}</p>
              </div>
            </div>

            {/* Formula & Substitution */}
            <div className="space-y-2">
              <span className="font-bold text-slate-800 block">Rumus & Substitusi:</span>
              <div className="p-3 bg-indigo-50/50 rounded-xl border border-indigo-100 space-y-1.5">
                <div>
                  <span className="text-[11px] text-indigo-700 font-semibold block">Rumus:</span>
                  <MathView math={activeExample.rumus} block />
                </div>
                <div>
                  <span className="text-[11px] text-indigo-700 font-semibold block">Substitusi Angka:</span>
                  <MathView math={activeExample.substitusi} block />
                </div>
              </div>
            </div>

            {/* Step-by-Step Execution */}
            <div className="space-y-1.5">
              <span className="font-bold text-slate-800 block">Langkah Perhitungan Rinci:</span>
              <ol className="list-decimal list-inside space-y-1 text-slate-700 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-200">
                {activeExample.langkahPerhitungan.map((step, i) => (
                  <li key={i} className="pl-1">{step}</li>
                ))}
              </ol>
            </div>

            {/* Final Answer Banner */}
            <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block">
                  Hasil Akhir:
                </span>
                <span className="text-base font-bold text-emerald-950 font-mono">
                  <MathView math={activeExample.hasilAkhir} /> {activeExample.satuan}
                </span>
              </div>
              <div className="text-[11px] text-emerald-800 max-w-xs text-right">
                <span className="font-bold">Tips: </span> {activeExample.catatanKritis}
              </div>
            </div>
          </div>

          {/* Example Specific Stimulus Diagram */}
          <div className="lg:col-span-5 bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-col items-center">
            <CircleDiagram
              r={activeExample.diagramParams.r}
              theta={activeExample.diagramParams.theta}
              showChord={activeExample.diagramParams.showChord}
              showApothem={activeExample.diagramParams.showApothem}
              showSector={activeExample.diagramParams.showSector}
              showSegment={activeExample.diagramParams.showSegment}
              showTriangle={activeExample.diagramParams.showTriangle}
              showDiameter={activeExample.diagramParams.showDiameter}
              showInscribed={activeExample.diagramParams.showInscribed}
              highlight={activeExample.diagramParams.highlight}
              title={`Stimulus Contoh ${selectedExampleTab + 1}`}
              subtitle="Data geometris persis mencerminkan parameter soal"
            />
          </div>
        </div>
      </div>

      {/* 7. Latihan Mandiri Singkat per Modul */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
        <h3 className="text-base font-bold text-slate-900 tracking-tight flex items-center gap-2 border-b border-slate-100 pb-2">
          <HelpCircle className="w-4 h-4 text-emerald-600" />
          Latihan Mandiri Cepat (Uji Pemahaman Langsung)
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {module.latihanMandiri.map((lat, qIdx) => {
            const hasAnswered = practiceAnswers[lat.id] !== undefined;
            const isCorrect = practiceAnswers[lat.id] === lat.kunci;

            return (
              <div key={lat.id} className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3 text-xs flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                    Latihan #{qIdx + 1}
                  </span>
                  <p className="font-medium text-slate-800 mb-2 leading-relaxed">
                    {lat.pertanyaan}
                  </p>

                  <div className="space-y-1.5">
                    {lat.pilihan.map((opt, optIdx) => {
                      const isSelected = practiceAnswers[lat.id] === optIdx;
                      let btnStyle = 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100';

                      if (hasAnswered) {
                        if (optIdx === lat.kunci) {
                          btnStyle = 'bg-emerald-100 border-emerald-400 text-emerald-900 font-bold';
                        } else if (isSelected && !isCorrect) {
                          btnStyle = 'bg-rose-100 border-rose-400 text-rose-900';
                        }
                      } else if (isSelected) {
                        btnStyle = 'bg-indigo-50 border-indigo-400 text-indigo-900 font-bold';
                      }

                      return (
                        <button
                          key={optIdx}
                          disabled={hasAnswered}
                          onClick={() => handleSelectPracticeOption(lat.id, optIdx)}
                          className={`w-full p-2 rounded-lg border text-left transition-all ${btnStyle}`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Feedback */}
                {hasAnswered && (
                  <div className={`p-2.5 rounded-lg border text-[11px] ${isCorrect ? 'bg-emerald-50 border-emerald-200 text-emerald-900' : 'bg-rose-50 border-rose-200 text-rose-900'}`}>
                    <span className="font-bold block mb-0.5">
                      {isCorrect ? '✓ Jawaban Tepat!' : '✕ Belum Tepat. Kunci: ' + lat.pilihan[lat.kunci]}
                    </span>
                    <p className="text-slate-600">{lat.pembahasan}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 8. Bottom Navigation Controls */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-200">
        <button
          onClick={onPrev}
          disabled={!hasPrev}
          className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 disabled:opacity-40 transition-colors shadow-sm"
        >
          <ChevronLeft className="w-4 h-4" /> Modul Sebelumnya
        </button>

        <span className="text-xs text-slate-500 font-medium">
          Modul {module.id} dari 10
        </span>

        <button
          onClick={onNext}
          disabled={!hasNext}
          className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white disabled:opacity-40 transition-colors shadow-sm"
        >
          Modul Berikutnya <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
