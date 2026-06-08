const express = require("express");

const router = express.Router();

const {
  getAllStates,
  getStateById,
} = require("../controllers/stateController");

router.get("/", getAllStates);

router.get("/:id", getStateById);

module.exports = router;