const express = require("express");
const categoriesRouter = require("./categoriesRouter");
const posesRouter = require("./posesRouter");
const baseurlRouter = require("./baseurlRouter");

function routerApi(app) {
  const router = express.Router();
  app.use("/v1", router);
  router.use("/", baseurlRouter);
  router.use("/categories", categoriesRouter);
  router.use("/poses", posesRouter);
}

module.exports = routerApi;
