const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
});

const placeSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
});

const stateSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: String,
    image: String,
    description: String,
    bestTime: String,
    culture: String,
    food: [foodSchema],
    places: [placeSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("State", stateSchema);