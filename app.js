const express = require('express');
const transactions = require('./routes/transactions');

const app = express();
const cors = require('cors');

// cors all request should go through this spo thatbrowser should 
//trusts therequests
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

// Init Middleware
app.use(express.json({ extended: false }));

app.use('/transactions', transactions);
app.use('/*', (req, res) => {
  res.status(404).send('Not Found!');
});


module.exports = app;