const express = require('express');
const router = express.Router();

const profiles = [
    { nim: "F1D022150", nama: "Nurul Qalbi Zahrani", jurusan: "Teknik Informatika" },
    { nim: "FD2200456", nama: "Andi Setiawan", jurusan: "Sistem Informasi" },
    { nim: "FD2200789", nama: "Budi Santoso", jurusan: "Teknik Elektro" }
];

router.use((req, res, next) => {
    console.log('Profile Router Time:', Date.now());
    next();
});

router.get('/', (req, res) => {
    res.json(profiles);
});

router.get('/:nim', (req, res) => {
    const nim = req.params.nim;
    const profile = profiles.find(p => p.nim === nim);

    if (profile) {
        res.json(profile);
    } else {
        res.status(404).send({ message: "Profile tidak ditemukan" });
    }
});

module.exports = router;
