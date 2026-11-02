/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type DifficultyLevel = 'Mudah' | 'Sedang' | 'HOTS';

export interface WorkedExample {
  id: string;
  tingkat: DifficultyLevel;
  judul: string;
  konteksCerita?: string;
  diketahui: { label: string; value: string }[];
  ditanyakan: string;
  diagramParams: {
    r: number; // radius in cm or unit
    theta?: number; // angle in degrees
    showRadius?: boolean;
    showDiameter?: boolean;
    showArc?: boolean;
    showChord?: boolean;
    showApothem?: boolean;
    showSector?: boolean;
    showSegment?: boolean;
    showTriangle?: boolean;
    showInscribed?: boolean;
    showRightAngleMark?: boolean;
    inscribedAngle?: number;
    customLabels?: { [key: string]: string };
    highlight?: 'radius' | 'diameter' | 'arc' | 'chord' | 'apothem' | 'sector' | 'segment' | 'triangle' | 'angle';
  };
  rumus: string; // KaTeX
  substitusi: string; // KaTeX
  langkahPerhitungan: string[];
  hasilAkhir: string; // KaTeX or text
  satuan: string;
  catatanKritis: string;
}

export interface PracticeQuestion {
  id: string;
  pertanyaan: string;
  pilihan: string[];
  kunci: number; // 0-indexed
  pembahasan: string;
}

export interface LearningModule {
  id: number;
  slug: string;
  nomor: string;
  judul: string;
  subhead: string;
  level: 'Dasar' | 'Menengah' | 'Lanjut';
  tujuan: string[];
  penjelasanIntuitif: string;
  analogiDuniaNyata: string;
  diagramParams: {
    r: number;
    theta: number;
    showRadius?: boolean;
    showDiameter?: boolean;
    showArc?: boolean;
    showChord?: boolean;
    showApothem?: boolean;
    showSector?: boolean;
    showSegment?: boolean;
    showTriangle?: boolean;
    showInscribed?: boolean;
    showRightAngleMark?: boolean;
    highlight?: string;
  };
  rumusUtama: string; // KaTeX
  rumusTambahan?: { label: string; formula: string; keterangan: string }[];
  penurunanRumus: {
    judul: string;
    langkah: { teks: string; formula?: string }[];
    kesimpulan: string;
  };
  keteranganVariabel: { simbol: string; nama: string; satuan: string; catatan: string }[];
  tipsPi: string;
  kesalahanUmum: { mitos: string; fakta: string; tips: string }[];
  contohSoal: WorkedExample[];
  latihanMandiri: PracticeQuestion[];
  narasiSuara: string;
}

export interface QuizQuestion {
  id: number;
  submateriId: number; // 1 to 10
  submateriNama: string;
  level: DifficultyLevel;
  pertanyaan: string;
  rumusBantuan?: string;
  diagramParams?: {
    r: number;
    theta?: number;
    showChord?: boolean;
    showApothem?: boolean;
    showSector?: boolean;
    showSegment?: boolean;
    showTriangle?: boolean;
    showInscribed?: boolean;
    inscribedAngle?: number;
    customNote?: string;
  };
  pilihan: string[]; // [A, B, C, D, E]
  kunci: number; // 0 to 4
  pembahasanLengkap: string;
  trikCepat?: string;
}

export interface CircleCalculations {
  r: number;
  d: number;
  theta: number; // in degrees
  keliling: number;
  luasLingkaran: number;
  panjangBusur: number;
  panjangTaliBusur: number;
  panjangApotema: number;
  luasSegitiga: number;
  luasJuring: number;
  luasTembereng: number;
  sudutKeliling: number;
}
