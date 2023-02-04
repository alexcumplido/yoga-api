const { json } = require("express");
const express = require("express");
const baseURL = require("../resources/baseURL.json");
const router = express.Router();

router.get("/", (request, response) => {
  response.status(200).json(baseURL).end();
});

module.exports = router;
