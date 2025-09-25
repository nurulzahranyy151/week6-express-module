const express = require('express');
const router = express.Router();

const profiles = [
    { nim: "F1D022150", nama: "Nurul Qalbi Zahrani", jurusan: "Informatics Engineering", alamat: "Lombok, Indonesia" },
    { nim: "BP003", nama: "Park Chaeyoung", jurusan: "Economy and Business", alamat: "New Zealand,Australia" },
    { nim: "BP004", nama: "Lalisa", jurusan: "International Relations", alamat: "Bangkok, Thailand" },
    { nim: "BP002", nama: "Jennie", jurusan: "Law", alamat: "LA" },
    { nim: "BP001", nama: "Jisoo", jurusan: "Mechanical Engineering", alamat: "Seoul, South Korea" },
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
