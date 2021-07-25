const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Log = new Schema({
    tech: { type: String, require: true },
    message: { type: String, require: true },
    attention: { type: Boolean, require: true },
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('logs', Log);
