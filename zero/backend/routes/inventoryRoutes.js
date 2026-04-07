const express = require("express");
const router = express.Router();

const {
  addInventory,
  getInventorySummary
} = require("../controllers/inventoryController");

router.post("/", addInventory);
router.get("/", getInventorySummary);

module.exports = router;