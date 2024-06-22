const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');

const floorPlanRoutes = require('./routes/floorPlanRoutes');
const customerRoutes = require('./routes/customerRoutes');


const app = express();
connectDB();


app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/floor-plan', floorPlanRoutes);

app.use('/api/auth', require('./routes/auth'));
app.use('/api/admin', require('./routes/admin'));
app.use('/api/user', require('./routes/user'));

app.use('/api', customerRoutes);

module.exports = app;