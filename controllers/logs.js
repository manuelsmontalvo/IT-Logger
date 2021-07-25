const db = require('../config/db');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Schema
const Log = require('../modals/log');

// @route GET api/logs
// @desc Get all logs
const getLogs = async (req, res) => {
    try {
        const logs = await Log.find();
        res.json(logs);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
};

// @route POST api/logs
// @desc Get all logs
const createLog = async (req, res) => {
    const { tech, message, attention } = req.body;
    try {
        const newLog = new Log({
            tech,
            message,
            attention,
        });
        const log = await newLog.save();
        res.json(log);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
};

// @route PUT api/logs/:id
// @desc Update log
const updateLog = async (req, res) => {
    const { id } = req.params;
    await Log.findByIdAndUpdate(id, req.body, { new: true }, (error, log) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        if (!log) {
            return res.status(404).json({ message: 'Log not found!' });
        }
        res.json(log);
    });
};

// @route Delete api/logs/:id
// @desc delete log
const deleteLog = async (req, res) => {
    try {
        let log = await Log.findById(req.params.id);

        if (!log) return res.status(404).json({ msg: 'Log not found' });

        await Log.findByIdAndRemove(req.params.id);

        res.json({ msg: 'Log removed' });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
};

module.exports = {
    getLogs,
    createLog,
    updateLog,
    deleteLog,
};
