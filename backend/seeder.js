const mongoose = require("mongoose");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const State = require("./models/State");
const statesData = require("./data/stateData");

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await State.deleteMany();

    await State.insertMany(statesData);

    console.log("Data Imported Successfully ✅");

    process.exit();
  } catch (error) {
    console.error(error);

    process.exit(1);
  }
};

importData();