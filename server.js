<<<<<<< HEAD
const path = require('path');
=======


>>>>>>> da24e3135089337b3778bd3db629825c465a8a7d
const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;

connectDB();

const app = express();
const cors = require('cors');
// cors all request should go through this so that browser should
//trusts the requests
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/transactions', require('./routes/transactionRoutes'));
// app.use('/api/users', require('./routes/userRoutes'));

// Serve frontend
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../frontend/build')));

//   app.get('*', (req, res) =>
//     res.sendFile(
//       path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
//     )
//   );
// } else {
//   app.get('/', (req, res) => res.send('Please set to production'));
// }

app.use(errorHandler);

<<<<<<< HEAD
app.listen(port, () => console.log(`Server started on port ${port}`));
=======
const PORT = process.env.PORT || PORT;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
>>>>>>> da24e3135089337b3778bd3db629825c465a8a7d
