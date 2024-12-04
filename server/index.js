const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

app.use(express.json());
app.use(cors());



app.listen(PORT, () => {
    console.log(`server run on this port ${PORT}`)
});

mongoose.connect(uri).then(() => console.log('MongoDB contectes')).catch((error) => {console.log('MongoDB failed conection: ', error.message);});
