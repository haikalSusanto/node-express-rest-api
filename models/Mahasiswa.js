const mongoose = require('mongoose');

const MahasiswaSchema = mongoose.Schema({
    npm: {
        type: Number,
        minLength: 10,
        maxLength: 10,
        required: true
    },
    nama: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Mahasiswa', MahasiswaSchema)