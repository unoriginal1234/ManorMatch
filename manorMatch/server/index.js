require('dotenv').config();
const path = require('path');
const express = require('express');
const axios = require('axios');
const model = require('../database/model')

const app = express();
app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});