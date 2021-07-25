const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Tech = new Schema({
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
});

module.exports = mongoose.model('techs', Tech);
