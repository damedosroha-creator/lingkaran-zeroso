/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  BookOpen,
  Sliders,
  Layers,
  Calculator,
  Award,
  FileDown,
  Menu,
  X,
  Compass,
  CheckCircle2,
} from 'lucide-react';
import { modulesData } from './data/modulesData';
import { ModuleViewer } from './components/ModuleViewer';
import { LabSandbox } from './components/LabSandbox';
import { ProofAnimation } from './components/ProofAnimation';
import { CircleCalculator } from './components/CircleCalculator';
import { FormulaSheet } from './components/FormulaSheet';
import { QuizAssessment } from './components/QuizAssessment';
import { downloadStandaloneHtml } from './utils/exportHtml';

type TabView = 'modules' | 'sandbox' | 'proofs' | 'calculator' | 'formulas' | 'quiz';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabView>('modules');
  const [activeModuleId, setActiveModuleId] = useState<number>(1);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [completedModules, setCompletedModules] = useState<{ [id: number]: boolean }>({ 1: true });

  const currentModule = modulesData.find((m) => m.id === activeModuleId) || modulesData[0];

  const handleSelectModule = (id: number) => {
    setActiveModuleId(id);
    setActiveTab('modules');
    setCompletedModules((prev) => ({ ...prev, [id]: true }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNextModule = () => {
    if (activeModuleId < 10) {
      handleSelectModule(activeModuleId + 1);
    }
  };

  const handlePrevModule = () => {
    if (activeModuleId > 1) {
      handleSelectModule(activeModuleId - 1);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col antialiased">
      {/* 1. Header (Strict Top Bar Contract: Brand — 5 Nav Links — 1 Primary Action) */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
          {/* Zone 1: Single Brand Element Wordmark */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setActiveTab('modules');
            }}
            className="flex items-center gap-2.5 text-base sm:text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 hover:opacity-90 transition-opacity"
          >
            <span className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-serif text-lg shadow-sm">
              ○
            </span>
            <span>Geometri Lingkaran</span>
          </a>

          {/* Zone 2: 4-5 Concise Single-Line Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs sm:text-sm font-medium text-slate-600">
            <button
              onClick={() => setActiveTab('modules')}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 pb-0.5 ${
                activeTab === 'modules'
                  ? 'text-indigo-600 font-bold border-b-2 border-indigo-600'
                  : ''
              }`}
            >
              Modul Materi
            </button>
            <button
              onClick={() => setActiveTab('sandbox')}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 pb-0.5 ${
                activeTab === 'sandbox'
                  ? 'text-indigo-600 font-bold border-b-2 border-indigo-600'
                  : ''
              }`}
            >
              Laboratorium Dinamis
            </button>
            <button
              onClick={() => setActiveTab('proofs')}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 pb-0.5 ${
                activeTab === 'proofs'
                  ? 'text-indigo-600 font-bold border-b-2 border-indigo-600'
                  : ''
              }`}
            >
              Pembuktian Visual
            </button>
            <button
              onClick={() => setActiveTab('calculator')}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 pb-0.5 ${
                activeTab === 'calculator'
                  ? 'text-indigo-600 font-bold border-b-2 border-indigo-600'
                  : ''
              }`}
            >
              Kalkulator Cerdas
            </button>
            <button
              onClick={() => setActiveTab('formulas')}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 pb-0.5 ${
                activeTab === 'formulas'
                  ? 'text-indigo-600 font-bold border-b-2 border-indigo-600'
                  : ''
              }`}
            >
              Ensiklopedi Rumus
            </button>
            <button
              onClick={() => setActiveTab('quiz')}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 pb-0.5 ${
                activeTab === 'quiz'
                  ? 'text-indigo-600 font-bold border-b-2 border-indigo-600'
                  : ''
              }`}
            >
              Evaluasi 32 Soal
            </button>
          </nav>

          {/* Zone 3: 1 Primary Action (Download Standalone HTML) + Mobile Menu Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={downloadStandaloneHtml}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors whitespace-nowrap shadow-sm active:scale-95"
              title="Unduh satu file HTML utuh yang bisa dibuka secara offline"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Unduh Versi Offline</span>
              <span className="sm:hidden">Unduh HTML</span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-3 space-y-1 text-sm font-medium">
            {[
              { id: 'modules', label: 'Modul Materi' },
              { id: 'sandbox', label: 'Laboratorium Dinamis' },
              { id: 'proofs', label: 'Pembuktian Visual' },
              { id: 'calculator', label: 'Kalkulator Cerdas' },
              { id: 'formulas', label: 'Ensiklopedi Rumus' },
              { id: 'quiz', label: 'Evaluasi 32 Soal' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id as TabView);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left py-2 px-3 rounded-lg ${
                  activeTab === item.id
                    ? 'bg-indigo-50 text-indigo-700 font-bold'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* 2. Sub-Bar for Learning Modules (10-topic sequential stepper) when in 'modules' tab */}
      {activeTab === 'modules' && (
        <div className="bg-slate-100 border-b border-slate-200/80 py-2.5 overflow-x-auto scrollbar-none">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center gap-2 min-w-max">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-1">
              Topik Materi:
            </span>
            {modulesData.map((m) => {
              const isActive = m.id === activeModuleId;
              const isDone = completedModules[m.id];
              return (
                <button
                  key={m.id}
                  onClick={() => handleSelectModule(m.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-white text-indigo-700 font-bold shadow-sm ring-1 ring-slate-200'
                      : 'text-slate-600 hover:bg-white/60 hover:text-slate-900'
                  }`}
                >
                  <span className="font-mono text-[11px] opacity-75">{m.nomor}</span>
                  <span className="truncate max-w-[140px] sm:max-w-none">{m.judul.split('(')[0]}</span>
                  {isDone && <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* 3. Main Workspace Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {activeTab === 'modules' && (
          <ModuleViewer
            module={currentModule}
            hasPrev={activeModuleId > 1}
            hasNext={activeModuleId < 10}
            onPrev={handlePrevModule}
            onNext={handleNextModule}
          />
        )}

        {activeTab === 'sandbox' && <LabSandbox />}

        {activeTab === 'proofs' && <ProofAnimation />}

        {activeTab === 'calculator' && <CircleCalculator />}

        {activeTab === 'formulas' && <FormulaSheet />}

        {activeTab === 'quiz' && (
          <QuizAssessment onSelectModule={handleSelectModule} />
        )}
      </main>

      {/* 4. Quiet Footer */}
      <footer className="bg-white border-t border-slate-200 mt-12 py-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-700">Geometri Lingkaran Interaktif</span>
            <span>·</span>
            <span>Media Pembelajaran Matematika Digital Full Version</span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={downloadStandaloneHtml}
              className="hover:text-indigo-600 transition-colors flex items-center gap-1"
            >
              <FileDown className="w-3.5 h-3.5" /> Unduh geometri_lingkaran.html
            </button>
            <span>·</span>
            <span>Berbasis KaTeX & SVG Dinamis</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
