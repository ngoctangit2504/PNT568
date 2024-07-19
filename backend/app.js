const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const path = require('path');



const floorPlanRoutes = require('./routes/floorPlanRoutes');
const matBangRoutes = require('./routes/matBangRoutes');
const userRouter = require('./routes/user');
const pdfRoutes = require('./routes/pdfRoutes');


const app = express();

connectDB();


app.use(cors({
    origin: 'http://localhost:3000', // URL của frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }

));
app.use(bodyParser.json());
app.use(express.json());


// Routes
app.use('/api/floor-plan', floorPlanRoutes);

app.use('/api/auth', require('./routes/auth'));
app.use('/api/admin', require('./routes/admin'));
app.use('/api/user', require('./routes/user', userRouter));

app.use('/api/matbang', matBangRoutes);

app.use('/pdfs', pdfRoutes);


module.exports = app;
