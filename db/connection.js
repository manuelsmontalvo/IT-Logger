const mongoose = require('mongoose');

let MONGODB_URI =
    process.env.PROD_MONGODB ||
    'mongodb+srv://manuelsmontalvo:santos12@cluster0.cfrfc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose
    .connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log('Successfully connected to MongoDB.'))
    .catch((e) => console.error('Connection error', e.message));

module.exports = mongoose.connection;
