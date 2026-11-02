/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import {
  CheckCircle,
  XCircle,
  AlertCircle,
  Clock,
  Award,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Filter,
  BarChart3,
  BookmarkCheck,
  Sparkles,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { quizQuestions } from '../data/quizQuestions';
import { QuizQuestion } from '../types/circle';
import { MathView } from './MathView';

interface QuizAssessmentProps {
  onSelectModule?: (moduleId: number) => void;
}

export const QuizAssessment: React.FC<QuizAssessmentProps> = ({ onSelectModule }) => {
  const [examMode, setExamMode] = useState<'practice' | 'exam'>('practice');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: number }>({});
  const [flagged, setFlagged] = useState<{ [key: number]: boolean }>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [filterLevel, setFilterLevel] = useState<string>('all');
  const [filterModule, setFilterModule] = useState<number | 'all'>('all');

  // Exam Timer (30 minutes)
  const [timeLeft, setTimeLeft] = useState<number>(30 * 60);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

  // Filtered list for practice mode
  const displayedQuestions = useMemo(() => {
    if (examMode === 'exam') return quizQuestions;
    return quizQuestions.filter((q) => {
      const matchLevel = filterLevel === 'all' || q.level === filterLevel;
      const matchModule = filterModule === 'all' || q.submateriId === filterModule;
      return matchLevel && matchModule;
    });
  }, [examMode, filterLevel, filterModule]);

  const currentQ = displayedQuestions[currentIndex] || displayedQuestions[0];

  // Timer countdown
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (examMode === 'exam' && isTimerRunning && !isSubmitted && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            handleSubmitExam();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [examMode, isTimerRunning, isSubmitted, timeLeft]);

  // Answer handler
  const handleSelectAnswer = (optIndex: number) => {
    if (isSubmitted && examMode === 'exam') return;
    setUserAnswers((prev) => ({
      ...prev,
      [currentQ.id]: optIndex,
    }));
  };

  const toggleFlag = (qId: number) => {
    setFlagged((prev) => ({ ...prev, [qId]: !prev[qId] }));
  };

  const handleStartExam = () => {
    setExamMode('exam');
    setIsSubmitted(false);
    setUserAnswers({});
    setFlagged({});
    setTimeLeft(30 * 60);
    setIsTimerRunning(true);
    setCurrentIndex(0);
  };

  const handleSubmitExam = () => {
    setIsSubmitted(true);
    setIsTimerRunning(false);

    // Calculate score
    let correct = 0;
    quizQuestions.forEach((q) => {
      if (userAnswers[q.id] === q.kunci) {
        correct++;
      }
    });
    const finalScore = Math.round((correct / quizQuestions.length) * 100);

    if (finalScore >= 75) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  };

  const handleReset = () => {
    setUserAnswers({});
    setFlagged({});
    setIsSubmitted(false);
    setTimeLeft(30 * 60);
    setIsTimerRunning(false);
    setCurrentIndex(0);
  };

  // Score statistics
  const stats = useMemo(() => {
    const total = quizQuestions.length;
    let correct = 0;
    let answered = 0;
    const moduleStats: { [id: number]: { total: number; correct: number; name: string } } = {};

    for (let i = 1; i <= 10; i++) {
      moduleStats[i] = { total: 0, correct: 0, name: '' };
    }

    quizQuestions.forEach((q) => {
      moduleStats[q.submateriId].total++;
      moduleStats[q.submateriId].name = q.submateriNama;
      if (userAnswers[q.id] !== undefined) {
        answered++;
        if (userAnswers[q.id] === q.kunci) {
          correct++;
          moduleStats[q.submateriId].correct++;
        }
      }
    });

    const score = Math.round((correct / total) * 100);
    return { total, correct, answered, score, moduleStats };
  }, [userAnswers]);

  // Format timer
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-6">
      {/* Top Banner & Mode Toggle */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <Award className="w-5 h-5 text-indigo-600" />
            Evaluasi Mandiri & Kuis Geometri Lingkaran
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            32 butir soal berbobot tinggi berstandar LOTS, MOTS, dan HOTS mencakup seluruh 10 modul pembelajaran.
          </p>
        </div>

        {/* Mode Selector */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg text-xs">
            <button
              onClick={() => {
                setExamMode('practice');
                setIsSubmitted(false);
              }}
              className={`px-3 py-1.5 rounded-md font-semibold transition-colors ${
                examMode === 'practice'
                  ? 'bg-white text-indigo-700 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Mode Latihan Bebas
            </button>
            <button
              onClick={handleStartExam}
              className={`px-3 py-1.5 rounded-md font-semibold transition-colors ${
                examMode === 'exam'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Simulasi Ujian (30 Menit)
            </button>
          </div>

          <button
            onClick={handleReset}
            className="p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
            title="Reset Seluruh Jawaban"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Exam Timer & Status Bar (if in Exam Mode) */}
      {examMode === 'exam' && (
        <div className="bg-indigo-950 text-white rounded-xl p-4 flex items-center justify-between border border-indigo-800">
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-amber-400" />
            <div>
              <span className="text-xs text-indigo-200">Sisa Waktu Ujian:</span>
              <div className="text-lg font-mono font-bold text-amber-400">{formatTime(timeLeft)}</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-indigo-200">
              Terjawab: {stats.answered} / {quizQuestions.length} Soal
            </span>
            {!isSubmitted ? (
              <button
                onClick={handleSubmitExam}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg shadow-sm transition-all"
              >
                Selesaikan & Kumpulkan Ujian
              </button>
            ) : (
              <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 px-3 py-1.5 rounded-lg border border-emerald-500/30">
                Ujian Selesai · Skor: {stats.score}/100
              </span>
            )}
          </div>
        </div>
      )}

      {/* Score Summary Modal/Card if Submitted in Exam Mode */}
      {isSubmitted && examMode === 'exam' && (
        <div className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white rounded-2xl p-6 border border-indigo-700/50 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-indigo-800/80 pb-4">
            <div>
              <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider block">
                Hasil Evaluasi Akhir
              </span>
              <h3 className="text-2xl font-black mt-1 flex items-center gap-2">
                Skor Kamu: {stats.score} / 100
                {stats.score >= 75 ? (
                  <span className="text-xs font-bold text-emerald-300 bg-emerald-900/60 border border-emerald-500/40 px-2.5 py-1 rounded-full">
                    LULUS (KKM: 75)
                  </span>
                ) : (
                  <span className="text-xs font-bold text-rose-300 bg-rose-900/60 border border-rose-500/40 px-2.5 py-1 rounded-full">
                    REMEDIAL (KKM: 75)
                  </span>
                )}
              </h3>
              <p className="text-xs text-indigo-200/80 mt-1">
                Benar: {stats.correct} soal · Salah: {stats.total - stats.correct} soal · Total: {stats.total} soal
              </p>
            </div>

            <button
              onClick={handleStartExam}
              className="flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-lg bg-indigo-500 hover:bg-indigo-400 text-white transition-all self-start sm:self-auto"
            >
              <RotateCcw className="w-4 h-4" /> Ulangi Ujian
            </button>
          </div>

          {/* Radar / Topic Mastery Breakdown */}
          <div>
            <h4 className="text-xs font-bold text-indigo-200 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <BarChart3 className="w-4 h-4 text-indigo-400" />
              Tingkat Penguasaan per Submateri (Analisis Diagnostik):
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {Object.entries(stats.moduleStats).map(([id, mod]) => {
                const pct = mod.total > 0 ? Math.round((mod.correct / mod.total) * 100) : 0;
                const isPassed = pct >= 66;
                return (
                  <div
                    key={id}
                    className={`p-3 rounded-xl border text-xs flex flex-col justify-between ${
                      isPassed
                        ? 'bg-indigo-950/40 border-indigo-700/50 text-indigo-100'
                        : 'bg-rose-950/40 border-rose-700/50 text-rose-100'
                    }`}
                  >
                    <div>
                      <span className="text-[10px] font-mono text-indigo-300">Modul {id}</span>
                      <p className="font-semibold text-white truncate mt-0.5">{mod.name}</p>
                    </div>
                    <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between">
                      <span className="font-mono text-xs font-bold">{pct}%</span>
                      <span className="text-[10px] text-slate-300">
                        {mod.correct}/{mod.total} Benar
                      </span>
                    </div>
                    {!isPassed && onSelectModule && (
                      <button
                        onClick={() => onSelectModule(Number(id))}
                        className="mt-2 text-[10px] font-bold text-amber-300 hover:text-amber-200 underline text-left"
                      >
                        Pelajari Ulang →
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Main Question Interface */}
      {currentQ && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Question Body */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-5">
            {/* Question Meta */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 text-xs font-bold rounded-md bg-indigo-50 text-indigo-700 border border-indigo-200">
                  Nomor {currentQ.id}
                </span>
                <span className="text-xs text-slate-500">
                  Modul {currentQ.submateriId}: {currentQ.submateriNama}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span
                  className={`text-[11px] font-semibold px-2 py-0.5 rounded ${
                    currentQ.level === 'Mudah'
                      ? 'bg-emerald-50 text-emerald-700'
                      : currentQ.level === 'Sedang'
                      ? 'bg-amber-50 text-amber-700'
                      : 'bg-rose-50 text-rose-700 font-bold'
                  }`}
                >
                  Tingkat: {currentQ.level}
                </span>

                <button
                  onClick={() => toggleFlag(currentQ.id)}
                  title="Tandai ragu-ragu"
                  className={`p-1.5 rounded-lg border transition-colors ${
                    flagged[currentQ.id]
                      ? 'bg-amber-50 border-amber-400 text-amber-600'
                      : 'bg-white border-slate-200 text-slate-400 hover:text-slate-600'
                  }`}
                >
                  <BookmarkCheck className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Question Text */}
            <div className="text-base font-medium text-slate-900 leading-relaxed">
              {currentQ.pertanyaan}
            </div>

            {/* Multiple Choice Options (A - E) */}
            <div className="space-y-2.5">
              {currentQ.pilihan.map((option, optIdx) => {
                const isSelected = userAnswers[currentQ.id] === optIdx;
                const isCorrect = currentQ.kunci === optIdx;
                const showFeedback = examMode === 'practice' ? isSelected !== undefined : isSubmitted;

                let optionStyle =
                  'bg-white border-slate-200 text-slate-800 hover:border-indigo-300 hover:bg-slate-50/50';

                if (isSelected) {
                  optionStyle = 'bg-indigo-50 border-indigo-600 text-indigo-950 font-semibold ring-1 ring-indigo-600';
                }

                if ((examMode === 'practice' && userAnswers[currentQ.id] !== undefined) || isSubmitted) {
                  if (isCorrect) {
                    optionStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold ring-1 ring-emerald-500';
                  } else if (isSelected && !isCorrect) {
                    optionStyle = 'bg-rose-50 border-rose-500 text-rose-950 ring-1 ring-rose-500';
                  }
                }

                return (
                  <button
                    key={optIdx}
                    onClick={() => handleSelectAnswer(optIdx)}
                    className={`w-full p-3.5 rounded-xl border text-left text-sm transition-all flex items-center justify-between gap-3 ${optionStyle}`}
                  >
                    <span>{option}</span>
                    {((examMode === 'practice' && userAnswers[currentQ.id] !== undefined) || isSubmitted) && (
                      <span className="shrink-0">
                        {isCorrect && <CheckCircle className="w-4 h-4 text-emerald-600" />}
                        {isSelected && !isCorrect && <XCircle className="w-4 h-4 text-rose-600" />}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Detailed Explanation (Instantly in practice mode or after submitting exam) */}
            {((examMode === 'practice' && userAnswers[currentQ.id] !== undefined) || isSubmitted) && (
              <div className="mt-4 p-4 bg-slate-50 rounded-xl border border-slate-200/90 space-y-2">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span
                    className={
                      userAnswers[currentQ.id] === currentQ.kunci
                        ? 'text-emerald-700 flex items-center gap-1'
                        : 'text-rose-700 flex items-center gap-1'
                    }
                  >
                    {userAnswers[currentQ.id] === currentQ.kunci ? (
                      <>
                        <CheckCircle className="w-4 h-4" /> Jawaban Kamu Tepat!
                      </>
                    ) : (
                      <>
                        <XCircle className="w-4 h-4" /> Jawaban Belum Tepat. Kunci Jawaban: {currentQ.pilihan[currentQ.kunci]}
                      </>
                    )}
                  </span>
                </div>

                <div className="text-xs text-slate-700 leading-relaxed border-t border-slate-200 pt-2">
                  <span className="font-bold block text-slate-900 mb-1">Pembahasan Langkah demi Langkah:</span>
                  <p>{currentQ.pembahasanLengkap}</p>
                </div>

                {currentQ.trikCepat && (
                  <div className="p-2 bg-amber-50 rounded-lg border border-amber-200 text-xs text-amber-900 flex items-center gap-1.5 font-medium">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>Trik Cepat Ujian: {currentQ.trikCepat}</span>
                  </div>
                )}
              </div>
            )}

            {/* Next / Previous Navigation */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <button
                disabled={currentIndex === 0}
                onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
                className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 disabled:opacity-40 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" /> Soal Sebelumnya
              </button>

              <span className="text-xs text-slate-400 font-mono">
                {currentIndex + 1} dari {displayedQuestions.length}
              </span>

              <button
                disabled={currentIndex === displayedQuestions.length - 1}
                onClick={() => setCurrentIndex((prev) => Math.min(displayedQuestions.length - 1, prev + 1))}
                className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white disabled:opacity-40 transition-colors"
              >
                Soal Berikutnya <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Question Grid Palette */}
          <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-4">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center justify-between border-b border-slate-100 pb-2">
              <span>Navigasi Lembar Jawaban</span>
              <span className="text-[11px] font-normal text-slate-500 font-mono">
                {Object.keys(userAnswers).length}/{displayedQuestions.length} Terisi
              </span>
            </h4>

            {/* Filter controls if in Practice Mode */}
            {examMode === 'practice' && (
              <div className="space-y-2 pb-2 border-b border-slate-100 text-xs">
                <div>
                  <label className="text-[11px] font-semibold text-slate-500 block mb-1">Filter Modul:</label>
                  <select
                    value={filterModule}
                    onChange={(e) => {
                      const val = e.target.value === 'all' ? 'all' : Number(e.target.value);
                      setFilterModule(val);
                      setCurrentIndex(0);
                    }}
                    className="w-full p-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs"
                  >
                    <option value="all">Semua Modul (1 - 10)</option>
                    {Array.from({ length: 10 }).map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        Modul {i + 1}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            {/* Question Numbers Grid */}
            <div className="grid grid-cols-6 sm:grid-cols-8 lg:grid-cols-6 gap-1.5">
              {displayedQuestions.map((q, idx) => {
                const isCurrent = idx === currentIndex;
                const isAnswered = userAnswers[q.id] !== undefined;
                const isFlagged = flagged[q.id];
                const isCorrect = userAnswers[q.id] === q.kunci;

                let numStyle = 'bg-slate-100 text-slate-600 hover:bg-slate-200';

                if (isAnswered) {
                  if (examMode === 'practice' || isSubmitted) {
                    numStyle = isCorrect ? 'bg-emerald-500 text-white font-bold' : 'bg-rose-500 text-white font-bold';
                  } else {
                    numStyle = 'bg-indigo-600 text-white font-bold';
                  }
                }

                if (isFlagged && !isSubmitted) {
                  numStyle += ' ring-2 ring-amber-400';
                }

                if (isCurrent) {
                  numStyle += ' ring-2 ring-indigo-900 shadow-md';
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-full aspect-square text-xs font-mono font-medium rounded-lg transition-all flex items-center justify-center relative ${numStyle}`}
                  >
                    {q.id}
                    {isFlagged && (
                      <span className="w-1.5 h-1.5 bg-amber-400 rounded-full absolute top-0.5 right-0.5" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Legend */}
            <div className="pt-3 border-t border-slate-100 space-y-1.5 text-[11px] text-slate-500">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded bg-indigo-600" /> Sudah dijawab
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded bg-slate-100 border border-slate-300" /> Belum dijawab
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded bg-slate-100 ring-2 ring-amber-400" /> Ditandai ragu-ragu
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
