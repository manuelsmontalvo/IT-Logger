const express = require('express');
const cors = require('cors');
const logRoutes = require('./routes/logs');
const techRoutes = require('./routes/techs');

const app = express();

// Init Middleware
app.use(express.json({ extended: false }));
app.use(cors());

app.get('/', (req, res) => res.json({ msg: 'Welcome to the IT Logger API...' }));

// Define Routes
app.use('/api', logRoutes);
app.use('/api', techRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
