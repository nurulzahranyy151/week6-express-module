const express = require('express');
const profileRouter = require('./routes/profile');
const math = require('./utils/math');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <link rel="stylesheet" href="/style.css">
      <title>Express App</title>
    </head>
    <body>
      <h1>Selamat Datang!<br> Nurul Qalbi Zahrani <br> F1D022150 </h1>
      <p>Berikut adalah menu-menu yang bisa kamu buka: </p>
      <ul>
        <ol> <a href="/">Menu Utama</a></ol>
        <ol><a href="/hitung">Basic Math Calculator</a></ol>
        <ol><a href="/profile">Daftar User</a></ol>
        <ol><a href="/profile/F1D022150">Biodata Anda</a></ol>
      </ul>
    </body>
    </html>
  `);
});


app.get('/hitung', (req, res) => {
    const { a, b } = req.query; 
    
    const angka1 = parseInt(a) || 0;
    const angka2 = parseInt(b) || 0;

    const hasilTambah = math.tambah(angka1, angka2);
    const hasilKurang = math.kurang(angka1, angka2);
    const hasilBagi = angka2 !== 0 ? math.bagi(angka1, angka2) : "Tidak bisa dibagi 0";
    const hasilKali = math.kali(angka1, angka2);
    const hasilModulo = angka2 !== 0 ? math.modulo(angka1, angka2) : "Tidak bisa modulo 0";
    
    res.send(`<!DOCTYPE html>
    <html>
    <head>
      <link rel="stylesheet" href="/style.css">
      <title>Express App</title>
    </head>
    <body>
      <h2>Basic Math Calculator</h2>
      <form method="get" action="/hitung">
        <input type="number" name="a" placeholder="Angka 1" required>
        <input type="number" name="b" placeholder="Angka 2" required>
        <button type="submit">Hitung</button>
      </form>
      <h2> Angka terakhir yang dimasukkan: ${angka1} dan ${angka2}</h2>

      <h3>Hasil Perhitungan:</h3>
      <p>Hasil penjumlahan: ${hasilTambah}</p>
      <p>Hasil pengurangan: ${hasilKurang}</p>
      <p>Hasil pembagian: ${hasilBagi}</p>
      <p>Hasil perkalian: ${hasilKali}</p>
      <p>Hasil modulus: ${hasilModulo}</p>

      <a href="/" style="color:#1B3C53; text-decoration:none;">Kembali ke Menu Utama</a>
    </body>
    </html>`);
});

app.use('/profile', profileRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
