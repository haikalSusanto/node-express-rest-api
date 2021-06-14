const express = require('express');
const app = express();
const port = 3000;

const mongoose = require('mongoose');

app.get('/', (req, res) => {
    res.send('Success');
});


mongoose.connect(
    'mongodb+srv://express_rest_acc:VcffflsQy80F4ejP@express-rest.bzb5z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', 
    { 
        seNewUrlParser: true,
        useUnifiedTopology: true
    }, 
    () => {console.log('Connected to MongoDB')})

app.listen(port, () => {
    console.log(`app listening at ${port}`)
});
