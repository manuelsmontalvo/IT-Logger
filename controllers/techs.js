const db = require('../config/db');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Schema
const Tech = require('../modals/tech');

// @route GET api/techs
// @desc Get all techs
const getTechs = async (req, res) => {
    try {
        const techs = await Tech.find();
        res.json(techs);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
};

// @route POST api/techs
// @desc Create tech
const createTech = async (req, res) => {
    const { firstName, lastName } = req.body;

    try {
        const newTech = new Tech({
            firstName,
            lastName,
        });
        const tech = await newTech.save();
        res.json(tech);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
};

// @route DELETE api/techs
// @desc Delete techs
const deleteTech = async (req, res) => {
    try {
        let tech = await Tech.findById(req.params.id);

        if (!tech) return res.status(404).json({ msg: 'Tech not found' });

        await Tech.findByIdAndDelete(req.params.id);
        res.json({ msg: 'Tech removed' });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
};

module.exports = {
    getTechs,
    createTech,
    deleteTech,
};
