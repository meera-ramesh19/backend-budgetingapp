const express = require('express');
const app = require('./app');
require('dotenv').config();
const cors = require('cors');

const  PORT  = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});