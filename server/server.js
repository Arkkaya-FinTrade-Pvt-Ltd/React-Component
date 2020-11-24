const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('./db')
const app = express();


app.use(bodyParser.json());
app.use(cors({origin:'http://localhost:3000'}))
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
});