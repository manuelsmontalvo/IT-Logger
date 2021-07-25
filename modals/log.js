const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Log = new Schema(
    {
        message: { type: String, required: true },
        attention: { type: Boolean, required: true },
        tech: { type: Schema.Types.ObjectId, ref: 'techs' },
    },
    { timestamps: true }
);

module.exports = mongoose.model('logs', Log);
