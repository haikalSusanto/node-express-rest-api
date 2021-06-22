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
        const mahasiswa = await Mahasiswa.find({npm: npm_mahasiswa});
        res.json(mahasiswa);
    } catch(err) {
        res.send(err);
    }
    
});

//post mahasiswa
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

//delete specific mahasiswa by npm
router.delete('/:npm', async (req,res) => {
    const npm_mahasiswa = req.params.npm;
    try {
        const removedMahasiswa = await Mahasiswa.remove({npm: npm_mahasiswa});
        res.json(removedMahasiswa);
    } catch(err) {
        res.json({ message: err });
    }

});

//update specific mahasiswa name by npm
router.patch('/update_nama/:npm', async (req, res) => {
    const npm_mahasiswa = req.params.npm;
    try {
        const updatedMahasiswa = await Mahasiswa.updateOne({npm: npm_mahasiswa}, {$set: {nama: req.body.nama}});
        res.json(updatedMahasiswa);
    } catch(err) {
        res.json({ message: err });
    }
});

module.exports = router;