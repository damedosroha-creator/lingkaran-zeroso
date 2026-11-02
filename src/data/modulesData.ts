/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LearningModule } from '../types/circle';

export const modulesData: LearningModule[] = [
  // ==========================================
  // MODUL 1: PENGERTIAN & UNSUR-UNSUR LINGKARAN
  // ==========================================
  {
    id: 1,
    slug: 'unsur-unsur-lingkaran',
    nomor: '01',
    judul: 'Pengertian & Unsur-Unsur Lingkaran',
    subhead: 'Fondasi geometri lingkaran: titik pusat, jari-jari, diameter, busur, tali busur, juring, tembereng, apotema, dan sudut.',
    level: 'Dasar',
    tujuan: [
      'Memahami definisi formal lingkaran sebagai lokus titik berjarak sama dari titik acuan.',
      'Mengidentifikasi dan membedakan 8 unsur pembentuk lingkaran dengan tepat.',
      'Membedakan daerah (2 dimensi: juring & tembereng) vs garis (1 dimensi: busur, tali busur, apotema, jari-jari).',
    ],
    penjelasanIntuitif:
      'Bayangkan seutas tali yang salah satu ujungnya dipatok kuat di tanah, lalu ujung lainnya diikatkan pada kapur. Saat kamu merentangkan tali hingga tegang dan berputar satu putaran penuh, jejak kapur di tanah itulah yang disebut lingkaran. Titik pasak tanah adalah Titik Pusat (O), dan panjang tali tegang itu adalah Jari-jari (r). Jika kamu menarik garis lurus melintasi titik pusat dari tepi ke tepi, garis itu adalah Diameter (d), yang panjangnya selalu tepat dua kali jari-jari.',
    analogiDuniaNyata:
      'Jarum jam dinding yang berputar dari titik poros di tengah, roda sepeda dengan jeruji sebagai jari-jari, dan pizza utuh yang dipotong dari titik pusat.',
    diagramParams: {
      r: 10,
      theta: 75,
      showChord: true,
      showApothem: true,
      showSector: true,
      showSegment: true,
      showDiameter: true,
      showInscribed: true,
      highlight: 'sector',
    },
    rumusUtama: 'd = 2r \\iff r = \\frac{1}{2}d',
    rumusTambahan: [
      { label: 'Diameter', formula: 'd = 2 \\times r', keterangan: 'Panjang diameter adalah dua kali panjang jari-jari.' },
      { label: 'Definisi Analitis', formula: '(x - a)^2 + (y - b)^2 = r^2', keterangan: 'Persamaan lingkaran berpusat di (a,b) dengan jari-jari r.' },
    ],
    penurunanRumus: {
      judul: 'Penurunan Hubungan Diameter dan Jari-Jari',
      langkah: [
        { teks: 'Pilih titik A sembarang pada keliling lingkaran.' },
        { teks: 'Tarik garis lurus dari A melalui titik pusat O hingga menabrak tepi seberang di titik B.' },
        { teks: 'Jarak AO adalah jari-jari lingkaran (r), dan jarak OB juga adalah jari-jari lingkaran (r).' },
        { teks: 'Karena titik A, O, dan B segaris (kolinier), panjang total AB adalah diameter (d):', formula: 'd = AO + OB = r + r = 2r' },
      ],
      kesimpulan: 'Diameter membagi lingkaran menjadi dua bagian busur setengah lingkaran yang kongruen.',
    },
    keteranganVariabel: [
      { simbol: 'O', nama: 'Titik Pusat', satuan: 'titik koordinat', catatan: 'Titik tetap di tengah yang berjarak sama ke semua titik keliling.' },
      { simbol: 'r', nama: 'Jari-jari (radius)', satuan: 'cm, m', catatan: 'Ruas garis dari titik pusat ke tepi lingkaran.' },
      { simbol: 'd', nama: 'Diameter (garis tengah)', satuan: 'cm, m', catatan: 'Ruas garis lurus yang melewati O dan menghubungkan dua titik tepi.' },
      { simbol: 's', nama: 'Busur (arc)', satuan: 'cm, m', catatan: 'Garis lengkung bagian dari keliling lingkaran.' },
      { simbol: 'c', nama: 'Tali Busur (chord)', satuan: 'cm, m', catatan: 'Ruas garis lurus yang menghubungkan dua titik tepi tanpa harus lewat pusat.' },
      { simbol: 'a', nama: 'Apotema', satuan: 'cm, m', catatan: 'Jarak tegak lurus dari titik pusat ke tali busur.' },
    ],
    tipsPi: 'Pada materi unsur lingkaran, kita berfokus pada sifat spasial dan relasi garis dengan daerah. Pastikan kamu tidak tertukar antara busur (garis lengkung) dengan tali busur (garis lurus).',
    kesalahanUmum: [
      {
        mitos: 'Tali busur harus selalu melewati titik pusat.',
        fakta: 'Tali busur bebas menghubungkan dua titik sembarang. Tali busur yang melewati titik pusat merupakan tali busur terpanjang, yang disebut DIAMETER.',
        tips: 'Ingat: Semua diameter adalah tali busur, tetapi tidak semua tali busur adalah diameter.',
      },
      {
        mitos: 'Juring dan tembereng itu sama.',
        fakta: 'Juring dibatasi oleh DUA JARI-JARI dan satu busur (seperti sepotong pizza). Tembereng dibatasi oleh SATU TALI BUSUR dan satu busurnya (seperti potongan tepi semangka).',
        tips: 'Juring = ada jari-jarinya ke pusat. Tembereng = terpotong oleh garis lurus tali busur.',
      },
    ],
    contohSoal: [
      {
        id: '1-1',
        tingkat: 'Mudah',
        judul: 'Menentukan Jari-Jari dari Diameter Roda Sepeda',
        konteksCerita: 'Sebuah velg sepeda memiliki diameter garis tengah 56 cm.',
        diketahui: [
          { label: 'Diameter (d)', value: '56 cm' },
        ],
        ditanyakan: 'Berapakah panjang jari-jari (r) velg sepeda tersebut?',
        diagramParams: { r: 7, theta: 0, showDiameter: true, showRadius: true, highlight: 'diameter' },
        rumus: 'r = \\frac{d}{2}',
        substitusi: 'r = \\frac{56}{2}',
        langkahPerhitungan: [
          'Gunakan hubungan dasar bahwa panjang jari-jari adalah setengah dari panjang diameter.',
          'Bagi nilai diameter 56 cm dengan 2.',
          'Hasil pembagian adalah 28 cm.',
        ],
        hasilAkhir: 'r = 28',
        satuan: 'cm',
        catatanKritis: 'Pastikan selalu mengecek apakah soal memberikan diameter atau jari-jari sebelum melakukan perhitungan keliling atau luas.',
      },
      {
        id: '1-2',
        tingkat: 'Sedang',
        judul: 'Identifikasi Unsur Pembatas Daerah Kolam Air Mancur',
        konteksCerita: 'Sebuah taman memiliki kolam melingkar. Bagian kolam yang diberi lampu hias dibatasi oleh titik pusat O serta dua buah tiang pancang A dan B di tepi kolam, beserta garis lengkung tepi di antara kedua tiang tersebut.',
        diketahui: [
          { label: 'Pembatas 1', value: 'Ruas garis OA (jari-jari)' },
          { label: 'Pembatas 2', value: 'Ruas garis OB (jari-jari)' },
          { label: 'Pembatas 3', value: 'Garis lengkung AB (busur)' },
        ],
        ditanyakan: 'Apakah nama unsur daerah kolam yang dihiasi lampu tersebut dan sebutkan unsur garis lurus penghubung langsung A ke B?',
        diagramParams: { r: 10, theta: 90, showSector: true, showChord: true, highlight: 'sector' },
        rumus: '\\text{Daerah Juring} = \\text{Dibatasi } OA, OB, \\text{ dan busur } AB',
        substitusi: '\\text{Unsur} = \\text{Juring OAB}, \\quad \\text{Garis lurus AB} = \\text{Tali Busur}',
        langkahPerhitungan: [
          'Analisis komponen pembatas daerah: dua jari-jari (OA dan OB) dan satu busur AB.',
          'Sesuai definisi, daerah yang dibatasi dua jari-jari dan busur adalah JURING (sector).',
          'Garis lurus yang menghubungkan langsung titik tepi A dan B tanpa melewati busur adalah TALI BUSUR (chord).',
        ],
        hasilAkhir: 'Juring dan Tali Busur',
        satuan: 'nama unsur',
        catatanKritis: 'Jika daerah itu hanya dibatasi tali busur AB dan busur AB (tanpa jari-jari ke pusat), maka daerah tersebut adalah Tembereng.',
      },
      {
        id: '1-3',
        tingkat: 'HOTS',
        judul: 'Analisis Panjang Tali Busur Terpanjang dalam Kubah Bangunan',
        konteksCerita: 'Sebuah kubah observatorium langit berbentuk setengah bola dengan alas lingkaran berjari-jari 15 meter. Seorang arsitek ingin memasang balok penyangga lurus terpanjang yang menghubungkan dua titik sembarang pada keliling lantai kubah.',
        diketahui: [
          { label: 'Jari-jari lingkaran alas (r)', value: '15 meter' },
          { label: 'Syarat', value: 'Tali busur lurus dengan panjang maksimum' },
        ],
        ditanyakan: 'Berapakah panjang balok penyangga maksimum tersebut dan melalui manakah balok harus dipasang?',
        diagramParams: { r: 10, theta: 180, showDiameter: true, highlight: 'diameter' },
        rumus: 'c_{\\max} = d = 2r',
        substitusi: 'c_{\\max} = 2 \\times 15',
        langkahPerhitungan: [
          'Berdasarkan teorema geometri lingkaran, jarak lurus terjauh antara dua titik pada lingkaran terjadi ketika segmen garis melewati titik pusat O.',
          'Tali busur terpanjang dari sebuah lingkaran adalah DIAMETERnya.',
          'Kalikan jari-jari r = 15 m dengan 2: 2 × 15 = 30 meter.',
          'Balok harus dipasang tepat melintasi titik pusat lantai observatorium.',
        ],
        hasilAkhir: 'c_{\\max} = 30',
        satuan: 'meter',
        catatanKritis: 'Tali busur yang tidak melewati titik pusat selalu memiliki panjang c < 2r.',
      },
    ],
    latihanMandiri: [
      {
        id: 'lat-1-1',
        pertanyaan: 'Daerah di dalam lingkaran yang dibatasi oleh sebuah tali busur dan busurnya disebut...',
        pilihan: ['A. Juring', 'B. Tembereng', 'C. Apotema', 'D. Sudut Pusat', 'E. Diameter'],
        kunci: 1,
        pembahasan: 'Tembereng adalah daerah yang dibatasi oleh sebuah tali busur dan busur yang bersesuaian, sedangkan juring dibatasi oleh dua jari-jari dan satu busur.',
      },
      {
        id: 'lat-1-2',
        pertanyaan: 'Garis tegak lurus yang menghubungkan titik pusat lingkaran dengan tali busur disebut...',
        pilihan: ['A. Jari-jari', 'B. Diameter', 'C. Apotema', 'D. Busur', 'E. Garis Singgung'],
        kunci: 2,
        pembahasan: 'Apotema adalah ruas garis yang ditarik dari titik pusat lingkaran tegak lurus terhadap tali busur, sekaligus membagi tali busur menjadi dua sama panjang.',
      },
    ],
    narasiSuara:
      'Selamat datang di modul pertama geometri lingkaran. Mari kita pelajari unsur-unsur dasar pembentuk lingkaran. Titik pusat O adalah titik acuan di tengah lingkaran. Jari-jari r adalah jarak dari titik pusat ke tepi keliling. Jika kita perpanjang garis lurus dari tepi ke tepi melewati titik pusat, kita mendapatkan diameter d yang panjangnya tepat dua kali jari-jari. Perhatikan pula bahwa daerah seperti sepotong pizza disebut Juring, sedangkan daerah yang dipotong oleh tali busur lurus disebut Tembereng. Apotema adalah garis tegak lurus dari titik pusat menuju tali busur.',
  },

  // ==========================================
  // MODUL 2: KELILING & LUAS LINGKARAN
  // ==========================================
  {
    id: 2,
    slug: 'keliling-dan-luas-lingkaran',
    nomor: '02',
    judul: 'Keliling & Luas Lingkaran (Asal-Usul Rumus)',
    subhead: 'Memahami rumus K = 2πr = πd dan L = πr², pembuktian dekomposisi juring, dan aplikasi numerik presisi.',
    level: 'Dasar',
    tujuan: [
      'Menghitung keliling lingkaran menggunakan rumus K = 2πr = πd.',
      'Menghitung luas lingkaran menggunakan rumus L = πr² = ¼πd².',
      'Memahami pembuktian asal-usul rumus luas lingkaran melalui pendekatan jajar genjang / persegi panjang.',
      'Memilih nilai pendekatan π yang paling efisien (22/7 vs 3,14).',
    ],
    penjelasanIntuitif:
      'Keliling adalah panjang lintasan jika kamu berjalan tepat satu putaran mengelilingi tepi lingkaran. Jika kamu mengukur keliling lingkaran apa saja di alam semesta, lalu membaginya dengan diameternya, perbandingannya SELALU menghasilkan bilangan istimewa yang sama: 3,14159... atau dilambangkan dengan huruf Yunani π (pi). Dari fakta inilah lahir rumus Keliling K = π × d = 2πr. Sementara untuk luas, jika lingkaran diiris-iris menjadi 16 juring kecil lalu disusun berselang-seling, irisannya akan membentuk persegi panjang dengan panjang alas πr dan tinggi r, sehingga Luas = πr × r = πr²!',
    analogiDuniaNyata:
      'Menghitung panjang pagar kawat untuk mengelilingi taman melingkar (Keliling), dan menghitung jumlah rumput atau keramik untuk menutupi seluruh lantai bundar (Luas).',
    diagramParams: {
      r: 10,
      theta: 360,
      showRadius: true,
      showDiameter: true,
      highlight: 'radius',
    },
    rumusUtama: 'K = 2\\pi r = \\pi d, \\quad L = \\pi r^2 = \\frac{1}{4}\\pi d^2',
    penurunanRumus: {
      judul: 'Penurunan Rumus Luas L = πr² via Dekomposisi Sektor',
      langkah: [
        { teks: 'Bagi lingkaran berjari-jari r menjadi n juring sama besar (misal n = 16).' },
        { teks: 'Susun juring-juring tersebut secara berselang-seling menghadap ke atas dan ke bawah.' },
        { teks: 'Bangun yang terbentuk mendekati jajar genjang dengan tinggi h = r.' },
        { teks: 'Alas bawah terdiri dari 8 busur juring (setengah dari keliling total):', formula: '\\text{Alas } (a) = \\frac{1}{2} \\times K = \\frac{1}{2}(2\\pi r) = \\pi r' },
        { teks: 'Luas jajar genjang adalah alas dikali tinggi:', formula: 'L = a \\times h = (\\pi r) \\times r = \\pi r^2' },
      ],
      kesimpulan: 'Ketika n mendekati tak hingga, bentuk bangun menjadi persegi panjang sempurna dengan Luas = πr².',
    },
    keteranganVariabel: [
      { simbol: 'K', nama: 'Keliling Lingkaran', satuan: 'cm, m', catatan: 'Panjang 1 putaran penuh lintasan tepi lingkaran.' },
      { simbol: 'L', nama: 'Luas Lingkaran', satuan: 'cm², m²', catatan: 'Besar permukaan bidang datar yang dilingkupi.' },
      { simbol: 'r', nama: 'Jari-jari', satuan: 'cm, m', catatan: 'Setengah dari diameter (r = d/2).' },
      { simbol: 'd', nama: 'Diameter', satuan: 'cm, m', catatan: 'Dua kali jari-jari (d = 2r).' },
      { simbol: '\\pi', nama: 'Bilangan Pi', satuan: 'tanpa satuan (konstanta)', catatan: 'Rasio K / d, bernilai sekitar 3,14159 atau 22/7.' },
    ],
    tipsPi:
      'Gunakan π = 22/7 jika r atau d kelipatan 7 (misal 7, 14, 21, 28, 35, 42). Gunakan π = 3,14 jika r atau d BUKAN kelipatan 7 (misal 10, 20, 15, 8). Ini mempermudah perhitungan manual tanpa desimal rumit.',
    kesalahanUmum: [
      {
        mitos: 'Menghitung luas dengan mengalikan diameter: L = πd².',
        fakta: 'Rumus luas adalah L = πr². Jika menggunakan diameter, rumusnya adalah ¼πd² karena r = d/2, sehingga r² = (d/2)² = d²/4.',
        tips: 'Selalu ubah diameter menjadi jari-jari terlebih dahulu: r = d / 2 sebelum menghitung luas.',
      },
      {
        mitos: 'Satuan keliling menggunakan kuadrat (misal cm²).',
        fakta: 'Keliling adalah ukuran panjang satu dimensi (cm, m). Luas adalah ukuran dua dimensi (cm², m²).',
        tips: 'Ingat: Keliling = panjang lintasan pagar (meter), Luas = lantai keramik (meter persegi).',
      },
    ],
    contohSoal: [
      {
        id: '2-1',
        tingkat: 'Mudah',
        judul: 'Menghitung Keliling dan Luas Meja Makan Bundar',
        konteksCerita: 'Sebuah permukaan meja makan bundar memiliki jari-jari r = 14 cm.',
        diketahui: [
          { label: 'Jari-jari (r)', value: '14 cm (kelipatan 7)' },
          { label: 'Nilai π', value: '22/7' },
        ],
        ditanyakan: 'Berapakah keliling (K) dan luas (L) permukaan meja tersebut?',
        diagramParams: { r: 14, theta: 360, showRadius: true, highlight: 'radius' },
        rumus: 'K = 2\\pi r, \\quad L = \\pi r^2',
        substitusi: 'K = 2 \\times \\frac{22}{7} \\times 14, \\quad L = \\frac{22}{7} \\times 14^2',
        langkahPerhitungan: [
          'Keliling: K = 2 × (22/7) × 14 = 2 × 22 × 2 = 88 cm.',
          'Luas: L = (22/7) × 14 × 14 = 22 × 2 × 14 = 44 × 14 = 616 cm².',
        ],
        hasilAkhir: 'K = 88\\text{ cm}, \\quad L = 616\\text{ cm}^2',
        satuan: 'cm dan cm²',
        catatanKritis: 'Karena 14 adalah kelipatan 7, pembagian dengan 7 menghasilkan bilangan bulat 2 sehingga perhitungan sangat efisien.',
      },
      {
        id: '2-2',
        tingkat: 'Sedang',
        judul: 'Menentukan Banyak Putaran Roda Gerobak',
        konteksCerita: 'Roda gerobak berdiameter 70 cm berputar melintasi jalan lurus sejauh 220 meter dari gudang ke pasar.',
        diketahui: [
          { label: 'Diameter roda (d)', value: '70 cm = 0,7 m' },
          { label: 'Jarak tempuh (s)', value: '220 meter = 22.000 cm' },
          { label: 'Nilai π', value: '22/7' },
        ],
        ditanyakan: 'Berapa kali roda gerobak tersebut berputar penuh selama perjalanan?',
        diagramParams: { r: 7, theta: 360, showDiameter: true, highlight: 'diameter' },
        rumus: 'K = \\pi d, \\quad n = \\frac{\\text{Jarak Tempuh}}{K}',
        substitusi: 'K = \\frac{22}{7} \\times 70 = 220\\text{ cm}, \\quad n = \\frac{22.000}{220}',
        langkahPerhitungan: [
          'Satu putaran penuh roda menempuh jarak sama dengan satu keliling lingkaran roda.',
          'Hitung keliling roda: K = πd = (22/7) × 70 cm = 220 cm = 2,2 meter.',
          'Hitung banyak putaran: n = Jarak Total / Keliling = 22.000 cm / 220 cm = 100 putaran.',
        ],
        hasilAkhir: 'n = 100',
        satuan: 'putaran',
        catatanKritis: 'Selalu samakan satuan jarak tempuh dan keliling sebelum melakukan pembagian (keduanya dalam cm atau keduanya dalam meter).',
      },
      {
        id: '2-3',
        tingkat: 'HOTS',
        judul: 'Luas Jalur Lari Melingkar di Sekeliling Kolam (Cincin Lingkaran)',
        konteksCerita: 'Sebuah taman kota memiliki kolam melingkar berdiameter 20 meter. Di sekeliling luar kolam dibuat jalur jalan setapak selebar 2 meter.',
        diketahui: [
          { label: 'Diameter kolam dalam (d_1)', value: '20 m, sehingga r_1 = 10 m' },
          { label: 'Lebar jalan setapak (w)', value: '2 m' },
          { label: 'Jari-jari lingkaran luar (r_2)', value: '10 m + 2 m = 12 m' },
          { label: 'Nilai π', value: '3,14' },
        ],
        ditanyakan: 'Berapakah luas hamparan paving blok untuk jalur jalan setapak tersebut?',
        diagramParams: { r: 12, theta: 360, showRadius: true, highlight: 'sector' },
        rumus: 'L_{\\text{jalur}} = L_{\\text{luar}} - L_{\\text{dalam}} = \\pi (r_2^2 - r_1^2)',
        substitusi: 'L_{\\text{jalur}} = 3{,}14 \\times (12^2 - 10^2) = 3{,}14 \\times (144 - 100)',
        langkahPerhitungan: [
          'Jari-jari kolam dalam: r_1 = 20 / 2 = 10 meter.',
          'Jari-jari total sampai tepi luar jalan: r_2 = 10 + 2 = 12 meter.',
          'Luas jalur jalan adalah selisih luas lingkaran besar dengan lingkaran kecil: L = π(r_2² - r_1²).',
          'Hitung selisih kuadrat: 12² - 10² = 144 - 100 = 44 m².',
          'Kalikan dengan π = 3,14: L = 3,14 × 44 = 138,16 m².',
        ],
        hasilAkhir: 'L = 138{,}16',
        satuan: 'm²',
        catatanKritis: 'Jangan mengalikan luas dengan mengurangkan jari-jarinya lalu dikuadratkan: (r_2 - r_1)² = 2² = 4 adalah KELIRU. Rumus yang benar adalah r_2² - r_1²!',
      },
    ],
    latihanMandiri: [
      {
        id: 'lat-2-1',
        pertanyaan: 'Sebuah piring berjari-jari 10 cm. Menggunakan π = 3,14, luas piring tersebut adalah...',
        pilihan: ['A. 31,4 cm²', 'B. 62,8 cm²', 'C. 314 cm²', 'D. 628 cm²', 'E. 3.140 cm²'],
        kunci: 2,
        pembahasan: 'Luas L = π × r² = 3,14 × 10² = 3,14 × 100 = 314 cm².',
      },
      {
        id: 'lat-2-2',
        pertanyaan: 'Sebuah lingkaran memiliki keliling 44 cm. Jika π = 22/7, maka diameter lingkaran tersebut adalah...',
        pilihan: ['A. 7 cm', 'B. 14 cm', 'C. 21 cm', 'D. 28 cm', 'E. 35 cm'],
        kunci: 1,
        pembahasan: 'K = π × d => 44 = (22/7) × d => d = 44 × (7/22) = 2 × 7 = 14 cm.',
      },
    ],
    narasiSuara:
      'Pada modul kedua, kita mempelajari keliling dan luas lingkaran. Keliling adalah panjang garis tepi satu putaran, dengan rumus 2 kali pi kali r, atau pi kali diameter. Luas lingkaran adalah luas daerah di dalamnya, dirumuskan pi kali r kuadrat. Asal-usul rumus luas dapat dibuktikan dengan memotong lingkaran menjadi 16 juring, lalu menyusunnya menjadi persegi panjang dengan panjang alas pi kali r dan tinggi r. Gunakan nilai pi 22 per 7 jika jari-jari kelipatan 7, dan gunakan 3 koma 14 jika bukan kelipatan 7.',
  },

  // ==========================================
  // MODUL 3: LUAS JURING LINGKARAN
  // ==========================================
  {
    id: 3,
    slug: 'luas-juring-lingkaran',
    nomor: '03',
    judul: 'Luas Juring Lingkaran',
    subhead: 'Memahami hubungan proporsional antara sudut pusat θ terhadap lingkaran penuh 360° dan luas daerah juring.',
    level: 'Menengah',
    tujuan: [
      'Menghubungkan rasio sudut pusat terhadap 360° dengan rasio luas juring terhadap luas lingkaran total.',
      'Menghitung luas juring lingkaran dengan rumus L = (θ/360°) × πr².',
      'Menyelesaikan soal kontekstual perbandingan sudut dan luas potongan pizza atau kue.',
    ],
    penjelasanIntuitif:
      'Satu lingkaran penuh memiliki sudut pusat 360°. Jika kamu memotong pizza tepat menjadi 4 potong sama besar, masing-masing potong memiliki sudut pusat 90°. Luas satu potong pizza itu tentu tepat seperempat (90°/360° = 1/4) dari luas pizza utuh! Begitu pula jika sudut pusatnya θ derajat, luas juring adalah pecahan θ/360° dari luas lingkaran total. Hubungan ini berlaku lurus secara proporsional.',
    analogiDuniaNyata:
      'Sepotong pizza, sepotong kue bolu ulang tahun, atau sektor sensor radar kapal yang memindai sudut tertentu.',
    diagramParams: {
      r: 10,
      theta: 60,
      showSector: true,
      showRadius: true,
      highlight: 'sector',
    },
    rumusUtama: 'L_{\\text{juring}} = \\frac{\\theta}{360^\\circ} \\times \\pi r^2',
    rumusTambahan: [
      { label: 'Perbandingan Dua Juring', formula: '\\frac{L_1}{L_2} = \\frac{\\theta_1}{\\theta_2}', keterangan: 'Rasio luas dua juring pada lingkaran yang sama sebanding dengan rasio sudut pusatnya.' },
      { label: 'Hubungan dengan Busur', formula: 'L_{\\text{juring}} = \\frac{1}{2} \\times s \\times r', keterangan: 'Luas juring sama dengan setengah kali panjang busur dikali jari-jari.' },
    ],
    penurunanRumus: {
      judul: 'Penurunan Rumus Luas Juring via Proporsi Sudut',
      langkah: [
        { teks: 'Lingkaran penuh memiliki sudut pusat total 360° dan luas total L = πr².' },
        { teks: 'Karena luas daerah bertambah secara berbanding lurus dengan sudut pusat, buat persamaan proporsi:', formula: '\\frac{L_{\\text{juring}}}{L_{\\text{lingkaran}}} = \\frac{\\theta}{360^\\circ}' },
        { teks: 'Kalikan kedua ruas dengan luas lingkaran total (πr²):', formula: 'L_{\\text{juring}} = \\frac{\\theta}{360^\\circ} \\times \\pi r^2' },
      ],
      kesimpulan: 'Luas juring adalah bagian fraksional θ/360° dari luas lingkaran utuh.',
    },
    keteranganVariabel: [
      { simbol: 'L_{\\text{juring}}', nama: 'Luas Juring', satuan: 'cm², m²', catatan: 'Luas daerah yang dibatasi dua jari-jari dan busur.' },
      { simbol: '\\theta', nama: 'Sudut Pusat', satuan: 'derajat (°)', catatan: 'Sudut yang dibentuk oleh dua jari-jari di titik pusat O.' },
      { simbol: 'r', nama: 'Jari-jari', satuan: 'cm, m', catatan: 'Panjang jari-jari lingkaran.' },
    ],
    tipsPi:
      'Sederhanakan terlebih dahulu pecahan sudut θ/360° menjadi bentuk paling sederhana (misal 60°/360° = 1/6, 90°/360° = 1/4, 120°/360° = 1/3) sebelum mengalikan dengan π dan r².',
    kesalahanUmum: [
      {
        mitos: 'Membagi sudut pusat dengan 180° bukannya 360°.',
        fakta: 'Lingkaran penuh adalah 360°, bukan 180°. Pembagi 180° hanya berlaku jika membandingkan dengan setengah lingkaran.',
        tips: 'Penyebut dalam rumus juring selalu 360° untuk sudut dalam satuan derajat.',
      },
    ],
    contohSoal: [
      {
        id: '3-1',
        tingkat: 'Mudah',
        judul: 'Menghitung Luas Sepotong Pizza',
        konteksCerita: 'Sebuah pizza berdiameter 28 cm dipotong menjadi 6 juring sama besar.',
        diketahui: [
          { label: 'Diameter (d)', value: '28 cm, sehingga r = 14 cm' },
          { label: 'Banyak potongan sama besar', value: '6 potong' },
          { label: 'Sudut tiap potongan (θ)', value: '360° / 6 = 60°' },
          { label: 'Nilai π', value: '22/7' },
        ],
        ditanyakan: 'Berapakah luas satu potong pizza tersebut?',
        diagramParams: { r: 14, theta: 60, showSector: true, highlight: 'sector' },
        rumus: 'L_{\\text{juring}} = \\frac{\\theta}{360^\\circ} \\times \\pi r^2',
        substitusi: 'L = \\frac{60^\\circ}{360^\\circ} \\times \\frac{22}{7} \\times 14^2',
        langkahPerhitungan: [
          'Sederhanakan pecahan sudut: 60° / 360° = 1/6.',
          'Hitung luas lingkaran total: L_total = (22/7) × 14 × 14 = 616 cm².',
          'Kalikan dengan pecahan juring: L = (1/6) × 616 = 102,67 cm².',
        ],
        hasilAkhir: 'L_{\\text{juring}} = 102{,}67',
        satuan: 'cm²',
        catatanKritis: 'Memotong menjadi 6 bagian sama besar langsung berarti membagi luas total dengan 6: 616 / 6 = 102,67 cm².',
      },
      {
        id: '3-2',
        tingkat: 'Sedang',
        judul: 'Perbandingan Luas Dua Juring Berbeda Sudut Pusat',
        konteksCerita: 'Pada sebuah lingkaran yang sama berpusat di O, juring AOB memiliki sudut pusat 40° dan luas 24 cm². Juring kedua COD memiliki sudut pusat 100°.',
        diketahui: [
          { label: 'Sudut juring 1 (θ_1)', value: '40°' },
          { label: 'Luas juring 1 (L_1)', value: '24 cm²' },
          { label: 'Sudut juring 2 (θ_2)', value: '100°' },
        ],
        ditanyakan: 'Berapakah luas juring COD (L_2)?',
        diagramParams: { r: 10, theta: 100, showSector: true, highlight: 'sector' },
        rumus: '\\frac{L_1}{L_2} = \\frac{\\theta_1}{\\theta_2}',
        substitusi: '\\frac{24}{L_2} = \\frac{40^\\circ}{100^\\circ}',
        langkahPerhitungan: [
          'Gunakan perbandingan senilai karena kedua juring berada pada lingkaran yang sama (jari-jarinya identik).',
          'Sederhanakan perbandingan sudut: 40 / 100 = 2 / 5.',
          'Lakukan perkalian silang: 2 × L_2 = 24 × 5 = 120.',
          'Maka L_2 = 120 / 2 = 60 cm².',
        ],
        hasilAkhir: 'L_2 = 60',
        satuan: 'cm²',
        catatanKritis: 'Kita tidak perlu mencari berapa panjang jari-jari r lingkaran terlebih dahulu; perbandingan langsung menghemat waktu ujian.',
      },
      {
        id: '3-3',
        tingkat: 'HOTS',
        judul: 'Efisiensi Area Semprotan Sprinkler Taman',
        konteksCerita: 'Alat penyiram rumput otomatis dapat menjangkau semprotan air hingga radius 7 meter dengan sudut putar bolak-balik 135°. Di sampingnya terdapat dinding beton sehingga air yang mengenai rumput hanya membentuk juring.',
        diketahui: [
          { label: 'Jari-jari semprotan (r)', value: '7 meter' },
          { label: 'Sudut cakupan (θ)', value: '135°' },
          { label: 'Nilai π', value: '22/7' },
        ],
        ditanyakan: 'Berapakah luas area rumput yang berhasil dibasahi oleh sprinkler tersebut?',
        diagramParams: { r: 7, theta: 135, showSector: true, highlight: 'sector' },
        rumus: 'L = \\frac{\\theta}{360^\\circ} \\times \\pi r^2',
        substitusi: 'L = \\frac{135}{360} \\times \\frac{22}{7} \\times 7^2',
        langkahPerhitungan: [
          'Sederhanakan pecahan 135 / 360 dengan membagi pembilang dan penyebut dengan 45: 135 / 360 = 3 / 8.',
          'Hitung luas lingkaran penuh: (22/7) × 7 × 7 = 154 m².',
          'Hitung luas juring: L = (3/8) × 154 = 462 / 8 = 57,75 m².',
        ],
        hasilAkhir: 'L = 57{,}75',
        satuan: 'm²',
        catatanKritis: 'Menyederhanakan pecahan 135/360 menjadi 3/8 di awal mencegah angka perhitungan menjadi terlalu besar.',
      },
    ],
    latihanMandiri: [
      {
        id: 'lat-3-1',
        pertanyaan: 'Sebuah juring memiliki sudut pusat 90° pada lingkaran berjari-jari 14 cm. Luas juring tersebut adalah... (gunakan π = 22/7)',
        pilihan: ['A. 77 cm²', 'B. 154 cm²', 'C. 308 cm²', 'D. 616 cm²', 'E. 44 cm²'],
        kunci: 1,
        pembahasan: 'Sudut 90° adalah seperempat lingkaran (90/360 = 1/4). Luas lingkaran penuh = (22/7) × 14² = 616 cm². Maka luas juring = 1/4 × 616 = 154 cm².',
      },
      {
        id: 'lat-3-2',
        pertanyaan: 'Jika luas juring lingkaran dengan sudut pusat 45° adalah 20 cm², maka luas juring pada lingkaran yang sama dengan sudut pusat 180° adalah...',
        pilihan: ['A. 40 cm²', 'B. 60 cm²', 'C. 80 cm²', 'D. 90 cm²', 'E. 100 cm²'],
        kunci: 2,
        pembahasan: 'Perbandingan sudut: 180° / 45° = 4 kali lipat. Maka luas juring juga menjadi 4 × 20 cm² = 80 cm².',
      },
    ],
    narasiSuara:
      'Pada modul ketiga, kita mempelajari luas juring. Juring adalah bagian dari luas lingkaran yang dibatasi oleh dua jari-jari dan satu busur. Karena satu lingkaran penuh memiliki sudut 360 derajat, maka luas juring merupakan pecahan teta per 360 derajat dikalikan luas lingkaran total pi kali r kuadrat. Contohnya, jika sudut pusatnya 90 derajat, luas juringnya tepat seperempat dari luas lingkaran penuh.',
  },

  // ==========================================
  // MODUL 4: PANJANG BUSUR LINGKARAN
  // ==========================================
  {
    id: 4,
    slug: 'panjang-busur-lingkaran',
    nomor: '04',
    judul: 'Panjang Busur Lingkaran',
    subhead: 'Memahami rumus s = (θ/360°) × 2πr dan kaitan garis lengkung busur dengan keliling lingkaran penuh.',
    level: 'Menengah',
    tujuan: [
      'Menghitung panjang busur lingkaran dengan rumus s = (θ/360°) × 2πr.',
      'Memahami bahwa panjang busur adalah ukuran panjang (satu dimensi), bukan derajat sudut.',
      'Menyelesaikan soal lintasan gerak lengkung dan busur panah.',
    ],
    penjelasanIntuitif:
      'Jika luas juring adalah pecahan dari luas total lingkaran, maka panjang busur adalah pecahan dari keliling lingkaran total! Busur adalah garis lengkung di tepi lingkaran. Bayangkan kamu merentangkan meteran kain di sepanjang garis lengkung antara titik A dan B. Panjang meteran kain tersebut adalah s = (θ/360°) × Keliling Lingkaran = (θ/360°) × 2πr.',
    analogiDuniaNyata:
      'Lintasan lengkung rel kereta yang membelok, busur panah tradisional, atau jarak tempuh sudut mobil di bundaran jalan.',
    diagramParams: {
      r: 10,
      theta: 60,
      showArc: true,
      showRadius: true,
      highlight: 'arc',
    },
    rumusUtama: 's = \\frac{\\theta}{360^\\circ} \\times 2\\pi r = \\frac{\\theta}{360^\\circ} \\times \\pi d',
    penurunanRumus: {
      judul: 'Penurunan Rumus Panjang Busur via Proporsi Keliling',
      langkah: [
        { teks: 'Satu putaran keliling penuh memiliki sudut 360° dengan panjang keliling K = 2πr.' },
        { teks: 'Panjang busur s sebanding lurus dengan besar sudut pusat θ:', formula: '\\frac{s}{K} = \\frac{\\theta}{360^\\circ}' },
        { teks: 'Kalikan kedua ruas dengan keliling total K = 2πr:', formula: 's = \\frac{\\theta}{360^\\circ} \\times 2\\pi r' },
      ],
      kesimpulan: 'Panjang busur adalah fraksi dari keliling lingkaran total.',
    },
    keteranganVariabel: [
      { simbol: 's', nama: 'Panjang Busur (arc length)', satuan: 'cm, m', catatan: 'Panjang garis lengkung AB.' },
      { simbol: '\\theta', nama: 'Sudut Pusat', satuan: 'derajat (°)', catatan: 'Sudut yang menghadap busur tersebut.' },
      { simbol: 'K', nama: 'Keliling Lingkaran', satuan: 'cm, m', catatan: '2πr atau πd.' },
    ],
    tipsPi:
      'Perhatikan perbedaan: Besar busur dalam derajat sama dengan sudut pusat (misal busur 60°), tetapi PANJANG busur adalah ukuran jarak metrik dalam cm atau meter.',
    kesalahanUmum: [
      {
        mitos: 'Menggunakan rumus luas πr² saat mencari panjang busur.',
        fakta: 'Busur adalah bagian dari keliling (garis 1D), jadi harus dikalikan dengan KELILING 2πr, BUKAN luas πr².',
        tips: 'Ingat: Luas Juring -> πr². Panjang Busur -> 2πr.',
      },
    ],
    contohSoal: [
      {
        id: '4-1',
        tingkat: 'Mudah',
        judul: 'Menghitung Panjang Busur Sudut 60°',
        konteksCerita: 'Sebuah roda sepeda berjari-jari 21 cm memiliki dua jeruji yang membentuk sudut 60°.',
        diketahui: [
          { label: 'Jari-jari (r)', value: '21 cm (kelipatan 7)' },
          { label: 'Sudut pusat (θ)', value: '60°' },
          { label: 'Nilai π', value: '22/7' },
        ],
        ditanyakan: 'Berapakah panjang busur tepi roda di antara kedua jeruji tersebut?',
        diagramParams: { r: 21, theta: 60, showArc: true, highlight: 'arc' },
        rumus: 's = \\frac{\\theta}{360^\\circ} \\times 2\\pi r',
        substitusi: 's = \\frac{60}{360} \\times 2 \\times \\frac{22}{7} \\times 21',
        langkahPerhitungan: [
          'Sederhanakan pecahan sudut: 60 / 360 = 1/6.',
          'Hitung keliling lingkaran penuh: K = 2 × (22/7) × 21 = 2 × 22 × 3 = 132 cm.',
          'Hitung panjang busur: s = (1/6) × 132 = 22 cm.',
        ],
        hasilAkhir: 's = 22',
        satuan: 'cm',
        catatanKritis: 'Karena 21 habis dibagi 7 menghasilkan 3, perhitungan menjadi sangat sederhana.',
      },
      {
        id: '4-2',
        tingkat: 'Sedang',
        judul: 'Mencari Besar Sudut Pusat dari Panjang Busur',
        konteksCerita: 'Sebuah lintasan lari melingkar memiliki keliling 400 meter. Seorang pelari menempuh lintasan lengkung sepanjang 50 meter.',
        diketahui: [
          { label: 'Keliling total (K)', value: '400 meter' },
          { label: 'Panjang busur lintasan (s)', value: '50 meter' },
        ],
        ditanyakan: 'Berapakah besar sudut pusat θ yang telah dilalui pelari tersebut?',
        diagramParams: { r: 10, theta: 45, showArc: true, highlight: 'arc' },
        rumus: '\\frac{\\theta}{360^\\circ} = \\frac{s}{K} \\implies \\theta = \\frac{s}{K} \\times 360^\\circ',
        substitusi: '\\theta = \\frac{50}{400} \\times 360^\\circ',
        langkahPerhitungan: [
          'Sederhanakan rasio panjang busur terhadap keliling: 50 / 400 = 1/8.',
          'Kalikan dengan sudut lingkaran penuh 360°:',
          'θ = (1/8) × 360° = 45°.',
        ],
        hasilAkhir: '\\theta = 45',
        satuan: 'derajat (°)',
        catatanKritis: 'Ketika keliling sudah diketahui secara langsung, kita tidak perlu mencari jari-jari r terlebih dahulu.',
      },
      {
        id: '4-3',
        tingkat: 'HOTS',
        judul: 'Keliling Total Bangun Gabungan Juring Lingkaran',
        konteksCerita: 'Sebuah kipas lipat berbentuk juring lingkaran dengan sudut bukaan 120° dan panjang bilah jari-jari 21 cm. Kipas tersebut diberi pita renda di seluruh tepinya.',
        diketahui: [
          { label: 'Jari-jari bilah (r)', value: '21 cm' },
          { label: 'Sudut juring (θ)', value: '120°' },
          { label: 'Nilai π', value: '22/7' },
        ],
        ditanyakan: 'Berapakah panjang total pita renda yang diperlukan untuk mengelilingi seluruh tepi kipas tersebut?',
        diagramParams: { r: 21, theta: 120, showSector: true, showRadius: true, showArc: true, highlight: 'arc' },
        rumus: 'K_{\\text{juring}} = s + 2r = \\left(\\frac{\\theta}{360^\\circ} \\times 2\\pi r\\right) + 2r',
        substitusi: 'K_{\\text{juring}} = \\left(\\frac{120}{360} \\times 2 \\times \\frac{22}{7} \\times 21\\right) + 2(21)',
        langkahPerhitungan: [
          'Hati-hati! Keliling juring BUKAN HANYA panjang busur, tetapi juga mencakup dua sisi jari-jari lurusnya!',
          'Hitung panjang busur s: (1/3) × 132 = 44 cm.',
          'Hitung panjang dua jari-jari: 2 × r = 2 × 21 = 42 cm.',
          'Jumlahkan keduanya: K_total = 44 + 42 = 86 cm.',
        ],
        hasilAkhir: 'K_{\\text{juring}} = 86',
        satuan: 'cm',
        catatanKritis: 'Jebakan paling sering: siswa hanya menghitung panjang busur s dan lupa menambahkan 2r untuk mendapatkan keliling juring utuh.',
      },
    ],
    latihanMandiri: [
      {
        id: 'lat-4-1',
        pertanyaan: 'Panjang busur lingkaran dengan sudut pusat 90° dan jari-jari 7 cm adalah... (π = 22/7)',
        pilihan: ['A. 11 cm', 'B. 22 cm', 'C. 44 cm', 'D. 77 cm', 'E. 88 cm'],
        kunci: 0,
        pembahasan: 'Keliling lingkaran K = 2 × (22/7) × 7 = 44 cm. Panjang busur = (90/360) × 44 = 1/4 × 44 = 11 cm.',
      },
      {
        id: 'lat-4-2',
        pertanyaan: 'Pada lingkaran yang sama, panjang busur dengan sudut pusat 30° adalah 6 cm. Panjang busur dengan sudut pusat 150° adalah...',
        pilihan: ['A. 15 cm', 'B. 24 cm', 'C. 30 cm', 'D. 36 cm', 'E. 45 cm'],
        kunci: 2,
        pembahasan: 'Perbandingan sudut: 150° / 30° = 5. Maka panjang busur = 5 × 6 cm = 30 cm.',
      },
    ],
    narasiSuara:
      'Pada modul keempat, kita mempelajari panjang busur lingkaran. Busur adalah garis lengkung di tepi lingkaran. Rumus panjang busur adalah teta per 360 derajat dikalikan keliling lingkaran 2 pi r. Ingat bahwa busur adalah ukuran panjang dalam sentimeter atau meter, bukan derajat. Jika kamu diminta mencari keliling juring, jangan lupa menjumlahkan panjang busur dengan dua kali jari-jarinya.',
  },

  // ==========================================
  // MODUL 5: PANJANG TALI BUSUR
  // ==========================================
  {
    id: 5,
    slug: 'panjang-tali-busur',
    nomor: '05',
    judul: 'Panjang Tali Busur (c = 2r sin(θ/2))',
    subhead: 'Menghitung panjang garis lurus tali busur menggunakan segitiga sama kaki dan trigonometri sudut paruh.',
    level: 'Menengah',
    tujuan: [
      'Menghubungkan tali busur dengan segitiga sama kaki yang dibentuk oleh dua jari-jari OA dan OB.',
      'Menurunkan dan mengaplikasikan rumus c = 2r sin(θ/2).',
      'Memahami kasus khusus sudut istimewa (θ = 60° -> c = r; θ = 90° -> c = r√2; θ = 180° -> c = 2r).',
    ],
    penjelasanIntuitif:
      'Jika busur adalah lintasan melengkung di tepi lingkaran, maka tali busur adalah jalan pintas garis lurus dari titik A ke titik B. Titik pusat O dan kedua ujung tali busur A dan B membentuk sebuah segitiga sama kaki yang istimewa: sisi OA = r, sisi OB = r, dan sudut apitnya adalah θ. Jika kita membelah segitiga ini menjadi dua segitiga siku-siku tepat di tengah-tengahnya, masing-masing setengah tali busur memiliki panjang r sin(θ/2). Karena tali busur utuh terdiri dari dua bagian tersebut, maka panjang tali busur adalah c = 2r sin(θ/2).',
    analogiDuniaNyata:
      'Tali senar pada busur panah tradisional, jembatan gantung lurus yang melintasi teluk melingkar, atau bentangan kabel lurus penahan.',
    diagramParams: {
      r: 10,
      theta: 90,
      showChord: true,
      showRadius: true,
      highlight: 'chord',
    },
    rumusUtama: 'c = 2r \\sin\\left(\\frac{\\theta}{2}\\right)',
    rumusTambahan: [
      { label: 'Sudut θ = 60° (Segitiga Sama Sisi)', formula: 'c = 2r \\sin(30^\\circ) = 2r(0{,}5) = r', keterangan: 'Panjang tali busur tepat sama dengan panjang jari-jari.' },
      { label: 'Sudut θ = 90° (Segitiga Siku-Siku)', formula: 'c = \\sqrt{r^2 + r^2} = r\\sqrt{2}', keterangan: 'Berasal langsung dari Teorema Pythagoras.' },
      { label: 'Sudut θ = 180° (Diameter)', formula: 'c = 2r \\sin(90^\\circ) = 2r(1) = 2r', keterangan: 'Tali busur terpanjang sama dengan diameter lingkaran.' },
    ],
    penurunanRumus: {
      judul: 'Penurunan Rumus c = 2r sin(θ/2) via Sudut Paruh',
      langkah: [
        { teks: 'Perhatikan segitiga sama kaki ΔOAB dengan sisi OA = OB = r dan sudut ∠AOB = θ.' },
        { teks: 'Tarik garis tinggi OM dari titik O tegak lurus ke tali busur AB di titik M.' },
        { teks: 'Garis OM membagi sudut θ menjadi dua sama besar, yaitu θ/2, dan membagi tali busur AB menjadi dua bagian sama panjang: AM = MB = c/2.' },
        { teks: 'Pada segitiga siku-siku ΔOMA, perbandingan sinus sudut paruh adalah:', formula: '\\sin\\left(\\frac{\\theta}{2}\\right) = \\frac{\\text{sisi depan}}{\\text{sisi miring}} = \\frac{AM}{OA} = \\frac{c/2}{r}' },
        { teks: 'Kalikan kedua ruas dengan r:', formula: '\\frac{c}{2} = r \\sin\\left(\\frac{\\theta}{2}\\right)' },
        { teks: 'Kalikan kedua ruas dengan 2 untuk mendapatkan panjang tali busur penuh c:', formula: 'c = 2r \\sin\\left(\\frac{\\theta}{2}\\right)' },
      ],
      kesimpulan: 'Panjang tali busur selalu sebanding dengan dua kali jari-jari dikalikan sinus setengah sudut pusat.',
    },
    keteranganVariabel: [
      { simbol: 'c', nama: 'Panjang Tali Busur (chord)', satuan: 'cm, m', catatan: 'Ruas garis lurus AB.' },
      { simbol: 'r', nama: 'Jari-jari lingkaran', satuan: 'cm, m', catatan: 'Panjang sisi kaki segitiga sama kaki.' },
      { simbol: '\\theta', nama: 'Sudut Pusat', satuan: 'derajat (°)', catatan: 'Sudut apit di titik pusat O.' },
      { simbol: '\\theta/2', nama: 'Sudut Paruh', satuan: 'derajat (°)', catatan: 'Setengah dari sudut pusat.' },
    ],
    tipsPi:
      'Gunakan nilai sinus sudut istimewa: sin(30°) = 0,5; sin(45°) = ½√2 ≈ 0,707; sin(60°) = ½√3 ≈ 0,866; sin(90°) = 1.',
    kesalahanUmum: [
      {
        mitos: 'Menganggap panjang busur sama dengan panjang tali busur.',
        fakta: 'Garis lurus adalah jarak terpendek antara dua titik. Oleh karena itu, panjang tali busur c SELALU lebih pendek daripada panjang busur lengkung s (c < s) untuk semua sudut 0° < θ < 360°.',
        tips: 'Ingat: Tali busur lurus, busur melengkung. Lurus selalu lebih pendek daripada melengkung.',
      },
    ],
    contohSoal: [
      {
        id: '5-1',
        tingkat: 'Mudah',
        judul: 'Tali Busur dengan Sudut Pusat 60° (Segitiga Sama Sisi)',
        konteksCerita: 'Dua titik A dan B pada tepi piring berjari-jari 10 cm membentuk sudut pusat ∠AOB = 60°.',
        diketahui: [
          { label: 'Jari-jari (r)', value: '10 cm' },
          { label: 'Sudut pusat (θ)', value: '60°' },
        ],
        ditanyakan: 'Berapakah panjang tali busur AB?',
        diagramParams: { r: 10, theta: 60, showChord: true, highlight: 'chord' },
        rumus: 'c = 2r \\sin\\left(\\frac{\\theta}{2}\\right)',
        substitusi: 'c = 2(10) \\sin(30^\\circ) = 20 \\times 0{,}5',
        langkahPerhitungan: [
          'Sudut paruh adalah θ/2 = 60° / 2 = 30°.',
          'Nilai sin(30°) = 1/2 = 0,5.',
          'Maka c = 2 × 10 × 0,5 = 10 cm.',
          'Catatan: Karena ΔOAB adalah segitiga sama kaki dengan sudut apit 60°, maka sudut kedua alasnya juga (180° - 60°)/2 = 60°, menjadikannya SEGITIGA SAMA SISI sehingga c = r = 10 cm.',
        ],
        hasilAkhir: 'c = 10',
        satuan: 'cm',
        catatanKritis: 'Trik Cepat: Jika sudut pusat 60°, panjang tali busur SELALU sama persis dengan jari-jarinya (c = r)!',
      },
      {
        id: '5-2',
        tingkat: 'Sedang',
        judul: 'Tali Busur dengan Sudut Siku-Siku 90°',
        konteksCerita: 'Sebuah ornamen jam dinding bundar berjari-jari 14 cm memiliki tali kawat yang menghubungkan angka 12 dan angka 3.',
        diketahui: [
          { label: 'Jari-jari (r)', value: '14 cm' },
          { label: 'Sudut pusat angka 12 ke 3 (θ)', value: '90°' },
        ],
        ditanyakan: 'Berapakah panjang kawat tali busur tersebut?',
        diagramParams: { r: 14, theta: 90, showChord: true, highlight: 'chord' },
        rumus: 'c = 2r \\sin\\left(\\frac{\\theta}{2}\\right) = r\\sqrt{2}',
        substitusi: 'c = 2(14) \\sin(45^\\circ) = 28 \\times \\frac{1}{2}\\sqrt{2} = 14\\sqrt{2}',
        langkahPerhitungan: [
          'Cara 1 (Rumus Trigonometri): c = 2 × 14 × sin(45°) = 28 × (½√2) = 14√2 cm ≈ 19,80 cm.',
          'Cara 2 (Teorema Pythagoras): Karena ∠AOB = 90°, ΔOAB adalah segitiga siku-siku di O.',
          'c² = OA² + OB² = 14² + 14² = 196 + 196 = 392.',
          'c = √392 = √(196 × 2) = 14√2 cm.',
        ],
        hasilAkhir: 'c = 14\\sqrt{2} \\approx 19{,}80',
        satuan: 'cm',
        catatanKritis: 'Untuk sudut siku-siku 90°, tali busur adalah sisi miring segitiga siku-siku sama kaki, sehingga panjangnya selalu r√2.',
      },
      {
        id: '5-3',
        tingkat: 'HOTS',
        judul: 'Perbandingan Selisih Panjang Busur vs Tali Busur',
        konteksCerita: 'Dua semut berjalan dari titik A ke titik B pada lingkaran berdiameter 28 cm dengan sudut pusat 90°. Semut pertama menyusuri tepi lingkaran (busur), sedangkan semut kedua berjalan lurus (tali busur).',
        diketahui: [
          { label: 'Diameter (d)', value: '28 cm, sehingga r = 14 cm' },
          { label: 'Sudut pusat (θ)', value: '90°' },
          { label: 'Nilai π', value: '22/7' },
        ],
        ditanyakan: 'Berapakah selisih jarak tempuh antara semut pertama dan semut kedua?',
        diagramParams: { r: 14, theta: 90, showArc: true, showChord: true, highlight: 'chord' },
        rumus: '\\Delta = s - c = \\left(\\frac{90}{360} \\times 2\\pi r\\right) - (r\\sqrt{2})',
        substitusi: 's = \\frac{1}{4} \\times 2 \\times \\frac{22}{7} \\times 14 = 22\\text{ cm}, \\quad c = 14\\sqrt{2} \\approx 19{,}80\\text{ cm}',
        langkahPerhitungan: [
          'Hitung jarak tempuh semut 1 (panjang busur s): s = (1/4) × 88 cm = 22 cm.',
          'Hitung jarak tempuh semut 2 (panjang tali busur c): c = 14√2 ≈ 14 × 1,414 = 19,80 cm.',
          'Hitung selisih jarak tempuh: Δ = 22 - 19,80 = 2,20 cm.',
        ],
        hasilAkhir: '\\Delta \\approx 2{,}20',
        satuan: 'cm',
        catatanKritis: 'Soal ini membuktikan secara nyata bahwa tali busur lurus menghemat jarak 2,20 cm dibandingkan menyusuri busur lengkung.',
      },
    ],
    latihanMandiri: [
      {
        id: 'lat-5-1',
        pertanyaan: 'Sebuah lingkaran memiliki jari-jari 8 cm. Panjang tali busur yang menghadap sudut pusat 60° adalah...',
        pilihan: ['A. 4 cm', 'B. 8 cm', 'C. 8√2 cm', 'D. 16 cm', 'E. 8√3 cm'],
        kunci: 1,
        pembahasan: 'Untuk sudut pusat 60°, segitiga yang terbentuk adalah segitiga sama sisi, sehingga panjang tali busur sama dengan jari-jarinya, yaitu 8 cm.',
      },
      {
        id: 'lat-5-2',
        pertanyaan: 'Panjang tali busur yang menghadap sudut pusat 90° pada lingkaran berjari-jari 10 cm adalah...',
        pilihan: ['A. 10 cm', 'B. 10√2 cm', 'C. 10√3 cm', 'D. 20 cm', 'E. 5√2 cm'],
        kunci: 1,
        pembahasan: 'Untuk sudut 90°, c = r√2 = 10√2 cm (menggunakan Pythagoras c² = 10² + 10² = 200).',
      },
    ],
    narasiSuara:
      'Pada modul kelima, kita mempelajari panjang tali busur c. Tali busur adalah garis lurus yang menghubungkan dua titik pada keliling lingkaran. Dua jari-jari dan tali busur membentuk segitiga sama kaki. Dengan membagi segitiga ini menjadi dua segitiga siku-siku, kita memperoleh rumus c sama dengan 2 r sin teta per 2. Trik mudah yang harus kamu ingat: jika sudut pusatnya 60 derajat, panjang tali busur tepat sama dengan jari-jari r. Jika sudut pusatnya 90 derajat, panjangnya adalah r akar 2.',
  },

  // ==========================================
  // MODUL 6: APOTEMA LINGKARAN
  // ==========================================
  {
    id: 6,
    slug: 'apotema-lingkaran',
    nomor: '06',
    judul: 'Apotema Lingkaran (Teorema Pythagoras)',
    subhead: 'Menghitung jarak terpendek tegak lurus dari titik pusat ke tali busur: a = √(r² − (c/2)²).',
    level: 'Menengah',
    tujuan: [
      'Memahami definisi apotema sebagai jarak terdekat (tegak lurus) dari titik pusat O ke tali busur.',
      'Menurunkan rumus apotema a = √(r² - (c/2)²) menggunakan Teorema Pythagoras.',
      'Menghubungkan apotema dengan tinggi segitiga sama kaki dalam juring lingkaran.',
    ],
    penjelasanIntuitif:
      'Jika kamu berada di titik pusat lingkaran O dan ingin berjalan menuju tali busur AB secepat mungkin, lintasan terpendek yang harus kamu ambil adalah garis lurus yang TEGAK LURUS (membentuk sudut siku-siku 90°) terhadap tali busur tersebut. Garis tegak lurus inilah yang dinamakan Apotema (a). Garis ini memiliki keistimewaan matematis: ia membelah tali busur tepat di tengah-tengahnya menjadi dua segmen berukuran sama (c/2). Dengan demikian, terbentuklah segitiga siku-siku sempurna dengan sisi miring r, sisi alas c/2, dan sisi tegak a!',
    analogiDuniaNyata:
      'Ketinggian air dari dasar pipa silinder yang tergenang, atau jarak dari pusat as roda ke lantai datar penopang.',
    diagramParams: {
      r: 10,
      theta: 90,
      showApothem: true,
      showChord: true,
      showRadius: true,
      showRightAngleMark: true,
      highlight: 'apothem',
    },
    rumusUtama: 'a = \\sqrt{r^2 - \\left(\\frac{c}{2}\\right)^2} = r \\cos\\left(\\frac{\\theta}{2}\\right)',
    penurunanRumus: {
      judul: 'Penurunan Rumus Apotema via Teorema Pythagoras',
      langkah: [
        { teks: 'Tarik garis dari titik pusat O tegak lurus ke tali busur AB di titik potong M.' },
        { teks: 'Panjang OM adalah apotema a, dan M adalah titik tengah AB sehingga AM = c / 2.' },
        { teks: 'Perhatikan segitiga siku-siku ΔOMA dengan sudut siku-siku di titik M.' },
        { teks: 'Sisi miringnya adalah jari-jari OA = r, sisi alas AM = c / 2, dan sisi tegak OM = a.' },
        { teks: 'Terapkan Teorema Pythagoras:', formula: 'OA^2 = AM^2 + OM^2 \\implies r^2 = \\left(\\frac{c}{2}\\right)^2 + a^2' },
        { teks: 'Kurangkan kedua ruas dengan (c/2)² lalu tarik akar kuadrat:', formula: 'a^2 = r^2 - \\left(\\frac{c}{2}\\right)^2 \\implies a = \\sqrt{r^2 - \\left(\\frac{c}{2}\\right)^2}' },
      ],
      kesimpulan: 'Apotema selalu dapat dihitung secara eksak jika jari-jari dan panjang tali busur diketahui.',
    },
    keteranganVariabel: [
      { simbol: 'a', nama: 'Panjang Apotema', satuan: 'cm, m', catatan: 'Jarak tegak lurus OM dari pusat O ke tali busur AB.' },
      { simbol: 'r', nama: 'Jari-jari lingkaran', satuan: 'cm, m', catatan: 'Sisi miring segitiga siku-siku ΔOMA.' },
      { simbol: 'c', nama: 'Panjang Tali Busur', satuan: 'cm, m', catatan: 'Panjang garis lurus AB.' },
      { simbol: 'c/2', nama: 'Setengah Tali Busur', satuan: 'cm, m', catatan: 'Sisi alas segitiga siku-siku ΔOMA.' },
    ],
    tipsPi:
      'Jika sudut pusat θ diketahui, apotema dapat dihitung langsung tanpa tali busur menggunakan rumus kosinus: a = r cos(θ/2).',
    kesalahanUmum: [
      {
        mitos: 'Memasukkan panjang tali busur penuh c ke dalam rumus Pythagoras: a = √(r² - c²).',
        fakta: 'Sisi alas segitiga siku-siku hanyalah SETENGAH tali busur (c/2), bukan tali busur utuh c.',
        tips: 'Selalu bagi dua panjang tali busur terlebih dahulu sebelum menguadratkannya!',
      },
    ],
    contohSoal: [
      {
        id: '6-1',
        tingkat: 'Mudah',
        judul: 'Menghitung Apotema dengan Tripel Pythagoras',
        konteksCerita: 'Sebuah lingkaran berjari-jari r = 10 cm memiliki tali busur AB sepanjang 12 cm.',
        diketahui: [
          { label: 'Jari-jari (r)', value: '10 cm' },
          { label: 'Panjang tali busur (c)', value: '12 cm' },
        ],
        ditanyakan: 'Berapakah panjang apotema dari titik pusat O ke tali busur AB?',
        diagramParams: { r: 10, theta: 74, showApothem: true, showChord: true, highlight: 'apothem' },
        rumus: 'a = \\sqrt{r^2 - \\left(\\frac{c}{2}\\right)^2}',
        substitusi: 'a = \\sqrt{10^2 - \\left(\\frac{12}{2}\\right)^2} = \\sqrt{100 - 6^2}',
        langkahPerhitungan: [
          'Bagi dua panjang tali busur: c/2 = 12 / 2 = 6 cm.',
          'Terapkan Teorema Pythagoras: a² = r² - (c/2)² = 10² - 6² = 100 - 36 = 64.',
          'Tarik akar kuadrat: a = √64 = 8 cm.',
          'Perhatikan bahwa 6, 8, 10 adalah kelipatan tripel Pythagoras dasar (3, 4, 5).',
        ],
        hasilAkhir: 'a = 8',
        satuan: 'cm',
        catatanKritis: 'Mengenali tripel Pythagoras (6, 8, 10) mempercepat perhitungan tanpa perlu mengalikan angka besar.',
      },
      {
        id: '6-2',
        tingkat: 'Sedang',
        judul: 'Mencari Panjang Tali Busur dari Apotema',
        konteksCerita: 'Sebuah tali busur berjarak apotema 15 cm dari titik pusat lingkaran yang berjari-jari 17 cm.',
        diketahui: [
          { label: 'Apotema (a)', value: '15 cm' },
          { label: 'Jari-jari (r)', value: '17 cm' },
        ],
        ditanyakan: 'Berapakah panjang tali busur c tersebut?',
        diagramParams: { r: 17, theta: 56, showApothem: true, showChord: true, highlight: 'chord' },
        rumus: '\\left(\\frac{c}{2}\\right) = \\sqrt{r^2 - a^2} \\implies c = 2\\sqrt{r^2 - a^2}',
        substitusi: 'c = 2\\sqrt{17^2 - 15^2} = 2\\sqrt{289 - 225}',
        langkahPerhitungan: [
          'Hitung selisih kuadrat: 17² - 15² = 289 - 225 = 64.',
          'Akar kuadrat dari 64 adalah 8 cm. Ini adalah panjang SETENGAH tali busur (c/2 = 8 cm).',
          'Kalikan 8 dengan 2 untuk mendapatkan panjang tali busur utuh: c = 2 × 8 = 16 cm.',
          '(Tripel Pythagoras: 8, 15, 17).',
        ],
        hasilAkhir: 'c = 16',
        satuan: 'cm',
        catatanKritis: 'Jangan berhenti pada angka 8 cm; angka 8 baru setengah tali busur, kalikan 2 untuk mendapatkan panjang utuh.',
      },
      {
        id: '6-3',
        tingkat: 'HOTS',
        judul: 'Apotema pada Sudut Pusat Istimewa 120°',
        konteksCerita: 'Sebuah tali busur menghadap sudut pusat θ = 120° pada lingkaran berjari-jari 20 cm.',
        diketahui: [
          { label: 'Jari-jari (r)', value: '20 cm' },
          { label: 'Sudut pusat (θ)', value: '120°' },
        ],
        ditanyakan: 'Berapakah panjang apotema dan panjang tali busurnya?',
        diagramParams: { r: 20, theta: 120, showApothem: true, showChord: true, highlight: 'apothem' },
        rumus: 'a = r \\cos\\left(\\frac{\\theta}{2}\\right), \\quad c = 2r \\sin\\left(\\frac{\\theta}{2}\\right)',
        substitusi: 'a = 20 \\cos(60^\\circ) = 20 \\times 0{,}5, \\quad c = 2(20) \\sin(60^\\circ) = 40 \\times \\frac{1}{2}\\sqrt{3}',
        langkahPerhitungan: [
          'Sudut paruh adalah θ/2 = 120° / 2 = 60°.',
          'Hitung apotema: a = r cos(60°) = 20 × 0,5 = 10 cm.',
          'Hitung tali busur: c = 2 × 20 × sin(60°) = 40 × (½√3) = 20√3 cm ≈ 34,64 cm.',
          'Verifikasi Pythagoras: a² + (c/2)² = 10² + (10√3)² = 100 + 300 = 400 = 20² (Sesuai dengan r²!).',
        ],
        hasilAkhir: 'a = 10\\text{ cm}, \\quad c = 20\\sqrt{3}\\text{ cm}',
        satuan: 'cm',
        catatanKritis: 'Ketika sudut pusat 120°, apotemanya tepat setengah dari jari-jari (a = r/2)!',
      },
    ],
    latihanMandiri: [
      {
        id: 'lat-6-1',
        pertanyaan: 'Sebuah lingkaran berjari-jari 13 cm memiliki tali busur sepanjang 24 cm. Panjang apotemanya adalah...',
        pilihan: ['A. 5 cm', 'B. 7 cm', 'C. 9 cm', 'D. 10 cm', 'E. 12 cm'],
        kunci: 0,
        pembahasan: 'Setengah tali busur = 24 / 2 = 12 cm. Apotema a = √(13² - 12²) = √(169 - 144) = √25 = 5 cm (Tripel 5, 12, 13).',
      },
      {
        id: 'lat-6-2',
        pertanyaan: 'Garis apotema selalu membentuk sudut ... terhadap tali busur.',
        pilihan: ['A. 30°', 'B. 45°', 'C. 60°', 'D. 90°', 'E. 180°'],
        kunci: 3,
        pembahasan: 'Secara definisi geometris, apotema adalah jarak terpendek dari titik pusat ke tali busur, sehingga selalu tegak lurus (90°).',
      },
    ],
    narasiSuara:
      'Pada modul keenam, kita membahas apotema. Apotema adalah ruas garis yang ditarik dari titik pusat tegak lurus menuju tali busur. Garis ini membagi tali busur menjadi dua bagian yang sama panjang. Kita dapat menghitung panjang apotema menggunakan Teorema Pythagoras, yaitu akar dari kuadrat jari-jari dikurangi kuadrat dari setengah tali busur. Apotema juga bertindak sebagai tinggi segitiga sama kaki di dalam juring.',
  },

  // ==========================================
  // MODUL 7: SEGITIGA DALAM JURING LINGKARAN
  // ==========================================
  {
    id: 7,
    slug: 'segitiga-dalam-juring',
    nomor: '07',
    judul: 'Segitiga dalam Juring Lingkaran',
    subhead: 'Menghitung luas segitiga sama kaki OAB dengan rumus L = ½r² sin θ atau L = ½ × c × a.',
    level: 'Menengah',
    tujuan: [
      'Mengidentifikasi karakteristik segitiga sama kaki ΔOAB yang dibentuk oleh dua jari-jari OA dan OB.',
      'Memahami penurunan rumus luas segitiga trigonometri L = ½r² sin θ.',
      'Membandingkan dua metode perhitungan: metode trigonometri sudut apit vs metode alas (tali busur) dan tinggi (apotema).',
    ],
    penjelasanIntuitif:
      'Di dalam setiap juring lingkaran, jika kamu menarik garis lurus tali busur dari A ke B, kamu akan langsung membagi juring tersebut menjadi dua bagian: sebuah segitiga di bagian dalam (ΔOAB) dan sebuah tembereng di bagian luar. Segitiga ΔOAB ini istimewa karena kedua kakinya adalah jari-jari lingkaran (OA = OB = r) yang mengapit sudut pusat θ. Berdasarkan trigonometri dasar luas segitiga yang diketahui dua sisi dan satu sudut apitnya (L = ½ · a · b · sin C), luas segitiga ini dapat langsung dihitung dengan rumus elegan: L = ½ · r · r · sin θ = ½r² sin θ!',
    analogiDuniaNyata:
      'Potongan segitiga lurus di dalam irisan kue sebelum mencapai tepi lengkungnya, atau struktur rangka segitiga kuda-kuda atap melingkar.',
    diagramParams: {
      r: 10,
      theta: 90,
      showTriangle: true,
      showRadius: true,
      showChord: true,
      highlight: 'triangle',
    },
    rumusUtama: 'L_{\\triangle} = \\frac{1}{2} r^2 \\sin \\theta = \\frac{1}{2} \\times c \\times a',
    penurunanRumus: {
      judul: 'Penurunan Rumus Luas Segitiga L = ½r² sin θ',
      langkah: [
        { teks: 'Rumus umum luas segitiga dengan sisi a, b dan sudut apit θ adalah L = ½ · a · b · sin θ.' },
        { teks: 'Pada segitiga ΔOAB, sisi pertama adalah OA = r, dan sisi kedua adalah OB = r.' },
        { teks: 'Sudut apit antara kedua jari-jari tersebut adalah sudut pusat θ.' },
        { teks: 'Substitusikan kedua sisi ke rumus umum:', formula: 'L_{\\triangle} = \\frac{1}{2} \\times r \\times r \\times \\sin \\theta = \\frac{1}{2} r^2 \\sin \\theta' },
        { teks: 'Sebagai alternatif, gunakan rumus klasik L = ½ × alas × tinggi, dengan alas = tali busur c dan tinggi = apotema a:', formula: 'L_{\\triangle} = \\frac{1}{2} \\times c \\times a' },
      ],
      kesimpulan: 'Kedua rumus menghasilkan nilai luas segitiga yang persis sama.',
    },
    keteranganVariabel: [
      { simbol: 'L_{\\triangle}', nama: 'Luas Segitiga OAB', satuan: 'cm², m²', catatan: 'Luas bidang segitiga sama kaki di dalam juring.' },
      { simbol: 'r', nama: 'Jari-jari lingkaran', satuan: 'cm, m', catatan: 'Panjang kedua kaki segitiga.' },
      { simbol: '\\theta', nama: 'Sudut Pusat', satuan: 'derajat (°)', catatan: 'Sudut apit di titik pusat O.' },
      { simbol: 'c', nama: 'Tali Busur', satuan: 'cm, m', catatan: 'Panjang sisi alas segitiga.' },
      { simbol: 'a', nama: 'Apotema', satuan: 'cm, m', catatan: 'Tinggi segitiga tegak lurus dari O ke AB.' },
    ],
    tipsPi:
      'Untuk sudut siku-siku θ = 90°, nilai sin(90°) = 1, sehingga rumus menjadi sangat sederhana: L = ½ · r · r · 1 = ½r².',
    kesalahanUmum: [
      {
        mitos: 'Mengira luas segitiga selalu lebih besar dari luas juring.',
        fakta: 'Segitiga ΔOAB berada DI DALAM juring. Oleh karena itu, Luas Segitiga SELALU LEBIH KECIL dari Luas Juring (L_segitiga < L_juring).',
        tips: 'Jika hasil perhitungan luas segitiga kamu lebih besar dari luas juring, periksa kembali perhitungan sudut atau nilai sinus kamu.',
      },
    ],
    contohSoal: [
      {
        id: '7-1',
        tingkat: 'Mudah',
        judul: 'Luas Segitiga Siku-Siku dalam Juring 90°',
        konteksCerita: 'Sebuah juring lingkaran berjari-jari 10 cm memiliki sudut pusat 90°.',
        diketahui: [
          { label: 'Jari-jari (r)', value: '10 cm' },
          { label: 'Sudut pusat (θ)', value: '90°' },
        ],
        ditanyakan: 'Berapakah luas segitiga OAB yang terbentuk di dalam juring tersebut?',
        diagramParams: { r: 10, theta: 90, showTriangle: true, highlight: 'triangle' },
        rumus: 'L_{\\triangle} = \\frac{1}{2} r^2 \\sin(90^\\circ) = \\frac{1}{2} r^2',
        substitusi: 'L_{\\triangle} = \\frac{1}{2} \\times 10^2 \\times 1',
        langkahPerhitungan: [
          'Karena sudut pusat 90°, kedua jari-jari saling tegak lurus.',
          'Alas segitiga = r = 10 cm, tinggi segitiga = r = 10 cm.',
          'Luas segitiga: L = ½ × 10 × 10 = 50 cm².',
        ],
        hasilAkhir: 'L_{\\triangle} = 50',
        satuan: 'cm²',
        catatanKritis: 'Pada sudut 90°, kamu tidak memerlukan tabel trigonometri karena sin(90°) = 1.',
      },
      {
        id: '7-2',
        tingkat: 'Sedang',
        judul: 'Luas Segitiga dalam Juring dengan Sudut 60°',
        konteksCerita: 'Sebuah juring lingkaran berjari-jari 12 cm memiliki sudut pusat 60°.',
        diketahui: [
          { label: 'Jari-jari (r)', value: '12 cm' },
          { label: 'Sudut pusat (θ)', value: '60°' },
        ],
        ditanyakan: 'Berapakah luas segitiga sama sisi OAB tersebut?',
        diagramParams: { r: 12, theta: 60, showTriangle: true, highlight: 'triangle' },
        rumus: 'L_{\\triangle} = \\frac{1}{2} r^2 \\sin(60^\\circ)',
        substitusi: 'L_{\\triangle} = \\frac{1}{2} \\times 12^2 \\times \\frac{1}{2}\\sqrt{3}',
        langkahPerhitungan: [
          'Hitung r²: 12² = 144.',
          'Nilai sin(60°) = ½√3.',
          'Luas segitiga: L = ½ × 144 × (½√3) = 72 × (½√3) = 36√3 cm² ≈ 62,35 cm².',
        ],
        hasilAkhir: 'L_{\\triangle} = 36\\sqrt{3} \\approx 62{,}35',
        satuan: 'cm²',
        catatanKritis: 'Tinggalkan jawaban dalam bentuk akar eksak 36√3 cm² kecuali soal secara spesifik meminta desimal.',
      },
      {
        id: '7-3',
        tingkat: 'HOTS',
        judul: 'Verifikasi Dua Metode Luas Segitiga (Trigonometri vs Alas & Tinggi)',
        konteksCerita: 'Sebuah segitiga dalam juring memiliki jari-jari r = 10 cm dan sudut pusat 74°. Diketahui tali busur c = 12 cm dan apotema a = 8 cm.',
        diketahui: [
          { label: 'Jari-jari (r)', value: '10 cm' },
          { label: 'Tali busur (alas c)', value: '12 cm' },
          { label: 'Apotema (tinggi a)', value: '8 cm' },
          { label: 'sin(74°)', value: '0,96' },
        ],
        ditanyakan: 'Buktikan bahwa metode ½r² sin θ dan metode ½ × c × a memberikan hasil yang sama persis!',
        diagramParams: { r: 10, theta: 74, showTriangle: true, showApothem: true, highlight: 'triangle' },
        rumus: 'L_1 = \\frac{1}{2}r^2 \\sin\\theta, \\quad L_2 = \\frac{1}{2} c \\times a',
        substitusi: 'L_1 = \\frac{1}{2}(10^2)(0{,}96), \\quad L_2 = \\frac{1}{2}(12)(8)',
        langkahPerhitungan: [
          'Metode 1 (Trigonometri): L_1 = ½ × 100 × 0,96 = 50 × 0,96 = 48 cm².',
          'Metode 2 (Alas × Tinggi): L_2 = ½ × 12 × 8 = 6 × 8 = 48 cm².',
          'Karena L_1 = L_2 = 48 cm², terbukti secara matematis bahwa kedua rumus tersebut sepenuhnya konsisten dan ekuivalen!',
        ],
        hasilAkhir: 'L_1 = L_2 = 48',
        satuan: 'cm²',
        catatanKritis: 'Kesesuaian ini membuktikan bahwa rumus trigonometri sebenarnya adalah bentuk lain dari rumus dasar alas kali tinggi.',
      },
    ],
    latihanMandiri: [
      {
        id: 'lat-7-1',
        pertanyaan: 'Luas segitiga sama kaki dalam juring lingkaran berjari-jari 6 cm dengan sudut pusat 90° adalah...',
        pilihan: ['A. 9 cm²', 'B. 18 cm²', 'C. 36 cm²', 'D. 72 cm²', 'E. 18√2 cm²'],
        kunci: 1,
        pembahasan: 'L = ½ × r² × sin(90°) = ½ × 6² × 1 = ½ × 36 = 18 cm².',
      },
      {
        id: 'lat-7-2',
        pertanyaan: 'Sebuah segitiga dalam juring memiliki tali busur 16 cm dan apotema 6 cm. Luas segitiga tersebut adalah...',
        pilihan: ['A. 24 cm²', 'B. 48 cm²', 'C. 96 cm²', 'D. 100 cm²', 'E. 50 cm²'],
        kunci: 1,
        pembahasan: 'Luas = ½ × alas × tinggi = ½ × tali busur × apotema = ½ × 16 × 6 = 48 cm².',
      },
    ],
    narasiSuara:
      'Pada modul ketujuh, kita mempelajari segitiga di dalam juring lingkaran. Ketika titik A dan B dihubungkan oleh tali busur, terbentuk segitiga sama kaki dengan dua sisi sepanjang jari-jari r. Luas segitiga ini dapat dihitung dengan rumus setengah kali r kuadrat kali sinus teta, atau setengah kali tali busur dikalikan apotema. Memahami luas segitiga ini sangat krusial, karena ia merupakan komponen pengurang untuk menghitung luas tembereng.',
  },

  // ==========================================
  // MODUL 8: RUMUS LUAS TEMBERENG
  // ==========================================
  {
    id: 8,
    slug: 'luas-tembereng-lingkaran',
    nomor: '08',
    judul: 'Luas Tembereng Lingkaran',
    subhead: 'Masteri rumus pengurangan: Luas Tembereng = Luas Juring − Luas Segitiga.',
    level: 'Lanjut',
    tujuan: [
      'Memahami tembereng sebagai selisih luas juring dikurangi luas segitiga.',
      'Mengaplikasikan rumus lengkap: L = (θ/360°)πr² − ½r² sin θ.',
      'Menyelesaikan soal kontekstual penampang cairan dalam pipa atau wadah melingkar.',
    ],
    penjelasanIntuitif:
      'Bayangkan kamu memegang sepotong pizza berbentuk juring OAB. Lalu temanmu memotong bagian segitiga atasnya yang menuju titik pusat O dan memakannya. Bagian tepi pizza berkerak lengkung yang tersisa di tanganmu itulah yang disebut Tembereng! Secara matematis, rumus luas tembereng sangat logis dan tidak perlu dihafal terpisah: Luas Tembereng = Luas Juring Penuh dikurangi Luas Segitiga Pengurang.',
    analogiDuniaNyata:
      'Ketinggian genangan air di dasar pipa pembuangan bundar (penampang tembereng), potongan tepi semangka, atau bentuk bulan sabit.',
    diagramParams: {
      r: 10,
      theta: 90,
      showSegment: true,
      showChord: true,
      showRadius: true,
      highlight: 'segment',
    },
    rumusUtama: 'L_{\\text{tembereng}} = L_{\\text{juring}} - L_{\\triangle} = \\left(\\frac{\\theta}{360^\\circ}\\pi r^2\\right) - \\left(\\frac{1}{2}r^2 \\sin\\theta\\right)',
    penurunanRumus: {
      judul: 'Penurunan Rumus Luas Tembereng',
      langkah: [
        { teks: 'Juring OAB melingkupi seluruh daerah dari titik pusat O hingga busur AB.' },
        { teks: 'Juring tersebut tersusun dari dua daerah yang saling lepas: segitiga ΔOAB dan tembereng AB.' },
        { teks: 'Maka secara aditif: Luas Juring = Luas Segitiga + Luas Tembereng.' },
        { teks: 'Pindahkan ruas untuk mengisolasi Luas Tembereng:', formula: 'L_{\\text{tembereng}} = L_{\\text{juring}} - L_{\\triangle}' },
        { teks: 'Substitusikan rumus luas juring dan luas segitiga:', formula: 'L_{\\text{tembereng}} = \\left(\\frac{\\theta}{360^\\circ}\\pi r^2\\right) - \\left(\\frac{1}{2}r^2 \\sin\\theta\\right)' },
      ],
      kesimpulan: 'Luas tembereng selalu dapat ditentukan melalui dua langkah sistematis: hitung luas juring, hitung luas segitiga, lalu kurangkan.',
    },
    keteranganVariabel: [
      { simbol: 'L_{\\text{tembereng}}', nama: 'Luas Tembereng', satuan: 'cm², m²', catatan: 'Luas daerah lengkung antara tali busur dan busur.' },
      { simbol: 'L_{\\text{juring}}', nama: 'Luas Juring OAB', satuan: 'cm², m²', catatan: '(θ/360°) × πr².' },
      { simbol: 'L_{\\triangle}', nama: 'Luas Segitiga OAB', satuan: 'cm², m²', catatan: '½r² sin θ.' },
      { simbol: 'r', nama: 'Jari-jari lingkaran', satuan: 'cm, m', catatan: 'Jarak O ke tepi lingkaran.' },
    ],
    tipsPi:
      'Untuk sudut pusat 90°, luas juring adalah ¼πr² dan luas segitiga adalah ½r². Maka tembereng 90° = ¼πr² - ½r² = r²(¼π - ½) = r²( (22/28) - (14/28) ) = (8/28)r² = (2/7)r²! Ini adalah rumus kilat yang sangat terkenal!',
    kesalahanUmum: [
      {
        mitos: 'Langsung mengalikan panjang busur dengan tali busur untuk mencari luas tembereng.',
        fakta: 'Tidak ada rumus perkalian langsung. Tembereng WAJIB dicari melalui pengurangan luas juring dengan luas segitiga.',
        tips: 'Ingat konsep: Potong Juring -> Buang Segitiga -> Sisa Tembereng.',
      },
    ],
    contohSoal: [
      {
        id: '8-1',
        tingkat: 'Mudah',
        judul: 'Luas Tembereng Sudut Siku-Siku 90° (Rumus Kilat 2/7 r²)',
        konteksCerita: 'Sebuah lingkaran berjari-jari 14 cm memiliki sudut pusat 90°.',
        diketahui: [
          { label: 'Jari-jari (r)', value: '14 cm (kelipatan 7)' },
          { label: 'Sudut pusat (θ)', value: '90°' },
          { label: 'Nilai π', value: '22/7' },
        ],
        ditanyakan: 'Berapakah luas tembereng lingkaran tersebut?',
        diagramParams: { r: 14, theta: 90, showSegment: true, highlight: 'segment' },
        rumus: 'L_{\\text{tembereng}} = L_{\\text{juring}} - L_{\\triangle}',
        substitusi: 'L = \\left(\\frac{90}{360} \\times \\frac{22}{7} \\times 14^2\\right) - \\left(\\frac{1}{2} \\times 14^2 \\times 1\\right)',
        langkahPerhitungan: [
          'Langkah 1: Hitung Luas Juring: L_juring = ¼ × 616 = 154 cm².',
          'Langkah 2: Hitung Luas Segitiga: L_segitiga = ½ × 14 × 14 = 98 cm².',
          'Langkah 3: Kurangkan keduanya: L_tembereng = 154 - 98 = 56 cm².',
          'Verifikasi Trik Kilat 2/7 r²: (2/7) × 14² = (2/7) × 196 = 2 × 28 = 56 cm² (Tepat 100%!).',
        ],
        hasilAkhir: 'L_{\\text{tembereng}} = 56',
        satuan: 'cm²',
        catatanKritis: 'Rumus kilat L = 2/7 r² sangat akurat dan hemat waktu untuk sudut 90° dengan π = 22/7.',
      },
      {
        id: '8-2',
        tingkat: 'Sedang',
        judul: 'Luas Tembereng Sudut 60° dengan Bentuk Eksak Akar',
        konteksCerita: 'Sebuah ornamen kubah memiliki juring dengan sudut pusat 60° dan jari-jari r = 12 cm. (Gunakan π = 3,14 dan √3 ≈ 1,732).',
        diketahui: [
          { label: 'Jari-jari (r)', value: '12 cm' },
          { label: 'Sudut pusat (θ)', value: '60°' },
          { label: 'sin(60°)', value: '½√3' },
        ],
        ditanyakan: 'Berapakah luas tembereng yang terbentuk?',
        diagramParams: { r: 12, theta: 60, showSegment: true, highlight: 'segment' },
        rumus: 'L_{\\text{tembereng}} = \\left(\\frac{60}{360} \\pi r^2\\right) - \\left(\\frac{1}{2} r^2 \\sin 60^\\circ\\right)',
        substitusi: 'L = \\left(\\frac{1}{6} \\times 3{,}14 \\times 144\\right) - \\left(\\frac{1}{2} \\times 144 \\times \\frac{1}{2}\\sqrt{3}\\right)',
        langkahPerhitungan: [
          'Luas Juring: (1/6) × 3,14 × 144 = 3,14 × 24 = 75,36 cm².',
          'Luas Segitiga: ½ × 144 × ½√3 = 36√3 ≈ 36 × 1,732 = 62,35 cm².',
          'Luas Tembereng: 75,36 - 62,35 = 13,01 cm².',
        ],
        hasilAkhir: 'L_{\\text{tembereng}} \\approx 13{,}01',
        satuan: 'cm²',
        catatanKritis: 'Perhatikan bahwa nilai tembereng 60° relatif kecil karena sebagian besar daerah juring ditempati oleh segitiga sama sisi.',
      },
      {
        id: '8-3',
        tingkat: 'HOTS',
        judul: 'Volume Air dalam Pipa Drainase Penampang Tembereng',
        konteksCerita: 'Sebuah pipa drainase silinder mendatar berdiameter 20 cm (jari-jari 10 cm) dan panjang pipa 2 meter (200 cm) terisi air sebagian. Penampang genangan air di dasar pipa membentuk tembereng dengan sudut pusat 90°.',
        diketahui: [
          { label: 'Jari-jari penampang (r)', value: '10 cm' },
          { label: 'Sudut pusat permukaan air (θ)', value: '90°' },
          { label: 'Panjang pipa silinder (p)', value: '200 cm' },
          { label: 'Nilai π', value: '3,14' },
        ],
        ditanyakan: 'Berapakah volume air yang berada di dalam pipa tersebut dalam liter?',
        diagramParams: { r: 10, theta: 90, showSegment: true, highlight: 'segment' },
        rumus: 'V = L_{\\text{tembereng}} \\times \\text{panjang pipa}',
        substitusi: 'L = \\left(\\frac{1}{4} \\times 3{,}14 \\times 100\\right) - \\left(\\frac{1}{2} \\times 100\\right) = 78{,}5 - 50 = 28{,}5\\text{ cm}^2',
        langkahPerhitungan: [
          'Hitung luas penampang tembereng air: L_juring = ¼ × 3,14 × 100 = 78,5 cm².',
          'L_segitiga = ½ × 10 × 10 = 50 cm².',
          'L_tembereng = 78,5 - 50 = 28,5 cm².',
          'Hitung volume air: V = Luas penampang × panjang pipa = 28,5 cm² × 200 cm = 5.700 cm³.',
          'Konversi ke liter (1 liter = 1.000 cm³): V = 5.700 / 1.000 = 5,7 liter.',
        ],
        hasilAkhir: 'V = 5{,}7',
        satuan: 'liter',
        catatanKritis: 'Soal aplikasi industri dan teknik sipil ini mengintegrasikan geometri tembereng dengan konsep volume bangun ruang silinder prismatis.',
      },
    ],
    latihanMandiri: [
      {
        id: 'lat-8-1',
        pertanyaan: 'Pada lingkaran berjari-jari 7 cm dengan sudut pusat 90° dan π = 22/7, luas temberengnya adalah...',
        pilihan: ['A. 14 cm²', 'B. 28 cm²', 'C. 38,5 cm²', 'D. 49 cm²', 'E. 77 cm²'],
        kunci: 0,
        pembahasan: 'Luas juring = 1/4 × (22/7) × 49 = 38,5 cm². Luas segitiga = 1/2 × 7 × 7 = 24,5 cm². Luas tembereng = 38,5 - 24,5 = 14 cm² (Atau gunakan trik 2/7 × r² = 2/7 × 49 = 14 cm²).',
      },
      {
        id: 'lat-8-2',
        pertanyaan: 'Rumus untuk mencari luas tembereng secara konsep geometri adalah...',
        pilihan: ['A. Luas Lingkaran - Luas Juring', 'B. Luas Juring - Luas Segitiga', 'C. Luas Segitiga - Luas Juring', 'D. Panjang Busur × Tali Busur', 'E. Setengah Keliling × Apotema'],
        kunci: 1,
        pembahasan: 'Luas tembereng didapatkan dari luas juring penuh dikurangi luas segitiga di dalamnya.',
      },
    ],
    narasiSuara:
      'Pada modul kedelapan, kita membahas luas tembereng. Tembereng adalah daerah yang dibatasi oleh tali busur dan busurnya. Cara menghitung luas tembereng sangat sistematis: hitung luas juring lingkaran penuh, lalu kurangkan dengan luas segitiga di dalamnya. Khusus untuk sudut pusat 90 derajat dengan pi 22 per 7, kita memiliki rumus kilat yaitu 2 per 7 dikalikan r kuadrat.',
  },

  // ==========================================
  // MODUL 9: SUDUT PUSAT & SUDUT KELILING
  // ==========================================
  {
    id: 9,
    slug: 'sudut-pusat-dan-sudut-keliling',
    nomor: '09',
    judul: 'Hubungan Sudut Pusat & Sudut Keliling',
    subhead: 'Teorema sudut pusat dua kali sudut keliling, sudut keliling menghadap diameter, dan segiempat tali busur.',
    level: 'Lanjut',
    tujuan: [
      'Memahami dan membuktikan teorema: Sudut Pusat = 2 × Sudut Keliling yang menghadap busur yang sama.',
      'Memahami Teorema Thales: Sudut keliling yang menghadap diameter selalu 90° (siku-siku).',
      'Memahami sifat segiempat tali busur: Jumlah sudut yang saling berhadapan adalah 180°.',
    ],
    penjelasanIntuitif:
      'Sudut Pusat adalah sudut yang titik sudutnya berada tepat di titik pusat lingkaran O (misalnya ∠AOB). Sudut Keliling adalah sudut yang titik sudutnya berada di garis tepi keliling lingkaran (misalnya ∠ACB). Jika kedua sudut ini membuka dan menghadap busur yang sama persis (busur AB), besar sudut pusat SELALU TEPAT DUA KALI LIPAT dari besar sudut keliling! Mau titik C kamu geser ke mana saja di sepanjang busur mayor, besar sudut kelilingnya tidak akan pernah berubah.',
    analogiDuniaNyata:
      'Sudut pandang penonton bioskop di barisan belakang tepi (sudut keliling) versus proyektor di tengah ruang (sudut pusat) yang menyorot bentangan layar yang sama.',
    diagramParams: {
      r: 10,
      theta: 80,
      showInscribed: true,
      showRadius: true,
      showArc: true,
      highlight: 'angle',
    },
    rumusUtama: '\\angle \\text{Pusat} = 2 \\times \\angle \\text{Keliling} \\iff \\angle \\text{Keliling} = \\frac{1}{2} \\angle \\text{Pusat}',
    rumusTambahan: [
      { label: 'Sudut Menghadap Diameter', formula: '\\angle \\text{Keliling} = \\frac{1}{2} \\times 180^\\circ = 90^\\circ', keterangan: 'Semua sudut keliling yang menghadap diameter adalah siku-siku (Teorema Thales).' },
      { label: 'Segiempat Tali Busur', formula: '\\angle A + \\angle C = 180^\\circ, \\quad \\angle B + \\angle D = 180^\\circ', keterangan: 'Sudut-sudut yang saling berhadapan berjumlah 180°.' },
    ],
    penurunanRumus: {
      judul: 'Pembuktian Geometris Teorema Sudut Pusat = 2 × Sudut Keliling',
      langkah: [
        { teks: 'Tarik garis diameter dari titik C melalui titik pusat O hingga menembus lingkaran di titik D.' },
        { teks: 'Perhatikan ΔOAC: karena OA = OC = r, maka ΔOAC adalah segitiga sama kaki dengan sudut ∠OCA = ∠OAC = x.' },
        { teks: 'Sudut luar ΔOAC di titik O adalah ∠AOD = x + x = 2x.' },
        { teks: 'Dengan cara yang sama pada segitiga sama kaki ΔOBC: misal ∠OCB = ∠OBC = y, maka sudut luar ∠BOD = y + y = 2y.' },
        { teks: 'Jumlahkan kedua sudut: Sudut Keliling ∠ACB = x + y.', formula: '\\angle AOB = \\angle AOD + \\angle BOD = 2x + 2y = 2(x + y) = 2 \\angle ACB' },
      ],
      kesimpulan: 'Terbukti bahwa Sudut Pusat ∠AOB tepat sama dengan 2 kali Sudut Keliling ∠ACB.',
    },
    keteranganVariabel: [
      { simbol: '\\angle AOB', nama: 'Sudut Pusat', satuan: 'derajat (°)', catatan: 'Titik sudut berada di titik pusat O.' },
      { simbol: '\\angle ACB', nama: 'Sudut Keliling', satuan: 'derajat (°)', catatan: 'Titik sudut C berada di keliling lingkaran.' },
      { simbol: '\\text{Busur } AB', nama: 'Busur Bersama', satuan: 'lengkung tepi', catatan: 'Syarat mutlak: kedua sudut WAJIB menghadap busur yang sama.' },
    ],
    tipsPi:
      'Periksa selalu apakah kedua sudut benar-benar menghadap busur yang sama sebelum menerapkan rumus kelipatan 2.',
    kesalahanUmum: [
      {
        mitos: 'Mengalikan sudut keliling dengan 2 padahal menghadap busur yang berbeda.',
        fakta: 'Rumus sudut pusat = 2 × sudut keliling HANYA BERLAKU jika keduanya menghadap busur yang SAMA.',
        tips: 'Tarik garis dari kedua kaki sudut: jika kedua kaki bertemu di titik A dan B yang sama, barulah teorema ini sah digunakan.',
      },
    ],
    contohSoal: [
      {
        id: '9-1',
        tingkat: 'Mudah',
        judul: 'Menentukan Sudut Keliling dari Sudut Pusat',
        konteksCerita: 'Pada sebuah lingkaran berpusat di O, diketahui besar sudut pusat ∠AOB = 70°. Titik C terletak pada busur mayor AB.',
        diketahui: [
          { label: 'Sudut pusat (∠AOB)', value: '70°' },
          { label: 'Kondisi', value: 'Menghadap busur yang sama (busur AB)' },
        ],
        ditanyakan: 'Berapakah besar sudut keliling ∠ACB?',
        diagramParams: { r: 10, theta: 70, showInscribed: true, highlight: 'angle' },
        rumus: '\\angle ACB = \\frac{1}{2} \\angle AOB',
        substitusi: '\\angle ACB = \\frac{1}{2} \\times 70^\\circ',
        langkahPerhitungan: [
          'Kedua sudut menghadap busur yang sama yaitu busur AB.',
          'Maka sudut keliling adalah setengah dari sudut pusat.',
          '∠ACB = ½ × 70° = 35°.',
        ],
        hasilAkhir: '\\angle ACB = 35^\\circ',
        satuan: 'derajat (°)',
        catatanKritis: 'Dimanapun titik C digeser di sepanjang busur mayor, sudutnya tetap selalu 35°.',
      },
      {
        id: '9-2',
        tingkat: 'Sedang',
        judul: 'Sudut Keliling Menghadap Diameter (Teorema Thales)',
        konteksCerita: 'Ruas garis AB adalah diameter sebuah lingkaran. Titik C terletak pada keliling lingkaran sehingga membentuk segitiga ABC. Jika besar ∠ABC = 32°, tentukan besar ∠BAC!',
        diketahui: [
          { label: 'Sisi AB', value: 'Diameter lingkaran' },
          { label: 'Sudut ∠ABC', value: '32°' },
        ],
        ditanyakan: 'Berapakah besar sudut ∠BAC?',
        diagramParams: { r: 10, theta: 180, showDiameter: true, showInscribed: true, highlight: 'angle' },
        rumus: '\\angle ACB = 90^\\circ \\quad (\\text{menghadap diameter}), \\quad \\angle BAC = 180^\\circ - 90^\\circ - \\angle ABC',
        substitusi: '\\angle BAC = 90^\\circ - 32^\\circ',
        langkahPerhitungan: [
          'Berdasarkan Teorema Thales, setiap sudut keliling yang menghadap diameter selalu bersudut siku-siku (90°). Maka ∠ACB = 90°.',
          'Jumlah seluruh sudut dalam sebuah segitiga adalah 180°.',
          '∠BAC + ∠ABC + ∠ACB = 180°.',
          '∠BAC = 180° - 90° - 32° = 58°.',
        ],
        hasilAkhir: '\\angle BAC = 58^\\circ',
        satuan: 'derajat (°)',
        catatanKritis: 'Mengingat bahwa sudut menghadap diameter selalu 90° adalah kunci langsung menyelesaikan segitiga siku-siku dalam lingkaran.',
      },
      {
        id: '9-3',
        tingkat: 'HOTS',
        judul: 'Menghitung Sudut pada Segiempat Tali Busur ABCD',
        konteksCerita: 'Empat titik A, B, C, dan D terletak pada lingkaran membentuk segiempat tali busur. Diketahui besar ∠BAD = (2x + 10)° dan besar ∠BCD = (3x + 20)°.',
        diketahui: [
          { label: 'Sudut ∠BAD', value: '(2x + 10)°' },
          { label: 'Sudut berhadapan ∠BCD', value: '(3x + 20)°' },
          { label: 'Sifat segiempat tali busur', value: 'Sudut berhadapan berjumlah 180°' },
        ],
        ditanyakan: 'Tentukan nilai x dan besar sebenarnya dari sudut ∠BCD!',
        diagramParams: { r: 10, theta: 120, showChord: true, highlight: 'angle' },
        rumus: '\\angle BAD + \\angle BCD = 180^\\circ',
        substitusi: '(2x + 10) + (3x + 20) = 180',
        langkahPerhitungan: [
          'Jumlahkan kedua suku aljabar: 5x + 30 = 180.',
          'Kurangkan kedua ruas dengan 30: 5x = 150.',
          'Bagi dengan 5: x = 30.',
          'Substitusikan nilai x = 30 ke rumus ∠BCD: ∠BCD = 3(30) + 20 = 90 + 20 = 110°.',
          'Cek sudut berhadapan: ∠BAD = 2(30) + 10 = 70°. Jumlah: 70° + 110° = 180° (Cocok!).',
        ],
        hasilAkhir: 'x = 30, \\quad \\angle BCD = 110^\\circ',
        satuan: 'derajat (°)',
        catatanKritis: 'Teorema segiempat tali busur sangat sering muncul dalam soal ujian matematika nasional dan UTBK.',
      },
    ],
    latihanMandiri: [
      {
        id: 'lat-9-1',
        pertanyaan: 'Jika sebuah sudut keliling lingkaran besarnya 40°, maka besar sudut pusat yang menghadap busur yang sama adalah...',
        pilihan: ['A. 20°', 'B. 40°', 'C. 60°', 'D. 80°', 'E. 100°'],
        kunci: 3,
        pembahasan: 'Sudut Pusat = 2 × Sudut Keliling = 2 × 40° = 80°.',
      },
      {
        id: 'lat-9-2',
        pertanyaan: 'Besar sudut keliling yang menghadap tepat pada diameter lingkaran adalah...',
        pilihan: ['A. 45°', 'B. 60°', 'C. 90°', 'D. 120°', 'E. 180°'],
        kunci: 2,
        pembahasan: 'Diameter memiliki sudut pusat 180°. Maka sudut kelilingnya adalah 1/2 × 180° = 90° (selalu siku-siku).',
      },
    ],
    narasiSuara:
      'Pada modul kesembilan, kita mempelajari relasi sudut pusat dan sudut keliling. Teorema utamanya menyatakan bahwa besar sudut pusat adalah dua kali besar sudut keliling yang menghadap busur yang sama. Selain itu, Teorema Thales membuktikan bahwa setiap sudut keliling yang menghadap diameter selalu bernilai 90 derajat siku-siku. Pada segiempat tali busur, dua sudut yang saling berhadapan selalu memiliki jumlah tepat 180 derajat.',
  },

  // ==========================================
  // MODUL 10: SOAL GABUNGAN & MULTI-KONSEP HOTS
  // ==========================================
  {
    id: 10,
    slug: 'soal-gabungan-multi-konsep',
    nomor: '10',
    judul: 'Integrasi Multi-Rumus Lingkaran (HOTS)',
    subhead: 'Menyelesaikan permasalahan geometri kompleks yang memadukan juring, tembereng, tali busur, apotema, dan perbandingan.',
    level: 'Lanjut',
    tujuan: [
      'Mengintegrasikan beberapa rumus geometri lingkaran sekaligus dalam satu kasus masalah nyata.',
      'Menganalisis skenario tingkat tinggi (HOTS): desain arsitektur jendela gotik, gir rantai sepeda, dan penampang lensa ganda.',
      'Mengembangkan kemampuan berpikir analitis, pemodelan matematis, dan verifikasi hasil secara mandiri.',
    ],
    penjelasanIntuitif:
      'Di dunia nyata, masalah teknik, arsitektur, dan sains jarang sekali hanya menanyakan satu rumus tunggal. Seringkali kamu harus menghitung tali busur untuk mengetahui panjang rangka baja, apotema untuk mengetahui jarak clearance lantai, luas tembereng untuk mengetahui volume material kaca patri, serta panjang busur untuk mengetahui panjang lis pelindung luar. Modul penutup ini menggabungkan seluruh konsep 1 sampai 9 ke dalam pemecahan masalah geometri lingkaran komprehensif tingkat lanjut!',
    analogiDuniaNyata:
      'Perancangan kubah observatorium langit, penghitungan debit air terowongan gorong-gorong, dan pembuatan jendela kaca lengkung katedral.',
    diagramParams: {
      r: 10,
      theta: 90,
      showChord: true,
      showApothem: true,
      showSector: true,
      showSegment: true,
      showInscribed: true,
      highlight: 'segment',
    },
    rumusUtama: 'L_{\\text{gabungan}} = \\sum L_i, \\quad K_{\\text{gabungan}} = \\sum s_i + \\sum c_i',
    penurunanRumus: {
      judul: 'Strategi 4 Langkah Menyelesaikan Soal HOTS Geometri Lingkaran',
      langkah: [
        { teks: 'Langkah 1: Dekomposisi Gambar — Uraikan bangun kompleks menjadi elemen dasar (lingkaran, juring, segitiga, tembereng).' },
        { teks: 'Langkah 2: Identifikasi Parameter Kunci — Tentukan r, d, dan sudut pusat θ dari data yang diketahui.' },
        { teks: 'Langkah 3: Hitung Komponen Parsial — Cari panjang busur s, tali busur c, luas juring, dan luas segitiga secara bertahap.' },
        { teks: 'Langkah 4: Sintesis Akhir — Jumlahkan atau kurangkan komponen luas/keliling sesuai dengan daerah yang diminta soal.' },
      ],
      kesimpulan: 'Soal paling rumit sekalipun dapat dipecahkan dengan mudah jika didekomposisi secara runut.',
    },
    keteranganVariabel: [
      { simbol: 'r_1, r_2', nama: 'Jari-jari Berganda', satuan: 'cm, m', catatan: 'Digunakan jika terdapat dua lingkaran konsentris atau bersinggungan.' },
      { simbol: 'L_{\\text{arsir}}', nama: 'Luas Daerah Diarsir', satuan: 'cm², m²', catatan: 'Hasil operasi gabungan juring dan tembereng.' },
      { simbol: 'c', nama: 'Tali Busur Konstruksi', satuan: 'cm, m', catatan: '2r sin(θ/2).' },
    ],
    tipsPi:
      'Perhatikan bentuk simetri: seringkali daerah yang diarsir merupakan pengulangan simetris dari 2 atau 4 tembereng yang identik!',
    kesalahanUmum: [
      {
        mitos: 'Langsung menghitung rumus tanpa membuat sketsa diagram terlebih dahulu.',
        fakta: 'Membuat sketsa diagram geometris yang akurat membantu melihat dengan jelas bagian mana yang saling menjumlahkan atau saling mengurangi.',
        tips: 'Gunakan diagram interaktif untuk memverifikasi posisi setiap elemen sebelum menuliskan persamaan.',
      },
    ],
    contohSoal: [
      {
        id: '10-1',
        tingkat: 'HOTS',
        judul: 'Luas Lensa Cembung Ganda dari Dua Tembereng Simetris',
        konteksCerita: 'Dua buah lingkaran kongruen dengan jari-jari masing-masing 14 cm saling berpotongan sehingga titik pusat lingkaran pertama berada di tepi lingkaran kedua, membentuk daerah irisan lensa dengan sudut pusat 90° di kedua lingkaran.',
        diketahui: [
          { label: 'Jari-jari kedua lingkaran (r)', value: '14 cm' },
          { label: 'Sudut pusat kedua busur (θ)', value: '90°' },
          { label: 'Nilai π', value: '22/7' },
        ],
        ditanyakan: 'Berapakah luas daerah irisan (lensa) yang merupakan gabungan dua tembereng simetris?',
        diagramParams: { r: 14, theta: 90, showSegment: true, highlight: 'segment' },
        rumus: 'L_{\\text{lensa}} = 2 \\times L_{\\text{tembereng}} = 2 \\times \\left(L_{\\text{juring}} - L_{\\triangle}\\right)',
        substitusi: 'L = 2 \\times \\left(154 - 98\\right) = 2 \\times 56',
        langkahPerhitungan: [
          'Daerah irisan lensa dibentuk oleh dua tembereng 90° yang saling menempel pada tali busur yang sama.',
          'Hitung luas satu tembereng 90°: L_juring = ¼ × (22/7) × 14² = 154 cm².',
          'L_segitiga = ½ × 14 × 14 = 98 cm².',
          'Luas 1 tembereng = 154 - 98 = 56 cm².',
          'Karena lensa terdiri dari 2 tembereng simetris: L_total = 2 × 56 = 112 cm².',
        ],
        hasilAkhir: 'L_{\\text{lensa}} = 112',
        satuan: 'cm²',
        catatanKritis: 'Melihat bahwa bentuk daun/lensa adalah dua tembereng yang digabungkan menyederhanakan soal olimpiade ini menjadi sangat mudah.',
      },
      {
        id: '10-2',
        tingkat: 'HOTS',
        judul: 'Desain Kaca Patri Jendela Katedral Gotik',
        konteksCerita: 'Sebuah jendela katedral gotik memiliki bagian atas berupa setengah lingkaran berdiameter 28 cm. Di dalamnya terdapat ornamen segitiga dengan alas sepanjang diameter dan puncak di titik keliling atas. Bagian di luar segitiga diisi kaca berwarna biru.',
        diketahui: [
          { label: 'Diameter (d)', value: '28 cm, sehingga r = 14 cm' },
          { label: 'Tinggi segitiga puncak (t)', value: 'sama dengan jari-jari r = 14 cm' },
          { label: 'Nilai π', value: '22/7' },
        ],
        ditanyakan: 'Berapakah luas hamparan kaca berwarna biru tersebut?',
        diagramParams: { r: 14, theta: 180, showDiameter: true, showInscribed: true, highlight: 'segment' },
        rumus: 'L_{\\text{biru}} = L_{\\text{setengah lingkaran}} - L_{\\triangle}',
        substitusi: 'L_{\\text{biru}} = \\left(\\frac{1}{2} \\times \\frac{22}{7} \\times 14^2\\right) - \\left(\\frac{1}{2} \\times 28 \\times 14\\right)',
        langkahPerhitungan: [
          'Hitung luas setengah lingkaran: L_setengah = ½ × 616 = 308 cm².',
          'Hitung luas segitiga di dalamnya: Alas = diameter = 28 cm, Tinggi = jari-jari = 14 cm.',
          'L_segitiga = ½ × 28 × 14 = 196 cm².',
          'Kurangkan keduanya: L_biru = 308 - 196 = 112 cm².',
        ],
        hasilAkhir: 'L_{\\text{biru}} = 112',
        satuan: 'cm²',
        catatanKritis: 'Perhatikan bahwa daerah biru sebenarnya terdiri dari dua buah tembereng 90°: 56 cm² + 56 cm² = 112 cm²!',
      },
      {
        id: '10-3',
        tingkat: 'HOTS',
        judul: 'Total Biaya Pembuatan Taman Bertema Lingkaran Terintegrasi',
        konteksCerita: 'Sebuah taman kota berbentuk juring 120° dengan jari-jari 21 meter. Area tembereng ditanami rumput hias jepang dengan biaya Rp50.000/m², sedangkan area segitiga di dalamnya dipasang paving blok dengan biaya Rp80.000/m². (Gunakan π = 22/7 dan sin(120°) = ½√3 ≈ 0,866).',
        diketahui: [
          { label: 'Jari-jari taman (r)', value: '21 meter' },
          { label: 'Sudut pusat taman (θ)', value: '120°' },
          { label: 'Tarif rumput tembereng', value: 'Rp50.000 / m²' },
          { label: 'Tarif paving segitiga', value: 'Rp80.000 / m²' },
        ],
        ditanyakan: 'Berapakah total biaya pengerjaan taman tersebut?',
        diagramParams: { r: 21, theta: 120, showSector: true, showSegment: true, showTriangle: true, highlight: 'segment' },
        rumus: '\\text{Biaya Total} = (L_{\\text{tembereng}} \\times 50.000) + (L_{\\triangle} \\times 80.000)',
        substitusi: 'L_{\\text{juring}} = \\frac{1}{3} \\times \\frac{22}{7} \\times 21^2 = 462\\text{ m}^2',
        langkahPerhitungan: [
          'Hitung Luas Juring Total: L_juring = (120/360) × (22/7) × 441 = (1/3) × 1.386 = 462 m².',
          'Hitung Luas Segitiga: L_segitiga = ½ × r² × sin(120°) = ½ × 441 × 0,866 ≈ 190,95 m².',
          'Hitung Luas Tembereng: L_tembereng = 462 - 190,95 = 271,05 m².',
          'Hitung Biaya Rumput: 271,05 m² × Rp50.000 = Rp13.552.500.',
          'Hitung Biaya Paving: 190,95 m² × Rp80.000 = Rp15.276.000.',
          'Total Biaya: Rp13.552.500 + Rp15.276.000 = Rp28.828.500.',
        ],
        hasilAkhir: '\\text{Biaya} = \\text{Rp28.828.500}',
        satuan: 'Rupiah',
        catatanKritis: 'Soal ini menyatukan konsep luas juring, trigonometri segitiga 120°, tembereng, dan aplikasi aritmetika ekonomi nyata.',
      },
    ],
    latihanMandiri: [
      {
        id: 'lat-10-1',
        pertanyaan: 'Sebuah ornamen daun dibentuk dari dua buah tembereng 90° yang berhadapan pada lingkaran berjari-jari 7 cm dengan π = 22/7. Luas daun tersebut adalah...',
        pilihan: ['A. 14 cm²', 'B. 28 cm²', 'C. 56 cm²', 'D. 77 cm²', 'E. 98 cm²'],
        kunci: 1,
        pembahasan: 'Luas 1 tembereng 90° dengan r = 7 cm adalah 2/7 × 7² = 14 cm². Karena daun terdiri dari 2 tembereng, luas total = 2 × 14 = 28 cm².',
      },
      {
        id: 'lat-10-2',
        pertanyaan: 'Dalam soal gabungan geometri lingkaran, urutan dekomposisi yang paling tepat untuk mencari luas daerah tak beraturan adalah...',
        pilihan: ['A. Menebak luas secara visual', 'B. Membagi menjadi juring dan segitiga lalu mengurangkan', 'C. Menghitung keliling lalu membaginya dengan sudut', 'D. Mengalikan jari-jari dengan diameter', 'E. Menggunakan rumus segitiga sembarang tanpa lingkaran'],
        kunci: 1,
        pembahasan: 'Dekomposisi analitis paling sistematis adalah membagi daerah menjadi juring dan segitiga, lalu melakukan operasi penjumlahan atau pengurangan sesuai arsiran.',
      },
    ],
    narasiSuara:
      'Selamat telah sampai di modul kesepuluh, modul pamungkas geometri lingkaran. Di sini kita memadukan seluruh rumus yang telah kita pelajari sebelumnya: dari keliling, luas, busur, tali busur, apotema, segitiga, tembereng, hingga sudut pusat dan sudut keliling. Kunci utama memecahkan soal tingkat lanjut atau HOTS adalah menguraikan bentuk kompleks menjadi potongan-potongan sederhana yang kita kenal, menghitung luas dan panjangnya secara bertahap, lalu menggabungkannya kembali.',
  },
];
