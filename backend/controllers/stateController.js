const State = require("../models/State");

// Get all states
const getAllStates = async (req, res) => {
  try {
    const states = await State.find();
    res.json(states);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single state
const getStateById = async (req, res) => {
  try {
    const state = await State.findById(req.params.id);

    if (!state) {
      return res.status(404).json({
        message: "State not found",
      });
    }

    res.json(state);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getAllStates,
  getStateById,
};