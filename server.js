const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const db = require('./db/connection');
const logsRoutes = require('./routes/logs');
const techsRoutes = require('./routes/techs');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(logger('dev'));

app.use('/api', logsRoutes);
app.use('/api', techsRoutes);

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(PORT, () => console.log(`Express server listening on port ${PORT}`));
