const express = require("express");

const baseURL = require("../resources/baseURL.json");

const baseUrlRouter = express.Router();

baseUrlRouter.get("/api/yoga/", (request, response) => {
  response.status(200).json(baseURL).end();
});

module.exports = baseUrlRouter;
