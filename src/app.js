//src/app.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const paymentRoutes = require('./routes/paymentRoutes');
const userRoutes = require('./routes/userRoutes');
const db = require('./config/db');

//Initialize dotenv to read .env file

dotenv.config();

const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());

//Routes
app.use('/api/payments',paymentRoutes);
app.use('/api/users', userRoutes);
//Connect to db
db.connect();

module.exports = app;
