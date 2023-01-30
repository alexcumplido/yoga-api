const express = require("express");

const baseURL = require("../resources/baseURL.json");

const baseUrlRouter = express.Router();

baseUrlRouter.get("/api/yoga/", (request, response) => {
  response.json(baseURL);
});

module.exports = baseUrlRouter;
