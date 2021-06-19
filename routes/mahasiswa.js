const express = require('express');
const router = express.Router();
const Mahasiswa = require('../models/Mahasiswa')

router.get('/', (req, res) => {
    res.send('this is get mahasiswa')
});

router.post('/', (req, res) => {
    const reqBody = req.body;
    const npm_mahasiswa = reqBody.npm;
    const nama_mahasiswa = reqBody.nama;
    const mahasiswa = new Mahasiswa({
        npm: npm_mahasiswa,
        nama: nama_mahasiswa
    });

    mahasiswa.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({ message: err});
    })
});

module.exports = router;