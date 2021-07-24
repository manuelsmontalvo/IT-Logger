const Tech = require("../modals/tech");
const Log = require("../modals/log");
const db = require("../db/connection");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

// @TODO: Make Global Varibles For 500, 200 & 404 errors

// @route Get api/techs
// @desc  Get all techs
const getTechs = async (req, res) => {
  try {
    const techs = await Tech.find().populate("logs");
    res.json(techs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// @route Get api/techs/:id
// @desc  Get specific tech
const getTech = async (req, res) => {
  try {
    const { id } = req.params;
    const tech = await Tech.findById(id).populate("logs");

    if (tech) return res.json(tech);

    res.status(404).json({ message: "Tech not found!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// @route Post api/techs
// @desc  Add new tech
const createTech = async (req, res) => {
  const { firstName, lastName } = req.body;

  try {
    const newTech = new Tech({
      firstName,
      lastName,
    });
    const tech = await newTech.save();
    res.json(tech);
  } catch (err) {
    console.err(err.message);
    res.status(500).json({ error: error.message });
  }
};

// @route Put api/techs/:id
// @desc  Update tech
const updateTech = async (req, res) => {
  const { id } = req.params;
  await Tech.findByIdAndUpdate(id, req.body, { new: true }, (error, log) => {
    if (error) return res.status(500).json({ error: error.message });
    if (!log) return res.status(404).json({ message: "Tech not found!" });
    res.status(200).json(log);
  });
};

// @route Delete api/techs/:id
// @desc  Delete tech
const deleteTech = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Tech.findByIdAndDelete(id);
    if (deleted) return res.status(200).json("Tech Deleted!");
    throw new Error("Tech not found");
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = {
  createTech,
  getTech,
  getTechs,
  updateTech,
  deleteTech,
};
