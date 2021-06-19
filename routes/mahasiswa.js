const express = require('express');
const router = express.Router();
const Mahasiswa = require('../models/Mahasiswa')

router.get('/', (req, res) => {
    res.send('this is get mahasiswa')
});

router.post('/', (req, res) => {
    console.log(req.body);
    res.send('this is post mahasiswa')
});

module.exports = router;