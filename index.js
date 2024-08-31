const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const infoRoutes = require('./routes/inforRoute');
const connectDb = require('./config/dbConnection');

connectDb();

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

// Simple endpoint
app.get('/', (req, res) => {
  res.send('Server is up and running!');
});
app.use('/info', infoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
