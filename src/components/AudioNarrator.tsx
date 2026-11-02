/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Play, Pause, RotateCcw, Sparkles } from 'lucide-react';

interface AudioNarratorProps {
  narasiText: string;
  moduleTitle: string;
  autoPlay?: boolean;
}

export const AudioNarrator: React.FC<AudioNarratorProps> = ({
  narasiText,
  moduleTitle,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [rate, setRate] = useState<number>(1.0);
  const [voicesLoaded, setVoicesLoaded] = useState(false);
  const [hasIndonesianVoice, setHasIndonesianVoice] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);

  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Check speech synthesis & load Indonesian voice
  useEffect(() => {
    if (!('speechSynthesis' in window)) return;

    const checkVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      if (voices.length > 0) {
        setVoicesLoaded(true);
        const indoVoice = voices.some(v => v.lang.includes('id') || v.lang.includes('ID'));
        setHasIndonesianVoice(indoVoice);
      }
    };

    checkVoices();
    window.speechSynthesis.onvoiceschanged = checkVoices;

    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  // Stop speech when changing module
  useEffect(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      setIsPaused(false);
    }
  }, [narasiText]);

  const handlePlay = () => {
    if (!('speechSynthesis' in window)) return;

    if (isPaused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
      setIsPlaying(true);
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(narasiText);
    utterance.rate = rate;
    utterance.pitch = 1.0;

    // Pick Indonesian voice if found
    const voices = window.speechSynthesis.getVoices();
    const idVoice = voices.find(v => v.lang === 'id-ID' || v.lang === 'id_ID' || v.lang.startsWith('id'));
    if (idVoice) {
      utterance.voice = idVoice;
    }
    utterance.lang = 'id-ID';

    utterance.onend = () => {
      setIsPlaying(false);
      setIsPaused(false);
    };

    utterance.onerror = () => {
      setIsPlaying(false);
      setIsPaused(false);
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
    setIsPlaying(true);
    setIsPaused(false);
  };

  const handlePause = () => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.pause();
    setIsPaused(true);
    setIsPlaying(false);
  };

  const handleStop = () => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setIsPaused(false);
  };

  const toggleRate = () => {
    const rates = [0.8, 1.0, 1.2];
    const nextRate = rates[(rates.indexOf(rate) + 1) % rates.length];
    setRate(nextRate);
    if (isPlaying) {
      handleStop();
    }
  };

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-900 text-white rounded-2xl p-5 shadow-lg border border-indigo-700/40 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 -mt-8 -mr-8 w-40 h-40 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

      {/* Top Header */}
      <div className="flex items-center justify-between gap-4 pb-3 border-b border-indigo-500/20">
        <div className="flex items-center gap-2.5">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isPlaying ? 'bg-indigo-500 text-white animate-pulse' : 'bg-indigo-950 text-indigo-300 border border-indigo-500/30'}`}>
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white tracking-tight flex items-center gap-1.5">
              Bimbingan Guru Privat
              {isPlaying && (
                <span className="inline-flex items-center gap-1 text-[11px] font-normal text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Sedang berbicara...
                </span>
              )}
            </h4>
            <p className="text-xs text-indigo-200/70">Penjelasan lisan & panduan visual materi: {moduleTitle}</p>
          </div>
        </div>

        {/* Audio Action Buttons */}
        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={toggleRate}
            title="Kecepatan Bicara"
            className="px-2 py-1 text-[11px] font-mono font-medium rounded-md bg-indigo-950 hover:bg-indigo-800/60 text-indigo-200 border border-indigo-500/30 transition-colors"
          >
            {rate}x
          </button>

          {!isPlaying ? (
            <button
              onClick={handlePlay}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm transition-all active:scale-95"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              {isPaused ? 'Lanjutkan' : 'Dengarkan'}
            </button>
          ) : (
            <button
              onClick={handlePause}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-amber-600 hover:bg-amber-500 text-white shadow-sm transition-all active:scale-95"
            >
              <Pause className="w-3.5 h-3.5 fill-current" />
              Jeda
            </button>
          )}

          {(isPlaying || isPaused) && (
            <button
              onClick={handleStop}
              title="Ulangi dari Awal"
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Narration Text Content */}
      <div className="mt-3.5 text-sm leading-relaxed text-slate-200">
        <p className="whitespace-pre-line font-normal text-[13.5px] leading-6">
          {narasiText}
        </p>
      </div>

      {/* Voice Status Footer */}
      <div className="mt-3 pt-2.5 border-t border-indigo-500/20 flex items-center justify-between text-[11px] text-indigo-300/80">
        <span className="flex items-center gap-1">
          {hasIndonesianVoice ? (
            <span className="text-emerald-400">✓ Suara alami Bahasa Indonesia (id-ID) siap</span>
          ) : (
            <span>Menggunakan synthesizer suara browser bawaan</span>
          )}
        </span>
        <span className="text-indigo-400/80 text-[10.5px]">
          Tips: Tekan tombol Dengarkan untuk mendengarkan sambil membaca visual
        </span>
      </div>
    </div>
  );
};
