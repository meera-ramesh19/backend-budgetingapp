const express = require('express');
const transactions = express.Router();
const transactionArray = require('../models/transactions');

transactions.use(express.json());

// router.use('/:id', (req, res, next) => {
//   if (!transactionArray[req.params.id]) {
//     res.status(404).send('Not Found');
//   } else {
//     next();
//   }
// });

// Show
transactions.get('/:id', (req, res) => {
  const { id } = req.params;
  if (transactionArray[id]) {
    res.json(transactionArray[id]);
  } else {
    res.status(404).send('/error');
  }
});

// Index
transactions.get('/', (req, res) => {
  console.log('hello');
  res.json(transactionArray);
});

// Create
transactions.post('/', (req, res) => {
  const userTransaction = {
    transId: Date.now(),
    itemName: req.body.itemName,
    date: req.body.date,
    amount: req.body.amount,
    from: req.body.from,
    category: req.body.category,
    type: req.body.type,
  };

  if (
    typeof userTransaction.itemName === 'string' &&
    typeof userTransaction.date === 'string' &&
    typeof Number(userTransaction.amount) === 'number' &&
    typeof userTransaction.from === 'string' &&
    typeof userTransaction.category === 'string' &&
    typeof userTransaction.type === 'string'
  ) {
    transactionArray.push(userTransaction);
    res.json(userTransaction);
  } else {
    res.status(404).send('Not Valid Datatype');
  }
});

// UPDATE
transactions.put('/:id', (req, res) => {
  const id = req.params.id;
  const userTransaction = {
    transId: Date.now(),
    itemName: req.body.itemName,
    date: req.body.date,
    amount: req.body.amount,
    from: req.body.from,
    category: req.body.category,
    type: req.body.type,
  };

  if (
    typeof userTransaction.itemName === 'string' &&
    typeof userTransaction.date === 'string' &&
    typeof Number(userTransaction.amount) === 'number' &&
    typeof userTransaction.from === 'string' &&
    typeof userTransaction.category === 'string' &&
    typeof userTransaction.type === 'string'
  ) {
    if (transactionArray[id]) {
      transactionArray[id] = newLog;
      res.json(userTransaction);
    } else {
      res.send({ error: 'Not found' });
    }
  } else {
    res.redirect('/error');
  }
});

//DELETE
transactions.delete('/:id', (req, res) => {
  const { id } = req.params;
  if (transactionArray[req.params.id]) {
    const deletedLog = transactionArray.splice(req.params.id, 1);
    res.send('Transaction deleted');
  } else {
    res.status(404).redirect('/error');
  }
});

module.exports=transactions;