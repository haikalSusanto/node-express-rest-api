const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

const mongoose = require('mongoose');
require('dotenv/config');

const mahasiswaRoute = require('./routes/mahasiswa');

app.use('/mahasiswa', mahasiswaRoute);

app.get('/', (req, res) => {
    res.send('Success');
});


try {
    mongoose.connect(
        process.env.DB_CONNECTION, 
        { 
            useNewUrlParser: true,
            useUnifiedTopology: true
        }, 
        () => {console.log('Connected to MongoDB')});
} catch (error) {
    console.log("could not connect");
};

app.listen(port, () => {
    console.log(`app listening at ${port}`)
});
