const mongoose = require('mongoose');

const MahasiswaSchema = mongoose.Schema({
    npm: {
        type: Int32Array,
        required: true
    },
    nama: String
});

module.exports = mongoose.model('Mahasiswa', MahasiswaSchema)