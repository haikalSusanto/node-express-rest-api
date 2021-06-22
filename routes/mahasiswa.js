const express = require('express');
const router = express.Router();
const Mahasiswa = require('../models/Mahasiswa')

//get all mahasiswa
router.get('/', async (req, res) => {
    try {
        const all_mahasiswa = await Mahasiswa.find();
        res.json(all_mahasiswa)
    } catch(err) {
        res.json({message: err});
    }
});

//get specific mahasiswa by npm
router.get('/:npm', async (req, res) => {
    const npm_mahasiswa = req.params.npm;
    try {
        const mahasiswa = await Mahasiswa.findOne({npm: npm_mahasiswa});
        res.json(mahasiswa);
    } catch(err) {
        res.send(err);
    }
    
});

router.post('/', async (req, res) => {
    const reqBody = req.body;
    const npm_mahasiswa = reqBody.npm;
    const nama_mahasiswa = reqBody.nama;
    const mahasiswa = new Mahasiswa({
        npm: npm_mahasiswa,
        nama: nama_mahasiswa
    });

    try {
        const savedMahasiswa = await mahasiswa.save();
        res.json(savedMahasiswa);
    } catch(err) {
        res.json({message: err});
    }
});

module.exports = router;