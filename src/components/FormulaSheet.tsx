/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BookOpen, Search, Check, AlertTriangle, Compass } from 'lucide-react';
import { MathView } from './MathView';

export const FormulaSheet: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const formulas = [
    {
      kategori: 'Dasar Lingkaran',
      nama: 'Hubungan Diameter dan Jari-Jari',
      rumus: 'd = 2r \\iff r = \\frac{d}{2}',
      keterangan: 'Diameter d membagi lingkaran menjadi 2 bagian simetris sama besar, panjangnya 2 kali jari-jari r.',
      satuan: 'cm, m',
    },
    {
      kategori: 'Dasar Lingkaran',
      nama: 'Keliling Lingkaran (K)',
      rumus: 'K = 2\\pi r = \\pi d',
      keterangan: 'Panjang seluruh garis lengkung yang membatasi lingkaran.',
      satuan: 'cm, m',
    },
    {
      kategori: 'Dasar Lingkaran',
      nama: 'Luas Lingkaran (L)',
      rumus: 'L = \\pi r^2 = \\frac{1}{4}\\pi d^2',
      keterangan: 'Besar daerah yang dilingkupi oleh keliling lingkaran.',
      satuan: 'cm², m²',
    },
    {
      kategori: 'Juring & Busur',
      nama: 'Panjang Busur Lingkaran (s)',
      rumus: 's = \\frac{\\theta}{360^\\circ} \\times 2\\pi r',
      keterangan: 'Panjang bagian garis lengkung lingkaran yang dibatasi oleh sudut pusat θ.',
      satuan: 'cm, m',
    },
    {
      kategori: 'Juring & Busur',
      nama: 'Luas Juring Lingkaran',
      rumus: 'L_{\\text{juring}} = \\frac{\\theta}{360^\\circ} \\times \\pi r^2',
      keterangan: 'Luas daerah di dalam lingkaran yang dibatasi oleh dua jari-jari dan satu busur.',
      satuan: 'cm², m²',
    },
    {
      kategori: 'Tali Busur & Apotema',
      nama: 'Panjang Tali Busur (c)',
      rumus: 'c = 2r \\sin\\left(\\frac{\\theta}{2}\\right)',
      keterangan: 'Ruas garis lurus yang menghubungkan dua titik sembarang pada keliling lingkaran.',
      satuan: 'cm, m',
    },
    {
      kategori: 'Tali Busur & Apotema',
      nama: 'Panjang Apotema (a)',
      rumus: 'a = \\sqrt{r^2 - \\left(\\frac{c}{2}\\right)^2} = r \\cos\\left(\\frac{\\theta}{2}\\right)',
      keterangan: 'Jarak terpendek (tegak lurus) dari titik pusat O ke tali busur c.',
      satuan: 'cm, m',
    },
    {
      kategori: 'Segitiga & Tembereng',
      nama: 'Luas Segitiga dalam Juring',
      rumus: 'L_{\\triangle} = \\frac{1}{2} r^2 \\sin \\theta = \\frac{1}{2} \\times c \\times a',
      keterangan: 'Segitiga sama kaki dengan dua sisi sepanjang r dan sudut apit θ.',
      satuan: 'cm², m²',
    },
    {
      kategori: 'Segitiga & Tembereng',
      nama: 'Luas Tembereng Lingkaran',
      rumus: 'L_{\\text{tembereng}} = L_{\\text{juring}} - L_{\\triangle} = \\left(\\frac{\\theta}{360^\\circ}\\pi r^2\\right) - \\left(\\frac{1}{2}r^2 \\sin\\theta\\right)',
      keterangan: 'Daerah lingkaran yang dibatasi oleh sebuah tali busur dan busurnya.',
      satuan: 'cm², m²',
    },
    {
      kategori: 'Sudut Pusat & Keliling',
      nama: 'Hubungan Sudut Pusat & Keliling',
      rumus: '\\angle \\text{Pusat} = 2 \\times \\angle \\text{Keliling} \\iff \\angle \\text{Keliling} = \\frac{1}{2} \\angle \\text{Pusat}',
      keterangan: 'Berlaku jika kedua sudut menghadap busur yang SAMA.',
      satuan: 'derajat (°)',
    },
    {
      kategori: 'Sudut Pusat & Keliling',
      nama: 'Sudut Keliling Menghadap Diameter',
      rumus: '\\angle \\text{Keliling} = 90^\\circ \\quad (\\text{Selalu siku-siku})',
      keterangan: 'Karena sudut pusat diameter adalah garis lurus 180°, sudut kelilingnya adalah ½ × 180° = 90° (Teorema Thales).',
      satuan: 'derajat (°)',
    },
    {
      kategori: 'Sudut Pusat & Keliling',
      nama: 'Segiempat Tali Busur (Inscribed Quadrilateral)',
      rumus: '\\angle A + \\angle C = 180^\\circ, \\quad \\angle B + \\angle D = 180^\\circ',
      keterangan: 'Jumlah dua sudut yang saling berhadapan pada segiempat tali busur selalu tepat 180°.',
      satuan: 'derajat (°)',
    },
  ];

  const filtered = formulas.filter(
    (f) =>
      f.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.kategori.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.keterangan.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
        <div>
          <h2 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-600" />
            Ensiklopedi & Ringkasan Seluruh Rumus Geometri Lingkaran
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Kompilasi lengkap notasi ilmiah, satuan, kondisi penggunaan, dan pedoman konversi matematika.
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Cari rumus (misal: apotema, busur)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      {/* Critical Guide: π = 22/7 vs 3.14 & Radian vs Derajat */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Guide 1: Pi Choice */}
        <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-4 space-y-2.5">
          <h3 className="text-sm font-bold text-amber-950 flex items-center gap-1.5">
            <Compass className="w-4 h-4 text-amber-700" />
            Pedoman Memilih Nilai π: 22/7 atau 3,14?
          </h3>
          <p className="text-xs text-amber-900 leading-relaxed">
            Bilangan <MathView math="\pi" /> adalah bilangan irasional (<MathView math="\pi \approx 3{,}14159265..." />) yang menyatakan rasio keliling terhadap diameter.
          </p>
          <div className="space-y-1.5 text-xs text-amber-950">
            <div className="flex items-start gap-2 bg-white/70 p-2 rounded-lg border border-amber-200">
              <span className="font-bold text-emerald-700 whitespace-nowrap">Gunakan π = 22/7:</span>
              <span>Ketika jari-jari <MathView math="r" /> atau diameter <MathView math="d" /> merupakan <strong>kelipatan 7</strong> (7, 14, 21, 28, 35, ...) untuk mempermudah penyederhanaan pecahan.</span>
            </div>
            <div className="flex items-start gap-2 bg-white/70 p-2 rounded-lg border border-amber-200">
              <span className="font-bold text-indigo-700 whitespace-nowrap">Gunakan π = 3,14:</span>
              <span>Ketika nilai <MathView math="r" /> atau <MathView math="d" /> <strong>bukan</strong> kelipatan 7 (seperti 10, 20, 5, 8, 12, ...).</span>
            </div>
          </div>
        </div>

        {/* Guide 2: Degree vs Radian */}
        <div className="bg-blue-50/70 border border-blue-200/80 rounded-2xl p-4 space-y-2.5">
          <h3 className="text-sm font-bold text-blue-950 flex items-center gap-1.5">
            <AlertTriangle className="w-4 h-4 text-blue-700" />
            Konsistensi Satuan Sudut: Derajat vs Radian
          </h3>
          <p className="text-xs text-blue-900 leading-relaxed">
            Pada tingkat sekolah, rumus juring ditulis dengan fraksi derajat terhadap lingkaran penuh <MathView math="360^\circ" />:
          </p>
          <div className="bg-white/70 p-2 rounded-lg border border-blue-200 text-xs space-y-1">
            <div>• <MathView math="\text{Derajat ke Radian: } \theta_{\text{rad}} = \theta^\circ \times \frac{\pi}{180^\circ}" /></div>
            <div>• <MathView math="\text{Panjang Busur (Radian): } s = r \times \theta_{\text{rad}}" /></div>
            <div>• <MathView math="\text{Luas Juring (Radian): } L = \frac{1}{2} r^2 \theta_{\text{rad}}" /></div>
          </div>
          <span className="text-[11px] text-blue-700 italic block">
            Catatan kalkulator: Saat menghitung <MathView math="\sin\theta" />, pastikan kalkulator dalam mode Degree (DEG), bukan Radian (RAD)!
          </span>
        </div>
      </div>

      {/* Grid of Formulas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm hover:border-indigo-300 transition-colors flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider block mb-1">
                {item.kategori}
              </span>
              <h4 className="text-sm font-bold text-slate-900 mb-2">{item.nama}</h4>
              <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200/80 my-2">
                <MathView math={item.rumus} block />
              </div>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">{item.keterangan}</p>
            </div>
            <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-mono">
              <span>Satuan:</span>
              <span className="font-semibold text-slate-700">{item.satuan}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
