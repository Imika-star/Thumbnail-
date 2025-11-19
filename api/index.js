export default function handler(req, res) {
  const THUMBNAILS = [
    "https://idweb.tech/api/preview.php?file=oussrgo9.jpg",
    "https://idweb.tech/api/preview.php?file=xfhn3krg.jpg",
    "https://idweb.tech/api/preview.php?file=f2jalojz.jpg"
  ];

  const BOT_NUMBERS = [
    "62857526150233",
  ];

  // teks pra-isi untuk pesan WA (ubah sesuai kebutuhan)
  const DEFAULT_WA_TEXT = ".menu";

  function randomThumb() {
    return THUMBNAILS[Math.floor(Math.random() * THUMBNAILS.length)];
  }

  function isBotLike(headers) {
    const ua = (headers["user-agent"] || "").toLowerCase();

    const botKeywords = [
      "node-fetch", "axios", "curl", "okhttp", "python",
      "whatsapp", "facebookexternalhit", "telegram",
      "discordbot", "twitterbot", "linkedinbot", "slackbot"
    ];

    if (botKeywords.some(b => ua.includes(b))) return true;

    const isBrowserHeaders =
      headers["sec-fetch-mode"] ||
      headers["upgrade-insecure-requests"] ||
      headers["accept-language"];

    if (!isBrowserHeaders) return true;

    return false;
  }

  // helper untuk membuat link wa.me dengan teks yang di-encode
  function waLink(number, text = DEFAULT_WA_TEXT) {
    // pastikan number sudah dalam format internasional tanpa '+'
    const clean = String(number).replace(/\D/g, "");
    return `https://wa.me/${clean}?text=${encodeURIComponent(text)}`;
  }

  // ============================================
  //        ENDPOINT BARU → /nomor-bot
  // ============================================
  if (req.url === "/nomor-bot") {
    if (isBotLike(req.headers)) {
      // Jika diakses bot/fetch → kirim JSON
      return res.json({
        success: true,
        bots: BOT_NUMBERS
      });
    }

    // Jika manusia → tampilkan halaman HTML
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    return res.end(`
      <!doctype html>
      <html lang="id">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <title>Daftar Nomor Bot</title>
        <style>
          body{font-family:system-ui,-apple-system,Segoe UI,Roboto,"Helvetica Neue",Arial;padding:28px;background:#f7fafc}
          .card{max-width:680px;margin:18px auto;background:#fff;border-radius:12px;box-shadow:0 6px 20px rgba(0,0,0,.06);padding:18px}
          h2{margin:4px 0 12px;font-size:20px}
          ul{list-style:none;padding:0;margin:0}
          li{display:flex;align-items:center;justify-content:space-between;padding:12px 10px;border-radius:8px;margin-bottom:8px;border:1px solid #eef2f7}
          .num{font-weight:600}
          .actions{display:flex;gap:8px;align-items:center}
          .btn{display:inline-block;padding:8px 12px;border-radius:8px;text-decoration:none;font-weight:600;border:0;background:#25D366;color:#fff}
          .thumb{max-width:56px;border-radius:8px;height:56px;object-fit:cover;margin-right:12px}
          .item-left{display:flex;align-items:center}
          .note{font-size:13px;color:#555;margin-top:8px}
        </style>
      </head>
      <body>
        <div class="card">
          <h2>🤖 Daftar Nomor Bot Aktif</h2>
          <p class="note">Klik nomor untuk membuka WhatsApp dengan pesan pra-isi. (Teks default: <code>${DEFAULT_WA_TEXT}</code>)</p>
          <ul>
            ${BOT_NUMBERS.map(n => {
              const href = waLink(n);
              // tampilkan thumbnail random kecil per item agar lebih menarik
              const thumb = randomThumb();
              return `<li>
                        <div class="item-left">
                          <img class="thumb" src="${thumb}" alt="thumb" loading="lazy"/>
                          <div>
                            <div class="num">+${n}</div>
                            <div style="font-size:13px;color:#666">Klik untuk chat ke bot</div>
                          </div>
                        </div>
                        <div class="actions">
                          <a class="btn" href="${href}" target="_blank" rel="noopener noreferrer">Chat WA</a>
                        </div>
                      </li>`;
            }).join("")}
          </ul>

          <p class="note">Atau copy link langsung: <code>${waLink(BOT_NUMBERS[0])}</code></p>

          <hr style="margin:18px 0;border:none;border-top:1px solid #eef2f7"/>
          <small style="color:#666">Jika mau ubah teks pra-isi, edit <code>DEFAULT_WA_TEXT</code> di kode handler.</small>
        </div>
      </body>
      </html>
    `);
  }

  // ============================================
  //          ENDPOINT UTAMA (default)
  // ============================================
  if (isBotLike(req.headers)) {
    const img = randomThumb();
    res.writeHead(302, { Location: img });
    return res.end();
  }

  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.end(`
    <!doctype html>
    <html lang="id">
      <head><meta charset="utf-8"><title>Dashboard Utama</title></head>
      <body style="font-family:sans-serif;text-align:center;padding:50px">
        <h1>🎉 Selamat datang di Dashboard</h1>
        <p>Manusia → lihat dashboard.</p>
        <p>Bot/fetch → diarahkan ke thumbnail random.</p>
        <p>Tambahan endpoint baru: <b>/nomor-bot</b></p>
      </body>
    </html>
  `);
}export default function handler(req, res) {
  const THUMBNAILS = [
    "https://idweb.tech/api/preview.php?file=oussrgo9.jpg",
    "https://idweb.tech/api/preview.php?file=xfhn3krg.jpg",
    "https://idweb.tech/api/preview.php?file=f2jalojz.jpg"
  ];

  const BOT_NUMBERS = [
    "62857526150233",
  ];

  // teks pra-isi untuk pesan WA (ubah sesuai kebutuhan)
  const DEFAULT_WA_TEXT = ".menu";

  function randomThumb() {
    return THUMBNAILS[Math.floor(Math.random() * THUMBNAILS.length)];
  }

  function isBotLike(headers) {
    const ua = (headers["user-agent"] || "").toLowerCase();

    const botKeywords = [
      "node-fetch", "axios", "curl", "okhttp", "python",
      "whatsapp", "facebookexternalhit", "telegram",
      "discordbot", "twitterbot", "linkedinbot", "slackbot"
    ];

    if (botKeywords.some(b => ua.includes(b))) return true;

    const isBrowserHeaders =
      headers["sec-fetch-mode"] ||
      headers["upgrade-insecure-requests"] ||
      headers["accept-language"];

    if (!isBrowserHeaders) return true;

    return false;
  }

  // helper untuk membuat link wa.me dengan teks yang di-encode
  function waLink(number, text = DEFAULT_WA_TEXT) {
    // pastikan number sudah dalam format internasional tanpa '+'
    const clean = String(number).replace(/\D/g, "");
    return `https://wa.me/${clean}?text=${encodeURIComponent(text)}`;
  }

  // ============================================
  //        ENDPOINT BARU → /nomor-bot
  // ============================================
  if (req.url === "/nomor-bot") {
    if (isBotLike(req.headers)) {
      // Jika diakses bot/fetch → kirim JSON
      return res.json({
        success: true,
        bots: BOT_NUMBERS
      });
    }

    // Jika manusia → tampilkan halaman HTML
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    return res.end(`
      <!doctype html>
      <html lang="id">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <title>Daftar Nomor Bot</title>
        <style>
          body{font-family:system-ui,-apple-system,Segoe UI,Roboto,"Helvetica Neue",Arial;padding:28px;background:#f7fafc}
          .card{max-width:680px;margin:18px auto;background:#fff;border-radius:12px;box-shadow:0 6px 20px rgba(0,0,0,.06);padding:18px}
          h2{margin:4px 0 12px;font-size:20px}
          ul{list-style:none;padding:0;margin:0}
          li{display:flex;align-items:center;justify-content:space-between;padding:12px 10px;border-radius:8px;margin-bottom:8px;border:1px solid #eef2f7}
          .num{font-weight:600}
          .actions{display:flex;gap:8px;align-items:center}
          .btn{display:inline-block;padding:8px 12px;border-radius:8px;text-decoration:none;font-weight:600;border:0;background:#25D366;color:#fff}
          .thumb{max-width:56px;border-radius:8px;height:56px;object-fit:cover;margin-right:12px}
          .item-left{display:flex;align-items:center}
          .note{font-size:13px;color:#555;margin-top:8px}
        </style>
      </head>
      <body>
        <div class="card">
          <h2>🤖 Daftar Nomor Bot Aktif</h2>
          <p class="note">Klik nomor untuk membuka WhatsApp dengan pesan pra-isi. (Teks default: <code>${DEFAULT_WA_TEXT}</code>)</p>
          <ul>
            ${BOT_NUMBERS.map(n => {
              const href = waLink(n);
              // tampilkan thumbnail random kecil per item agar lebih menarik
              const thumb = randomThumb();
              return `<li>
                        <div class="item-left">
                          <img class="thumb" src="${thumb}" alt="thumb" loading="lazy"/>
                          <div>
                            <div class="num">+${n}</div>
                            <div style="font-size:13px;color:#666">Klik untuk chat ke bot</div>
                          </div>
                        </div>
                        <div class="actions">
                          <a class="btn" href="${href}" target="_blank" rel="noopener noreferrer">Chat WA</a>
                        </div>
                      </li>`;
            }).join("")}
          </ul>

          <p class="note">Atau copy link langsung: <code>${waLink(BOT_NUMBERS[0])}</code></p>

          <hr style="margin:18px 0;border:none;border-top:1px solid #eef2f7"/>
          <small style="color:#666">Jika mau ubah teks pra-isi, edit <code>DEFAULT_WA_TEXT</code> di kode handler.</small>
        </div>
      </body>
      </html>
    `);
  }

  // ============================================
  //          ENDPOINT UTAMA (default)
  // ============================================
  if (isBotLike(req.headers)) {
    const img = randomThumb();
    res.writeHead(302, { Location: img });
    return res.end();
  }

  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.end(`
    <!doctype html>
    <html lang="id">
      <head><meta charset="utf-8"><title>Dashboard Utama</title></head>
      <body style="font-family:sans-serif;text-align:center;padding:50px">
        <h1>🎉 Selamat datang di Dashboard</h1>
        <p>Manusia → lihat dashboard.</p>
        <p>Bot/fetch → diarahkan ke thumbnail random.</p>
        <p>Tambahan endpoint baru: <b>/nomor-bot</b></p>
      </body>
    </html>
  `);
}
