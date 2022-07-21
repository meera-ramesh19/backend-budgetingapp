const express = require('express');
const router = express.Router();
const transactions = require('../models/transactions');

// router.use('/:id', (req, res, next) => {
//   if (!transactions[req.params.id]) {
//     res.status(404).send('Not Found');
//   } else {
//     next();
//   }
// });

// Index
router.get('/', (req, res) => {
  console.log('hello');
  res.json(transactions);
});

// Show
router.get('/:id', (req, res) => {
  console.log(req.params, transactions);
  res.json(transactions[req.params.id]);
});

// Create
router.post('/', (req, res) => {
  transactions.push(req.body);
  res.json(transactions[transactions.length - 1]);
});

module.exports = router;
