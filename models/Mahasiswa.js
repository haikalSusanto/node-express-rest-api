const mongoose = require('mongoose');

const MahasiswaSchema = new mongoose.Schema({
    npm: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 10
    },
    nama: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Mahasiswa', MahasiswaSchema);