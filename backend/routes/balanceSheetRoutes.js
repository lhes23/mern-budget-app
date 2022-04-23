const express = require("express");
const router = express.Router();
const { AllBalanceSheet } = require("../controllers/balanceSheetControllers");

router.route("/").get(AllBalanceSheet);

module.exports = router;
