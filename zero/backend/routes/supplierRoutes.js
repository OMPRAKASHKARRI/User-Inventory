const express = require("express");
const router = express.Router();

const { addSupplier } = require("../controllers/supplierController");

router.post("/", addSupplier);

module.exports = router;