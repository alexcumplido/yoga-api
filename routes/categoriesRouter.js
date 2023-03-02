const { json } = require("express");
const express = require("express");
const router = express.Router();
const services = require("../services/services");
const validatorHandler = require("../middlewares/validatorHandler");
const { schemaName, schemaId } = require("../schemas/schemas");

router.get("/", async (req, res, next) => {
  try {
    let data;
    if (Object.keys(req.query).length === 0) {
      data = await services.getCategories();
    } else {
      data = await services.getCategoriesByParams(req.query);
    }
    if (!data) {
      res.status(404).json({ message: "cagegory not found" }).end();
    }
    res.status(200).json(data).end();
  } catch (error) {
    next(error);
  }
});

module.exports = router;
