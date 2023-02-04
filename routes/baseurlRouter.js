const { json } = require("express");
const express = require("express");
const services = require("../services/services");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await services.getBaseUrl();
    res.status(200).json(data).end();
  } catch (error) {
    res.status(404).json({ mesage: error.message });
  }
});

module.exports = router;
