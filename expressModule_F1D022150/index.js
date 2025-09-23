const express = require('express');
const profileRouter = require('./routes/profile');
const math = require('./utils/math');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Nama: Nurul Qalbi Zahrani <br> NIM: F1D022150');
});

app.get('/hitung', (req, res) => {
    const hasil = math.tambah(10, 5); 
    res.send(`Hasil penjumlahan: ${hasil}`);
});

app.use('/profile', profileRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
