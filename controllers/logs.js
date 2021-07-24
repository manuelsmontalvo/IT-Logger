const Log = require("../modals/log");
const db = require("../db/connection");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

// @TODO: Make Global Varibles For 500, 200 & 404 errors

// @route Get api/logs
// @desc  Get all logs
const getLogs = async (req, res) => {
  try {
    const logs = await Log.find().populate("tech");
    res.json(logs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// @route Get api/logs/:id
// @desc  Get specific log
const getLog = async (req, res) => {
  try {
    const { id } = req.params;
    const log = await Log.findById(id).populate("tech");

    if (log) return res.json(log);

    res.status(404).json({ message: "Log not found!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// @route Post api/logs
// @desc  Add new log
const createLog = async (req, res) => {
  const { message, attention } = req.body;
  const { id } = req.params;
  const tech = id;

  try {
    const newLog = new Log({
      message,
      attention,
      tech,
    });
    const log = await newLog.save();
    res.json(log);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// @route Put api/logs/:id
// @desc  Update log
const updateLog = async (req, res) => {
  const { id } = req.params;
  await Log.findByIdAndUpdate(id, req.body, { new: true }, (error, log) => {
    if (error) return res.status(500).json({ error: error.message });
    if (!log) return res.status(404).json({ message: "Log not found!" });
    res.status(200).json(log);
  });
};

// @route Delete api/logs/:id
// @desc  Delete log
const deleteLog = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Log.findByIdAndDelete(id);
    if (deleted) return res.status(200).json("Log Deleted!");
    throw new Error("Log not found");
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = {
  createLog,
  getLog,
  getLogs,
  updateLog,
  deleteLog,
};
