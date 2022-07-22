const express = require('express');
const router = express.Router();
const transactionArray = require('../models/transactions');

router.use('/:id', (req, res, next) => {
  if (!transactionArray[req.params.id]) {
    res.status(404).send('Not Found');
  } else {
    next();
  }
});

// Index
router.get('/', (req, res) => {
  console.log('hello');
  res.json(transactionArray);
});

// Show
router.get('/:id', (req, res) => {
  console.log(req.params, transactionArray);
  res.json(transactionArray[req.params.id]);
});

// Create
router.post('/', (req, res) => {
  transactionArray.push(req.body);
  res.json(transactionArray[transactionArray.length - 1]);
});

// UPDATE
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const newData = req.body;
  transactionArray[id] = newData;
  res.send(transactionArray[id]);
});

//DELETE
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  transactionArray.splice(id, 1);
  res.send(transactionArray);
});
