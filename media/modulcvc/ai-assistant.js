/**
 * ══════════════════════════════════════════════════════════
 * AI ASSISTANT SUITE — GEOTALKMEDIA CVC MODUL
 * 1. AI Tutor "CVC Guide" (Floating Chatbot)
 * 2. AI Evaluator Esai Ecoliteracy "Head · Heart · Hands"
 * 3. AI Smart Highlighter & Term Explainer
 * ══════════════════════════════════════════════════════════
 */

(() => {
  // ── 1. CONFIG & STATE ──
  const STORAGE_KEY = 'GEOTALK_GEMINI_API_KEY';
  let apiKey = localStorage.getItem(STORAGE_KEY) || '';
  let chatHistory = [];
  let isAiGenerating = false;
  let activeEssayIndex = 0;

  // ── 2. CVC COMPREHENSIVE KNOWLEDGE BASE (Smart Fallback Engine) ──
  const CVC_GLOSSARY = {
    'silvofishery': {
      title: 'Silvofishery (Wanamina)',
      def: 'Sistem budidaya perikanan tradisional terpadu antara tambak air payau dengan pelestarian vegetasi mangrove.',
      context: 'Di CMC Clungup, silvofishery diterapkan agar masyarakat tetap memperoleh penghasilan ikan/udang tanpa membabat hutan bakau, di mana serasah daun mangrove menjadi sumber pakan alami bagi biota tambak.'
    },
    'carrying capacity': {
      title: 'Tourism Carrying Capacity (TCC)',
      def: 'Kapasitas daya dukung wisata: jumlah maksimum pengunjung yang dapat ditampung oleh suatu kawasan tanpa menimbulkan kerusakan lingkungan dan penurunan kualitas pengalaman wisata.',
      context: 'Di CMC (khususnya Pantai Tiga Warna), TCC dibatasi secara ketat maksimal 100 pengunjung per sesi (durasi 2 jam) untuk melindungi terumbu karang dan habitat penyu.'
    },
    'tcc': {
      title: 'Tourism Carrying Capacity (TCC)',
      def: 'Batas toleransi ekosistem wisata terhadap beban kunjungan manusia.',
      context: 'Diterapkan di Pantai Tiga Warna melalui reservasi online dan pemandu wajib, mencegah overcrowding yang merusak terumbu karang.'
    },
    'blue carbon': {
      title: 'Blue Carbon (Karbon Biru)',
      def: 'Karbon yang diserap dari atmosfer dan disimpan secara jangka panjang oleh ekosistem pesisir dan laut (mangrove, padang lamun, dan rawa payau).',
      context: 'Mangrove CMC menyimpan blue carbon 3-5 kali lebih padat di sedimen lumpurnya dibanding hutan daratan tropis. Kerusakan mangrove melepaskan kembali karbon ini ke udara.'
    },
    'akar napas': {
      title: 'Akar Napas (Pneumatofora)',
      def: 'Akar khusus yang tumbuh mencuat ke atas permukaan lumpur untuk mengambil oksigen langsung dari udara pada habitat tergenang berkadar oksigen rendah (anaerob).',
      context: 'Dimiliki oleh spesies Avicennia (api-api) dan Sonneratia di zona pasang surut terluar CMC. Akar ini sering terancam mati lemas jika tersumbat sampah plastik mikro.'
    },
    'akar tunjang': {
      title: 'Akar Tunjang (Stilt Root)',
      def: 'Akar adventif bercabang yang keluar dari batang pohon menuju ke substrat lumpur, berfungsi sebagai penopang pohon dari hempasan ombak besar.',
      context: 'Ciri khas genus Rhizophora (bakau) di CMC. Struktur rapat akar tunjang ini juga berfungsi sebagai perangkap sedimen lumpur (sediment trap) dan tempat sembunyi anak ikan.'
    },
    'apartemen ikan': {
      title: 'Apartemen Ikan (Fish Apartment)',
      def: 'Struktur terumbu karang buatan berbahan ramah lingkungan yang ditenggelamkan ke dasar laut sebagai habitat dan tempat berkembang biak ikan.',
      context: 'Inovasi konservasi di Pantai Tiga Warna untuk mempercepat pemulihan keanekaragaman hayati terumbu karang yang rusak akibat bom ikan di masa lalu.'
    },
    'checklist': {
      title: 'Sistem Checklist Barang Bawaan',
      def: 'Mekanisme pendataan dan pemeriksaan setiap item berpotensi sampah (bungkus plastik, botol, rokok) yang dibawa masuk oleh pengunjung di pos gerbang CMC.',
      context: 'Saat pulang, seluruh item diperiksa kembali. Jika ada 1 item sampah yang hilang/tidak dibawa keluar, pengunjung dikenakan sanksi denda Rp 100.000 per item.'
    },
    'negative externality': {
      title: 'Negative Externality (Eksternalitas Negatif)',
      def: 'Biaya atau dampak buruk yang dialami oleh pihak ketiga yang tidak terlibat dalam suatu aktivitas ekonomi/konsumsi.',
      context: 'Tercermin dari sampah plastik nelayan luar perairan yang terbawa arus laut dan tersangkut di mangrove CMC, di mana ranger komunitas CMC yang harus membersihkannya.'
    },
    'head heart hands': {
      title: 'Kerangka Ecoliteracy: Head · Heart · Hands',
      def: 'Pendekatan pembelajaran holistik dalam literasi lingkungan: Head (Pemahaman konsep ilmiah), Heart (Empati & nilai moral kepedulian), Hands (Keterampilan aksi & solusi praktis).',
      context: 'Digunakan dalam evaluasi asesmen Modul CVC untuk memastikan siswa tidak hanya hafal teori, tapi juga memiliki nurani dan kontribusi nyata menjaga bumi.'
    },
    'rhizophora': {
      title: 'Genus Rhizophora (Bakau)',
      def: 'Tumbuhan mangrove sejati dengan akar tunjang kokoh yang menancap di zona intertidal berombak sedang.',
      context: 'Spesies utama yang ditanam di Rumah Bibit dan program adopsi pohon mangrove di Pantai Clungup.'
    },
    'avicennia': {
      title: 'Genus Avicennia (Api-api)',
      def: 'Tumbuhan mangrove pionir di zona terluar yang paling sering tergenang air asin, memiliki akar napas berbentuk pasak (pneumatofora).',
      context: 'Mampu mengeluarkan kelebihan garam melalui kelenjar khusus di bawah daunnya.'
    },
    'zonasi': {
      title: 'Zonasi Spasial Ekosistem Mangrove',
      def: 'Pembagian zona vegetasi mangrove dari garis pantai ke arah daratan berdasarkan toleransi terhadap salinitas tanah dan frekuensi genangan pasang surut.',
      context: 'Di CMC: Zona Depan/Terluar (Avicennia & Sonneratia) -> Zona Tengah (Rhizophora) -> Zona Belakang/Darat (Bruguiera, Ceriops, Nypa).'
    }
  };

  const ESSAY_DATA = [
    {
      id: 1,
      tag: 'Esai 1 · Dampak 3 Dimensi · 🧠 HEAD · 15 Poin',
      title: 'Dampak Pencemaran Sampah Pesisir terhadap Dimensi Ekologis, Ekonomi, dan Sosial CMC',
      desc: 'Panduan: 100–130 kata. Jelaskan keterkaitan erat antara dimensi ekologis (kerusakan mangrove & terumbu karang), ekonomi (pendapatan nelayan & atraksi snorkeling), dan sosial (konflik sumber daya & kesehatan).',
      sample: 'Pencemaran sampah pesisir di CMC merusak ketiga pilar keberlanjutan secara berantai. Secara ekologis, sampah plastik yang menjerat akar napas mangrove (pneumatofora) menghambat respirasi pohon, memicu kematian vegetasi, serta melepaskan cadangan blue carbon ke atmosfer. Secara ekonomi, rusaknya terumbu karang menghilangkan daya tarik wisata snorkeling Pantai Tiga Warna dan memangkas hasil tangkapan ikan nelayan lokal, mengancam mata pencaharian warga Tambakrejo. Terakhir, secara sosial, penurunan ekonomi ini memicu gesekan perebutan sumber daya laut antarwarga serta ancaman mikroplastik pada kesehatan masyarakat. Kesimpulannya, degradasi ekologis secara langsung memiskinkan warga secara ekonomi dan mengancam kohesi sosial komunitas.',
      rubric: {
        head: 'Menganalisis keterkaitan rantai: Ekologi rusak -> Ekonomi nelayan/wisata turun -> Sosial konflik.',
        heart: 'Menunjukkan kepekaan terhadap beban kehidupan masyarakat pesisir Tambakrejo.',
        hands: 'Memahami bagaimana sistem konservasi CMC mencegah dampak 3 dimensi ini.'
      }
    },
    {
      id: 2,
      tag: 'Esai 2 · Refleksi Personal · ❤️ HEART · 15 Poin',
      title: 'Fakta CVC yang Paling Menggerakkan Kepedulianmu & Satu Komitmen Aksi Nyata',
      desc: 'Panduan: 80–100 kata. Wajib memuat 3 elemen: ① Satu fakta spesifik dari CVC, ② Refleksi mengapa menggerakkan secara pribadi, ③ Satu komitmen aksi nyata realistis.',
      sample: 'Fakta di CVC yang paling menggetarkan hati saya adalah transformasi warga Tambakrejo, yang dahulu terpaksa menebang mangrove dan membom karang demi bertahan hidup, kini berbalik menjadi pelindung terdepan dan ranger konservasi yang gigih. Fakta ini menyadarkan saya bahwa kerusakan alam sering kali berakar dari desakan ekonomi, bukan murni niat jahat. Sebagai wujud komitmen nyata, mulai minggu ini saya bertekad membawa tumbler dan tas belanja sendiri ke sekolah guna memutus rantai sampah plastik sekali pakai dari kehidupan sehari-hari.',
      rubric: {
        head: 'Akurasi fakta CVC spesifik (perubahan warga jadi ranger, penyerapan CO2, atau sistem denda).',
        heart: 'Kedalaman refleksi empati dan kejujuran nurani personal.',
        hands: 'Komitmen aksi nyata konkret, spesifik, dan realistis.'
      }
    },
    {
      id: 3,
      tag: 'Esai 3 · Skenario Pak Warsito · ❤️ HEART & 🧠 HEAD · 15 Poin',
      title: 'Empati, Dua Perspektif (Pak Warsito vs Ranger CMC), dan Konsep Negative Externality',
      desc: 'Panduan: 100–130 kata. Bahas skenario nelayan luar kawasan yang membuang plastik karena ketiadaan fasilitas kapal, dikaitkan dengan konsep eksternalitas negatif dan solusi tanpa menghakimi.',
      sample: 'Kasus Pak Warsito memperlihatkan dilema eksternalitas negatif lintas wilayah yang nyata. Dari perspektif Pak Warsito, ia tidak berniat jahat merusak alam; ketiadaan tempat sampah di perahu kecilnya serta minimnya edukasi pelabuhan memaksanya membuang sisa perbekalan ke laut demi keselamatan melaut. Namun dari sudut pandang Ranger CMC, sampah tersebut terbawa arus masuk ke akar mangrove Clungup yang dirawat bertahun-tahun, menimbulkan beban kerja dan kerugian ekologis yang tidak adil bagi komunitas. Solusi adil bukan sekadar menghakimi atau mendenda Pak Warsito, melainkan menyediakan kantong sampah jaring gratis bagi seluruh nelayan di dermaga pendaratan ikan serta merangkul paguyuban nelayan sekitar dalam program insentif penukaran sampah laut.',
      rubric: {
        head: 'Ketepatan konsep eksternalitas negatif dan dinamika arus laut.',
        heart: 'Empati mendalam tanpa menyalahkan nelayan secara sepihak.',
        hands: 'Solusi sistemik dan kolaboratif (kantong jaring, fasilitas dermaga).'
      }
    },
    {
      id: 4,
      tag: 'Esai 4 · Rencana Aksi Komunitas · 🙌 HANDS · 15 Poin',
      title: 'Rencana Aksi Berbasis Komunitas untuk Mengatasi Sampah Plastik Laut di Sekitar CMC',
      desc: 'Panduan: 100–130 kata. Rumuskan rencana aksi terukur (SMART), partisipasi warga, dan penerapan prinsip Triple Bottom Line.',
      sample: 'Untuk mengatasi sampah laut kiriman di luar kawasan CMC, saya merancang program "Jaring Nelayan Berdaya". Rencana aksi ini membekali 50 perahu nelayan tradisional dengan kantong jaring portabel untuk menampung sampah plastik selama melaut dalam target 3 bulan ke depan. Setiap 5 kg sampah plastik yang dibawa kembali ke dermaga dapat ditukarkan dengan voucer bahan bakar atau bibit ikan dari kas ekowisata CMC. Program ini menerapkan prinsip Triple Bottom Line: laut bersih dari plastik (ekologi), nelayan mendapat subsidi operasional (ekonomi), dan terbangun solidaritas antara komunitas pengelola CMC dengan paguyuban nelayan luar (sosial).',
      rubric: {
        head: 'Relevansi dengan data lapangan dan kerangka Triple Bottom Line.',
        heart: 'Semangat gotong royong dan inklusivitas sosial antar-komunitas.',
        hands: 'Target SMART (Spesifik, Terukur, Dapat dicapai, Realistis, Berbatas waktu).'
      }
    }
  ];

  // ── 3. CORE AI CALLER (Gemini API with Fallback) ──
  async function callGeminiApi(systemPrompt, userPrompt) {
    if (!apiKey) {
      // Fallback to local intelligence
      return null;
    }

    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${encodeURIComponent(apiKey)}`;
    const payload = {
      contents: [
        { role: 'user', parts: [{ text: `${systemPrompt}\n\nUser Question/Input:\n${userPrompt}` }] }
      ],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 800
      }
    };

    try {
      const resp = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!resp.ok) {
        console.warn('Gemini API returned status:', resp.status);
        return null;
      }
      const data = await resp.json();
      return data.candidates?.[0]?.content?.parts?.[0]?.text || null;
    } catch (e) {
      console.warn('Gemini fetch error, using local fallback:', e);
      return null;
    }
  }

  // ── 4. LOCAL FALLBACK GENERATOR FOR CHAT ──
  function generateLocalChatResponse(query) {
    const q = query.toLowerCase();

    // Check against glossary first
    for (const [key, item] of Object.entries(CVC_GLOSSARY)) {
      if (q.includes(key)) {
        return `**${item.title}**\n\n${item.def}\n\n📍 **Konteks di CMC Malang Selatan:**\n${item.context}\n\n*Apakah kamu ingin mempelajari lebih dalam tentang bagian ini?*`;
      }
    }

    if (q.includes('akar') || q.includes('napas') || q.includes('tunjang') || q.includes('pohon')) {
      return `**Adaptasi Akar Mangrove di Clungup (CMC):**\n\n` +
        `1. **Akar Tunjang (*Rhizophora* / Bakau):** Tumbuh mencuat dari batang bawah menuju lumpur seperti cakar ayam. Fungsinya menopang pohon dari guncangan ombak serta menjebak sedimen lumpur (*sediment trap*).\n` +
        `2. **Akar Napas (*Avicennia* / Api-api):** Tumbuh tegak lurus ke atas dari substrat lumpur seperti paku/pasak (*pneumatofora*). Berfungsi menyerap oksigen di lumpur payau yang minim oksigen.\n\n` +
        `*Catatan Penting:* Sampah plastik yang melilit akar napas dapat menyumbat pori-pori lenti-sel sehingga pohon mangrove mati lemas!`;
    }

    if (q.includes('denda') || q.includes('sampah') || q.includes('100.000') || q.includes('plastik') || q.includes('aturan')) {
      return `**Sistem Pengelolaan Sampah Unik di CMC:**\n\n` +
        `• **Pemeriksaan Checklist di Pintu Masuk:** Setiap bungkus makanan, botol plastik, kantong kresek, hingga puntung rokok dicatat satu per satu oleh ranger.\n` +
        `• **Pemeriksaan Pulang & Sanksi Denda:** Saat wisatawan hendak keluar, barang bawaan dihitung kembali. Jika ada 1 sampah yang hilang, dikenakan sanksi denda **Rp 100.000 per item** atau wajib kembali mencari sampah tersebut hingga ketemu.\n` +
        `• **Tujuan Edukatif:** Mengubah paradigma dari *"membuang sampah pada tempatnya"* menjadi *"membawa kembali sampah milikmu sendiri"* (Waste Footprint Reduction).`;
    }

    if (q.includes('daya dukung') || q.includes('tcc') || q.includes('kapasitas') || q.includes('kuota') || q.includes('tiga warna')) {
      return `**Tourism Carrying Capacity (TCC) di Pantai Tiga Warna:**\n\n` +
        `• **Batas Kuota:** Dibatasi maksimal **100 pengunjung per sesi** dengan durasi kunjungan 2 jam.\n` +
        `• **Wajib Didampingi Guide:** Setiap rombongan (maksimal 10 orang) wajib ditemani 1 pemandu lokal untuk mengawasi agar karang tidak terinjak.\n` +
        `• **Hari Libur Ekologis:** Pantai Tiga Warna ditutup berkala (setiap Kamis) untuk memberi waktu jeda alami bagi ekosistem memulihkan diri tanpa gangguan manusia.`;
    }

    if (q.includes('head') || q.includes('heart') || q.includes('hands') || q.includes('ecoliteracy')) {
      return `**Kerangka Ecoliteracy CVC (Head · Heart · Hands):**\n\n` +
        `🧠 **HEAD (Kepala):** Pemahaman ilmiah ekologis—misalnya tahu bahwa mangrove menyerap blue carbon dan melindungi garis pantai dari abrasi.\n\n` +
        `❤️ **HEART (Hati):** Empati dan nilai kepedulian—merasa terhubung dengan alam dan peka terhadap derita masyarakat pesisir saat ekosistem rusak.\n\n` +
        `🙌 **HANDS (Tangan):** Aksi nyata terukur—dari hal sederhana seperti mengurangi plastik sekali pakai hingga aktif dalam penanaman mangrove dan advokasi lingkungan.`;
    }

    if (q.includes('halo') || q.includes('hai') || q.includes('siapa') || q.includes('bisa apa')) {
      return `Halo! Saya **CVC AI Tutor**, asisten cerdas untuk Modul *Dinamika Lingkungan Hidup — Clungup Mangrove Conservation (CMC)*.\n\nKamu bisa bertanya tentang:\n` +
        `• Jenis dan adaptasi mangrove (*Rhizophora, Avicennia*)\n` +
        `• Sistem denda sampah dan checklist CVC\n` +
        `• Daya dukung wisata (*Carrying Capacity*)\n` +
        `• Solusi pencemaran dan blue carbon\n` +
        `• Bantuan menjawab soal Asesmen di Bab 07!`;
    }

    // Default informative response
    return `Pertanyaan yang bagus mengenai dinamika lingkungan CVC! Dalam konteks **CMC Malang Selatan**, keberhasilan restorasi mangrove dan terumbu karang berakar pada keterpaduan antara **sains ekologi (Head)**, **kepedulian masyarakat lokal (Heart)**, dan **regulasi lapangan yang konsisten (Hands)** seperti sistem denda sampah dan zonasi TCC.\n\nKamu juga bisa menanyakan istilah khusus seperti *silvofishery*, *akar tunjang*, atau *eksternalitas negatif* untuk penjelasan mendetail!`;
  }

  // ── 5. LOCAL ESSAY EVALUATOR (Head-Heart-Hands Algorithm) ──
  function evaluateEssayLocally(essayIdx, text) {
    const essay = ESSAY_DATA[essayIdx];
    const words = text.trim().split(/\s+/).filter(Boolean);
    const wordCount = words.length;
    const lower = text.toLowerCase();

    let headScore = 3;
    let heartScore = 3;
    let handsScore = 3;
    let headNote = '';
    let heartNote = '';
    let handsNote = '';
    let strength = '';
    let improve = '';

    // Check word count compliance
    const isGoodLength = wordCount >= 70 && wordCount <= 160;

    if (essay.id === 1) { // Dampak 3 Dimensi
      const hasEko = lower.includes('ekolog') || lower.includes('mangrove') || lower.includes('karang') || lower.includes('respirasi') || lower.includes('akar');
      const hasEkn = lower.includes('ekonomi') || lower.includes('nelayan') || lower.includes('wisata') || lower.includes('pendapatan') || lower.includes('tangkapan');
      const hasSos = lower.includes('sosial') || lower.includes('konflik') || lower.includes('warga') || lower.includes('masyarakat') || lower.includes('kesehatan') || lower.includes('mikroplastik');

      headScore = (hasEko && hasEkn && hasSos) ? 5 : ((hasEko && hasEkn) || (hasEko && hasSos)) ? 4 : 3;
      heartScore = lower.includes('empati') || lower.includes('peduli') || lower.includes('menderita') || lower.includes('terancam') || lower.includes('beban') ? 5 : 4;
      handsScore = lower.includes('solusi') || lower.includes('pencegah') || lower.includes('rantai') || lower.includes('sistem') || lower.includes('kelola') ? 5 : 4;

      headNote = hasEko && hasEkn && hasSos 
        ? 'Luar biasa! Ketiga dimensi (ekologi, ekonomi, sosial) diuraikan secara komprehensif dengan fakta ilmiah yang tepat.'
        : 'Konsep sudah baik, namun pastikan keterkaitan antara dimensi ekologi, ekonomi, dan sosial dipertegas secara seimbang.';
      heartNote = 'Terasa kepekaan empati terhadap dampak buruk kerusakan lingkungan bagi kehidupan warga lokal.';
      handsNote = 'Analisis alur dampak sudah logis dan terhubung dengan urgensi pengelolaan terpadu.';
      strength = 'Kemampuan menghubungkan rantai kausalitas: kerusakan ekologis berdampak langsung pada ekonomi nelayan dan harmoni sosial.';
      improve = wordCount < 90 ? 'Perbanyak kosakata teknis seperti pneumatofora, blue carbon, atau mikroplastik untuk memperkuat bobot ilmiah.' : 'Pertajam kalimat penutup dengan benang merah keberlanjutan.';

    } else if (essay.id === 2) { // Refleksi Personal & Komitmen
      const hasFakta = lower.includes('fakta') || lower.includes('tambakrejo') || lower.includes('ranger') || lower.includes('karang') || lower.includes('pohon') || lower.includes('denda') || lower.includes('100.000');
      const hasRefleksi = lower.includes('saya') || lower.includes('menyadari') || lower.includes('merasa') || lower.includes('menggetarkan') || lower.includes('hati') || lower.includes('pribadi');
      const hasAksi = lower.includes('akan') || lower.includes('mulai') || lower.includes('komitmen') || lower.includes('membawa') || lower.includes('tumbler') || lower.includes('menolak') || lower.includes('langkah');

      headScore = hasFakta ? 5 : 4;
      heartScore = hasRefleksi ? 5 : 4;
      handsScore = hasAksi ? 5 : 3;

      headNote = hasFakta ? 'Fakta spesifik CVC disebutkan dengan jelas dan kontekstual.' : 'Sebutkan satu fakta CVC yang lebih terukur (misal transformasi warga menjadi ranger).';
      heartNote = hasRefleksi ? 'Refleksi sangat personal, jujur, dan berakar dari penghayatan nurani.' : 'Ungkapkan perasaan atau perubahan cara pandangmu secara lebih terbuka.';
      handsNote = hasAksi ? 'Komitmen aksi nyata sangat konkret, terukur, dan realistis untuk dimulai saat ini.' : 'Buat aksi nyata lebih spesifik (misal membawa botol minum sendiri setiap hari).';
      strength = 'Refleksi autentik yang menghubungkan inspirasi dari pejuang konservasi CMC dengan komitmen perilaku sehari-hari.';
      improve = 'Pastikan aksi yang kamu janjikan memiliki batasan waktu (misal "mulai minggu ini").';

    } else if (essay.id === 3) { // Skenario Pak Warsito
      const hasEmpati = lower.includes('warsito') || lower.includes('nelayan') || lower.includes('fasilitas') || lower.includes('perahu') || lower.includes('keterbatasan');
      const hasDuaPerspektif = (lower.includes('ranger') || lower.includes('cmc')) && (lower.includes('nelayan') || lower.includes('warsito'));
      const hasEksternalitas = lower.includes('eksternalitas') || lower.includes('arus') || lower.includes('luar') || lower.includes('beban') || lower.includes('adil');

      headScore = hasEksternalitas ? 5 : 4;
      heartScore = hasEmpati ? 5 : 4;
      handsScore = lower.includes('solusi') || lower.includes('kantong') || lower.includes('jaring') || lower.includes('dermaga') || lower.includes('kolaborasi') ? 5 : 4;

      headNote = 'Pemahaman konsep eksternalitas negatif lintas teritorial sudah sangat tepat.';
      heartNote = 'Sikap empati tanpa menghakimi kondisi keterbatasan nelayan tradisional tersampaikan dengan bijak.';
      handsNote = 'Solusi kolaboratif berbasis kemitraan komunitas (bukan sanksi sepihak) menunjukkan kedewasaan berpikir.';
      strength = 'Keseimbangan dalam melihat dua sudut pandang: hak nelayan untuk mencari nafkah dan hak ranger untuk melindungi ekosistem.';
      improve = 'Rincikan langkah teknis penyediaan sarana penampung sampah ramah lingkungan di atas kapal kecil.';

    } else { // Esai 4 Aksi Komunitas
      const hasSMART = lower.includes('target') || lower.includes('bulan') || lower.includes('minggu') || lower.includes('50') || lower.includes('jumlah') || lower.includes('kg');
      const hasKomunitas = lower.includes('komunitas') || lower.includes('warga') || lower.includes('paguyuban') || lower.includes('bersama') || lower.includes('nelayan');
      const hasTBL = lower.includes('ekologi') || lower.includes('ekonomi') || lower.includes('sosial') || lower.includes('triple bottom line') || lower.includes('berkelanjutan');

      headScore = hasTBL ? 5 : 4;
      heartScore = hasKomunitas ? 5 : 4;
      handsScore = hasSMART ? 5 : 3;

      headNote = 'Rencana aksi berbasis bukti dan selaras dengan prinsip Triple Bottom Line.';
      heartNote = 'Mengutamakan pemberdayaan warga lokal serta menghargai kearifan sosial.';
      handsNote = hasSMART ? 'Target implementasi SMART (Spesifik, Terukur, Realistis) tercermin kuat.' : 'Tentukan jumlah target dan durasi pelaksanaan agar rencana lebih terukur.';
      strength = 'Rancangan aksi aplikatif yang memadukan insentif ekonomi dengan pelestarian laut.';
      improve = 'Tambahkan indikator keberhasilan monitoring berkala setiap bulan.';
    }

    if (!isGoodLength) {
      headScore = Math.max(2, headScore - 1);
    }

    const totalScore = headScore + heartScore + handsScore;
    let predicate = 'Sangat Baik (Ecoliterate)';
    if (totalScore >= 14) predicate = 'Istimewa — Sangat Ecoliterate! 🌟';
    else if (totalScore >= 11) predicate = 'Bagus & Konseptual 👍';
    else predicate = 'Cukup — Butuh Penguatan Konsep 💡';

    return {
      totalScore,
      maxScore: 15,
      predicate,
      headScore,
      heartScore,
      handsScore,
      headNote,
      heartNote,
      handsNote,
      strength,
      improve
    };
  }

  // ── 6. INITIALIZE UI ELEMENTS ──
  function initUI() {
    // 6.1 Create Floating Action Button (FAB)
    const fab = document.createElement('div');
    fab.className = 'cvc-ai-fab';
    fab.id = 'cvcAiFab';
    fab.innerHTML = `
      <div class="fab-icon-wrap">
        <span>🌿</span>
        <span class="pulse-dot"></span>
      </div>
      <span>Tanya AI CVC</span>
    `;
    document.body.appendChild(fab);

    // 6.2 Create Floating Chat Window
    const chatWindow = document.createElement('div');
    chatWindow.className = 'cvc-chat-window';
    chatWindow.id = 'cvcChatWindow';
    chatWindow.innerHTML = `
      <div class="cvc-chat-header">
        <div class="cvc-chat-title-group">
          <div class="cvc-chat-avatar">🌱</div>
          <div class="cvc-chat-title">
            <h3>CVC AI Tutor</h3>
            <p><span class="mode-badge" id="cvcAiModeBadge">${apiKey ? 'Gemini 1.5 Flash' : 'Smart CVC Engine'}</span> • Online</p>
          </div>
        </div>
        <div class="cvc-chat-actions">
          <button class="cvc-icon-btn" id="cvcSettingsBtn" title="Pengaturan API Key">⚙️</button>
          <button class="cvc-icon-btn" id="cvcClearChatBtn" title="Hapus Riwayat">🗑️</button>
          <button class="cvc-icon-btn" id="cvcCloseChatBtn" title="Tutup Chat">✕</button>
        </div>
      </div>
      <div class="cvc-chat-messages" id="cvcChatMsgs">
        <div class="cvc-msg ai">
          <div class="cvc-msg-bubble">
            Halo! Saya <strong>CVC AI Tutor</strong> 🌿.<br>
            Saya siap membantumu mempelajari materi <strong>Dinamika Lingkungan Hidup CMC Malang</strong>, memahami adaptasi mangrove, mengulas sistem denda sampah, atau membimbing latihan esai di Bab 07!
          </div>
        </div>
      </div>
      <div class="cvc-quick-chips" id="cvcQuickChips">
        <button class="cvc-chip" data-q="Jelaskan fungsi akar tunjang vs akar napas di Clungup">🌱 Akar Tunjang vs Akar Napas</button>
        <button class="cvc-chip" data-q="Mengapa di CMC sampah dihitung dan didenda Rp 100.000?">🗑️ Sistem Denda Sampah</button>
        <button class="cvc-chip" data-q="Bagaimana penerapan TCC kuota di Pantai Tiga Warna?">⚖️ Kuota TCC Tiga Warna</button>
        <button class="cvc-chip" data-q="Apa itu sistem silvofishery di Clungup?">🐟 Silvofishery (Wanamina)</button>
        <button class="cvc-chip" data-q="Jelaskan kerangka Head, Heart, Hands">🧠 Head · Heart · Hands</button>
      </div>
      <form class="cvc-chat-form" id="cvcChatForm">
        <input type="text" class="cvc-chat-input" id="cvcChatInput" placeholder="Tanyakan seputar materi CVC..." autocomplete="off">
        <button type="button" class="cvc-mic-btn" id="cvcMicBtn" title="Tanya lewat Suara">🎙️</button>
        <button type="submit" class="cvc-send-btn" id="cvcSendBtn" title="Kirim">➤</button>
      </form>
    `;
    document.body.appendChild(chatWindow);

    // 6.3 Create Smart Highlighter Tooltip & Modal
    const tooltip = document.createElement('div');
    tooltip.className = 'cvc-highlight-tooltip';
    tooltip.id = 'cvcHighlightTooltip';
    tooltip.innerHTML = `<span>💡</span> Jelaskan istilah ini`;
    document.body.appendChild(tooltip);

    const termModal = document.createElement('div');
    termModal.className = 'cvc-term-modal-backdrop';
    termModal.id = 'cvcTermModal';
    termModal.innerHTML = `
      <div class="cvc-term-modal">
        <div class="cvc-term-header">
          <div>
            <span class="cvc-term-badge">Glosarium CVC</span>
            <h4 class="cvc-term-title" id="cvcModalTermTitle">Istilah Lingkungan</h4>
          </div>
          <button class="cvc-icon-btn" id="cvcCloseTermModal">✕</button>
        </div>
        <div class="cvc-term-body" id="cvcModalTermBody">
          Definisi istilah...
        </div>
        <div class="cvc-term-context-box" id="cvcModalTermContextWrap">
          <h6>Konteks di CMC Malang Selatan</h6>
          <p id="cvcModalTermContext">Contoh penerapan...</p>
        </div>
        <div class="cvc-term-actions">
          <button class="cvc-term-btn secondary" id="cvcCloseTermModal2">Tutup</button>
          <button class="cvc-term-btn primary" id="cvcAskInChatBtn">Tanya Lebih Lanjut di Chatbot ➤</button>
        </div>
      </div>
    `;
    document.body.appendChild(termModal);

    // 6.4 Create API Key Settings Modal
    const settingsModal = document.createElement('div');
    settingsModal.className = 'cvc-term-modal-backdrop';
    settingsModal.id = 'cvcSettingsModal';
    settingsModal.innerHTML = `
      <div class="cvc-term-modal cvc-settings-modal">
        <div class="cvc-term-header">
          <div>
            <span class="cvc-term-badge">Pengaturan AI</span>
            <h4 class="cvc-term-title">Google Gemini API</h4>
          </div>
          <button class="cvc-icon-btn" id="cvcCloseSettingsBtn">✕</button>
        </div>
        <div class="cvc-term-body">
          <p style="font-size:12.5px;color:rgba(184,228,204,0.85);margin-bottom:12px;">
            Masukkan API Key Google Gemini Anda untuk mengaktifkan kecerdasan generatif langsung (Live Gemini 1.5 Flash).
          </p>
          <label style="font-size:11px;font-family:'DM Mono',monospace;color:var(--mint);text-transform:uppercase;">
            Gemini API Key:
          </label>
          <input type="password" id="cvcApiKeyInput" class="cvc-input-field" placeholder="AIzaSy..." value="${apiKey}">
          <p style="font-size:11px;color:rgba(184,228,204,0.6);margin-top:8px;">
            *Kunci disimpan secara lokal di browser Anda (localStorage). Jika dikosongkan, sistem otomatis menggunakan <strong>Smart CVC Engine</strong> (100% offline & handal).
          </p>
        </div>
        <div class="cvc-term-actions" style="margin-top:18px;">
          <button class="cvc-term-btn secondary" id="cvcClearKeyBtn">Gunakan Mode Offline</button>
          <button class="cvc-term-btn primary" id="cvcSaveKeyBtn">Simpan Pengaturan</button>
        </div>
      </div>
    `;
    document.body.appendChild(settingsModal);

    // 6.5 Render Essay Evaluator into Bab 07
    injectEssayEvaluator();

    // 6.6 Attach Event Listeners
    attachEventListeners();
  }

  // ── 7. INJECT ESSAY EVALUATOR COMPONENT ──
  function injectEssayEvaluator() {
    const asesmenSection = document.getElementById('asesmen');
    if (!asesmenSection) return;

    // Find the short essay heading in Bab 07
    const headings = asesmenSection.querySelectorAll('h3');
    let targetHeading = null;
    headings.forEach(h => {
      if (h.innerText.includes('Bagian B') || h.innerText.includes('Esai')) {
        targetHeading = h;
      }
    });

    const evalContainer = document.createElement('div');
    evalContainer.className = 'cvc-evaluator-card';
    evalContainer.id = 'cvcEssayEvaluator';
    evalContainer.innerHTML = `
      <div class="cvc-eval-header">
        <div>
          <span class="cvc-eval-badge">⚡ Interactive AI Formative Assessment</span>
          <h3 class="cvc-eval-title">Simulasi &amp; Evaluator Esai Ecoliteracy</h3>
          <p class="cvc-eval-desc">
            Ketik jawaban esaimu di bawah ini. AI Evaluator akan menganalisis argumentasimu secara instan berdasarkan rubrik <strong>Head (Pengetahuan)</strong>, <strong>Heart (Empati Lingkungan)</strong>, dan <strong>Hands (Aksi Nyata)</strong>.
          </p>
        </div>
      </div>

      <!-- Soal Selector Tabs -->
      <div class="cvc-essay-selector" id="cvcEssaySelector">
        ${ESSAY_DATA.map((item, idx) => `
          <button class="cvc-essay-btn ${idx === 0 ? 'active' : ''}" data-idx="${idx}">
            <span class="badge-num">SOAL 0${item.id}</span>
            <strong>${item.title.length > 35 ? item.title.substring(0, 35) + '...' : item.title}</strong>
          </button>
        `).join('')}
      </div>

      <!-- Active Prompt Detail -->
      <div class="cvc-active-prompt-box">
        <h4 id="cvcActivePromptTitle">${ESSAY_DATA[0].title}</h4>
        <p id="cvcActivePromptDesc">${ESSAY_DATA[0].desc}</p>
      </div>

      <!-- Essay Input -->
      <div class="cvc-essay-input-wrap">
        <textarea class="cvc-essay-textarea" id="cvcEssayTextarea" placeholder="Tuliskan analisis atau jawabanmu di sini..."></textarea>
        <div class="cvc-word-counter" id="cvcWordCounter">0 kata</div>
      </div>

      <!-- Action Buttons -->
      <div class="cvc-eval-actions">
        <button class="cvc-sample-btn" id="cvcLoadSampleBtn">📝 Muat Contoh Jawaban Ideal</button>
        <button class="cvc-run-eval-btn" id="cvcRunEvalBtn">
          <span>🧠</span> Analisis Jawaban dengan AI
        </button>
      </div>

      <!-- Evaluation Result Container -->
      <div class="cvc-eval-results" id="cvcEvalResults">
        <div class="cvc-score-banner">
          <div>
            <div style="font-size:11px;font-family:'DM Mono',monospace;color:var(--mint);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:4px;">Skor Asesmen Ecoliteracy</div>
            <div class="cvc-score-badge-large">
              <span class="score-num" id="cvcScoreNum">0</span>
              <span class="score-max">/ 15 Poin</span>
            </div>
          </div>
          <div class="cvc-score-predicate" id="cvcScorePredicate">Mengevaluasi...</div>
        </div>

        <!-- Head Heart Hands Breakdown -->
        <div class="cvc-rubric-grid">
          <!-- HEAD -->
          <div class="cvc-rubric-box head">
            <div class="cvc-rubric-header">
              <span class="cvc-rubric-title">🧠 HEAD (Pengetahuan)</span>
              <span class="cvc-rubric-score" id="cvcHeadScore">0 / 5</span>
            </div>
            <div class="cvc-rubric-bar">
              <div class="cvc-rubric-fill" id="cvcHeadFill" style="width: 0%"></div>
            </div>
            <p class="cvc-rubric-text" id="cvcHeadNote">Evaluasi konsep ilmiah dan data CVC...</p>
          </div>

          <!-- HEART -->
          <div class="cvc-rubric-box heart">
            <div class="cvc-rubric-header">
              <span class="cvc-rubric-title">❤️ HEART (Empati &amp; Nilai)</span>
              <span class="cvc-rubric-score" id="cvcHeartScore">0 / 5</span>
            </div>
            <div class="cvc-rubric-bar">
              <div class="cvc-rubric-fill" id="cvcHeartFill" style="width: 0%"></div>
            </div>
            <p class="cvc-rubric-text" id="cvcHeartNote">Evaluasi kedalaman refleksi dan rasa peduli...</p>
          </div>

          <!-- HANDS -->
          <div class="cvc-rubric-box hands">
            <div class="cvc-rubric-header">
              <span class="cvc-rubric-title">🙌 HANDS (Aksi Nyata)</span>
              <span class="cvc-rubric-score" id="cvcHandsScore">0 / 5</span>
            </div>
            <div class="cvc-rubric-bar">
              <div class="cvc-rubric-fill" id="cvcHandsFill" style="width: 0%"></div>
            </div>
            <p class="cvc-rubric-text" id="cvcHandsNote">Evaluasi kelayakan dan dampak aksi konkret...</p>
          </div>
        </div>

        <!-- Qualitative Feedback -->
        <div class="cvc-feedback-section">
          <div class="cvc-feedback-card strength">
            <h5>✅ Kelebihan Jawabanmu</h5>
            <p id="cvcFeedbackStrength">Analisis kekuatan argumen...</p>
          </div>
          <div class="cvc-feedback-card improve">
            <h5>🎯 Saran Peningkatan (Tips Menuju 15/15)</h5>
            <p id="cvcFeedbackImprove">Langkah penyempurnaan...</p>
          </div>
        </div>
      </div>
    `;

    if (targetHeading && targetHeading.nextElementSibling) {
      targetHeading.parentNode.insertBefore(evalContainer, targetHeading.nextElementSibling.nextElementSibling);
    } else {
      asesmenSection.querySelector('.container')?.appendChild(evalContainer);
    }
  }

  // ── 8. EVENT ATTACHMENT & LOGIC ──
  function attachEventListeners() {
    const fab = document.getElementById('cvcAiFab');
    const chatWindow = document.getElementById('cvcChatWindow');
    const closeChatBtn = document.getElementById('cvcCloseChatBtn');
    const clearChatBtn = document.getElementById('cvcClearChatBtn');
    const chatForm = document.getElementById('cvcChatForm');
    const chatInput = document.getElementById('cvcChatInput');
    const chatMsgs = document.getElementById('cvcChatMsgs');
    const quickChips = document.getElementById('cvcQuickChips');
    const micBtn = document.getElementById('cvcMicBtn');

    // Settings Modal
    const settingsBtn = document.getElementById('cvcSettingsBtn');
    const settingsModal = document.getElementById('cvcSettingsModal');
    const closeSettingsBtn = document.getElementById('cvcCloseSettingsBtn');
    const apiKeyInput = document.getElementById('cvcApiKeyInput');
    const saveKeyBtn = document.getElementById('cvcSaveKeyBtn');
    const clearKeyBtn = document.getElementById('cvcClearKeyBtn');
    const modeBadge = document.getElementById('cvcAiModeBadge');

    // Highlighter
    const tooltip = document.getElementById('cvcHighlightTooltip');
    const termModal = document.getElementById('cvcTermModal');
    const closeTermModal = document.getElementById('cvcCloseTermModal');
    const closeTermModal2 = document.getElementById('cvcCloseTermModal2');
    const askInChatBtn = document.getElementById('cvcAskInChatBtn');
    let currentSelectedTerm = '';

    // Evaluator
    const essayBtns = document.querySelectorAll('.cvc-essay-btn');
    const activePromptTitle = document.getElementById('cvcActivePromptTitle');
    const activePromptDesc = document.getElementById('cvcActivePromptDesc');
    const essayTextarea = document.getElementById('cvcEssayTextarea');
    const wordCounter = document.getElementById('cvcWordCounter');
    const loadSampleBtn = document.getElementById('cvcLoadSampleBtn');
    const runEvalBtn = document.getElementById('cvcRunEvalBtn');
    const evalResults = document.getElementById('cvcEvalResults');

    // 8.1 Chat Window Toggles
    fab.addEventListener('click', () => {
      chatWindow.classList.toggle('open');
      if (chatWindow.classList.contains('open')) {
        chatInput.focus();
      }
    });

    closeChatBtn.addEventListener('click', () => {
      chatWindow.classList.remove('open');
    });

    clearChatBtn.addEventListener('click', () => {
      chatMsgs.innerHTML = `
        <div class="cvc-msg ai">
          <div class="cvc-msg-bubble">
            Riwayat chat telah dibersihkan. Ada materi CVC yang ingin kamu diskusikan lagi? 🌿
          </div>
        </div>
      `;
    });

    // 8.2 Settings Modal
    settingsBtn.addEventListener('click', () => {
      apiKeyInput.value = apiKey;
      settingsModal.classList.add('show');
    });

    closeSettingsBtn.addEventListener('click', () => {
      settingsModal.classList.remove('show');
    });

    saveKeyBtn.addEventListener('click', () => {
      const val = apiKeyInput.value.trim();
      apiKey = val;
      if (val) {
        localStorage.setItem(STORAGE_KEY, val);
        modeBadge.textContent = 'Gemini 1.5 Flash';
      } else {
        localStorage.removeItem(STORAGE_KEY);
        modeBadge.textContent = 'Smart CVC Engine';
      }
      settingsModal.classList.remove('show');
    });

    clearKeyBtn.addEventListener('click', () => {
      apiKey = '';
      apiKeyInput.value = '';
      localStorage.removeItem(STORAGE_KEY);
      modeBadge.textContent = 'Smart CVC Engine';
      settingsModal.classList.remove('show');
    });

    // 8.3 Send Chat Message
    async function handleSendMessage(text) {
      if (!text || isAiGenerating) return;
      isAiGenerating = true;

      // Append User message
      const userMsg = document.createElement('div');
      userMsg.className = 'cvc-msg user';
      userMsg.innerHTML = `<div class="cvc-msg-bubble">${escapeHtml(text)}</div>`;
      chatMsgs.appendChild(userMsg);
      chatMsgs.scrollTop = chatMsgs.scrollHeight;

      // Append Typing Indicator
      const typing = document.createElement('div');
      typing.className = 'cvc-msg ai';
      typing.id = 'cvcTypingIndicator';
      typing.innerHTML = `<div class="cvc-typing"><span></span><span></span><span></span></div>`;
      chatMsgs.appendChild(typing);
      chatMsgs.scrollTop = chatMsgs.scrollHeight;

      // Call API or Fallback
      let aiText = '';
      if (apiKey) {
        const sys = `Anda adalah 'CVC AI Tutor', asisten cerdas untuk Modul Geografi SMA Fase F 'Dinamika Lingkungan Hidup' di Clungup Mangrove Conservation (CMC) Malang Selatan. Jawab dengan ramah, berbasis sains ekologis, selalu sertakan contoh nyata di CMC (seperti zonasi Rhizophora vs Avicennia, silvofishery, sistem checklist dan denda sampah Rp 100.000, TCC 100 orang di Pantai Tiga Warna, apartemen ikan), serta gunakan kerangka berpikir Head (Pengetahuan), Heart (Empati), Hands (Aksi). Gunakan pemformatan tebal dan poin ringkas.`;
        aiText = await callGeminiApi(sys, text);
      }

      if (!aiText) {
        // Fallback to rich local CVC engine
        aiText = generateLocalChatResponse(text);
      }

      // Remove typing
      const typingEl = document.getElementById('cvcTypingIndicator');
      if (typingEl) typingEl.remove();

      // Append AI Message
      const aiMsg = document.createElement('div');
      aiMsg.className = 'cvc-msg ai';
      aiMsg.innerHTML = `<div class="cvc-msg-bubble">${formatMarkdown(aiText)}</div>`;
      chatMsgs.appendChild(aiMsg);
      chatMsgs.scrollTop = chatMsgs.scrollHeight;

      isAiGenerating = false;
    }

    chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = chatInput.value.trim();
      if (val) {
        chatInput.value = '';
        handleSendMessage(val);
      }
    });

    // Quick Chips
    quickChips.addEventListener('click', (e) => {
      const chip = e.target.closest('.cvc-chip');
      if (chip && chip.dataset.q) {
        handleSendMessage(chip.dataset.q);
      }
    });

    // Web Speech API
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.lang = 'id-ID';
      recognition.continuous = false;
      recognition.interimResults = false;

      let isListening = false;
      micBtn.addEventListener('click', () => {
        if (!isListening) {
          try {
            recognition.start();
            isListening = true;
            micBtn.classList.add('listening');
          } catch (err) {
            console.warn(err);
          }
        } else {
          recognition.stop();
          isListening = false;
          micBtn.classList.remove('listening');
        }
      });

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        chatInput.value = transcript;
        isListening = false;
        micBtn.classList.remove('listening');
        handleSendMessage(transcript);
      };

      recognition.onerror = () => {
        isListening = false;
        micBtn.classList.remove('listening');
      };
      recognition.onend = () => {
        isListening = false;
        micBtn.classList.remove('listening');
      };
    } else {
      micBtn.style.display = 'none';
    }

    // 8.4 Smart Highlighter & Term Explainer
    document.addEventListener('mouseup', (e) => {
      // Don't trigger if clicked inside chat or modals
      if (e.target.closest('#cvcChatWindow') || e.target.closest('#cvcTermModal') || e.target.closest('#cvcSettingsModal')) {
        return;
      }

      const selection = window.getSelection();
      const selectedText = selection.toString().trim();

      if (selectedText.length >= 3 && selectedText.length <= 45) {
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();

        tooltip.style.left = `${rect.left + rect.width / 2 + window.scrollX}px`;
        tooltip.style.top = `${rect.top + window.scrollY}px`;
        tooltip.style.display = 'flex';
        currentSelectedTerm = selectedText;
      } else {
        tooltip.style.display = 'none';
      }
    });

    tooltip.addEventListener('click', async () => {
      tooltip.style.display = 'none';
      if (!currentSelectedTerm) return;

      const titleEl = document.getElementById('cvcModalTermTitle');
      const bodyEl = document.getElementById('cvcModalTermBody');
      const contextEl = document.getElementById('cvcModalTermContext');
      const contextWrap = document.getElementById('cvcModalTermContextWrap');

      titleEl.textContent = currentSelectedTerm;
      bodyEl.textContent = 'Mencari penjelasan istilah dalam konteks CVC...';
      contextWrap.style.display = 'none';
      termModal.classList.add('show');

      const lower = currentSelectedTerm.toLowerCase();
      let match = null;
      for (const [key, item] of Object.entries(CVC_GLOSSARY)) {
        if (lower.includes(key) || key.includes(lower)) {
          match = item;
          break;
        }
      }

      if (match) {
        titleEl.textContent = match.title;
        bodyEl.textContent = match.def;
        contextEl.textContent = match.context;
        contextWrap.style.display = 'block';
      } else if (apiKey) {
        // Fetch from Gemini live
        const prompt = `Definisikan istilah "${currentSelectedTerm}" secara ringkas (1-2 kalimat) untuk siswa SMA, lalu berikan 1 kalimat contoh relevansinya dalam konteks konservasi mangrove, pesisir, atau lingkungan di CMC Malang Selatan.`;
        const res = await callGeminiApi('Anda ahli geografi lingkungan CVC.', prompt);
        if (res) {
          bodyEl.innerHTML = formatMarkdown(res);
        } else {
          bodyEl.textContent = `Istilah "${currentSelectedTerm}" merupakan konsep penting dalam dinamika lingkungan hidup dan studi ekosistem pesisir.`;
        }
      } else {
        bodyEl.textContent = `Istilah "${currentSelectedTerm}" berkaitan erat dengan kajian dinamika lingkungan hidup, ekosistem pesisir, dan tata kelola konservasi berbasis masyarakat di CMC Malang Selatan.`;
      }
    });

    closeTermModal.addEventListener('click', () => termModal.classList.remove('show'));
    closeTermModal2.addEventListener('click', () => termModal.classList.remove('show'));

    askInChatBtn.addEventListener('click', () => {
      termModal.classList.remove('show');
      chatWindow.classList.add('open');
      handleSendMessage(`Tolong jelaskan lebih dalam mengenai konsep "${currentSelectedTerm}" dalam konteks ekosistem CMC!`);
    });

    // 8.5 Evaluator Logic
    essayBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        essayBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeEssayIndex = parseInt(btn.dataset.idx, 10);
        const cur = ESSAY_DATA[activeEssayIndex];
        activePromptTitle.textContent = cur.title;
        activePromptDesc.textContent = cur.desc;
        essayTextarea.value = '';
        wordCounter.textContent = '0 kata';
        evalResults.classList.remove('show');
      });
    });

    essayTextarea.addEventListener('input', () => {
      const words = essayTextarea.value.trim().split(/\s+/).filter(Boolean);
      wordCounter.textContent = `${words.length} kata`;
    });

    loadSampleBtn.addEventListener('click', () => {
      const cur = ESSAY_DATA[activeEssayIndex];
      essayTextarea.value = cur.sample;
      const words = cur.sample.trim().split(/\s+/).filter(Boolean);
      wordCounter.textContent = `${words.length} kata`;
      essayTextarea.focus();
    });

    runEvalBtn.addEventListener('click', async () => {
      const text = essayTextarea.value.trim();
      if (!text) {
        alert('Silakan tuliskan jawabanmu terlebih dahulu sebelum meminta analisis AI!');
        essayTextarea.focus();
        return;
      }

      runEvalBtn.disabled = true;
      runEvalBtn.innerHTML = `<span>⏳</span> Menganalisis Jawaban...`;

      let evalData = null;

      // Try Live Gemini with Structured JSON Prompt
      if (apiKey) {
        const cur = ESSAY_DATA[activeEssayIndex];
        const prompt = `Evaluasi jawaban esai siswa berikut untuk soal "${cur.title}":
        
Jawaban Siswa:
"${text}"

Gunakan rubrik:
- HEAD (Pengetahuan Ilmiah & Fakta CVC): skor 1-5
- HEART (Empati & Kepekaan Nilai Lingkungan): skor 1-5
- HANDS (Aksi Nyata & Kelayakan Solusi): skor 1-5

Keluarkan HANYA format JSON valid tanpa tanda kutip markdown backticks, dengan struktur:
{
  "totalScore": 14,
  "headScore": 5,
  "heartScore": 5,
  "handsScore": 4,
  "headNote": "...",
  "heartNote": "...",
  "handsNote": "...",
  "strength": "...",
  "improve": "..."
}`;

        try {
          const raw = await callGeminiApi('Anda adalah penilai esai ahli ecoliteracy CVC.', prompt);
          if (raw) {
            const clean = raw.replace(/```json/gi, '').replace(/```/g, '').trim();
            evalData = JSON.parse(clean);
          }
        } catch (e) {
          console.warn('Failed parsing Gemini evaluation JSON, falling back to local:', e);
        }
      }

      if (!evalData) {
        evalData = evaluateEssayLocally(activeEssayIndex, text);
      }

      // Render Results
      document.getElementById('cvcScoreNum').textContent = evalData.totalScore || (evalData.headScore + evalData.heartScore + evalData.handsScore);
      document.getElementById('cvcScorePredicate').textContent = evalData.predicate || (evalData.totalScore >= 13 ? 'Sangat Ecoliterate! 🌟' : 'Bagus & Konseptual 👍');

      document.getElementById('cvcHeadScore').textContent = `${evalData.headScore} / 5`;
      document.getElementById('cvcHeadFill').style.width = `${(evalData.headScore / 5) * 100}%`;
      document.getElementById('cvcHeadNote').textContent = evalData.headNote;

      document.getElementById('cvcHeartScore').textContent = `${evalData.heartScore} / 5`;
      document.getElementById('cvcHeartFill').style.width = `${(evalData.heartScore / 5) * 100}%`;
      document.getElementById('cvcHeartNote').textContent = evalData.heartNote;

      document.getElementById('cvcHandsScore').textContent = `${evalData.handsScore} / 5`;
      document.getElementById('cvcHandsFill').style.width = `${(evalData.handsScore / 5) * 100}%`;
      document.getElementById('cvcHandsNote').textContent = evalData.handsNote;

      document.getElementById('cvcFeedbackStrength').textContent = evalData.strength;
      document.getElementById('cvcFeedbackImprove').textContent = evalData.improve;

      evalResults.classList.add('show');
      evalResults.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

      runEvalBtn.disabled = false;
      runEvalBtn.innerHTML = `<span>🧠</span> Analisis Jawaban dengan AI`;
    });
  }

  // ── 9. UTILITY HELPERS ──
  function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function formatMarkdown(text) {
    let html = escapeHtml(text);
    // Bold **text**
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    // Bullet points * or -
    html = html.replace(/^\s*[\*\-]\s+(.*)$/gm, '<li>$1</li>');
    html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');
    // Line breaks
    html = html.replace(/\n\n/g, '<br><br>');
    html = html.replace(/\n/g, '<br>');
    return html;
  }

  // Initialize once DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initUI);
  } else {
    initUI();
  }
})();
