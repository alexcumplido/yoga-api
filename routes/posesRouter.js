const { json } = require("express");
const express = require("express");
const services = require("../services/services");
const router = express.Router();
const validatorHandler = require("../middlewares/validatorHandler");
const { schemaName, schemaId } = require("../schemas/schemas");

router.get("/", async (req, res, next) => {
  try {
    const data = await services.getPoses();
    res.status(200).json(data).end();
  } catch (error) {
    next(error);
  }
});

router.get(
  "/poseName/:name",
  validatorHandler(schemaName, "params"),
  async (req, res, next) => {
    const name = req.params.name;
    try {
      const data = await services.getPoseByName(name);
      if (data) {
        res.status(200).json(data).end();
      } else {
        res.status(404).json({ message: "pose not found" }).end();
      }
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  "/poseId/:id",
  validatorHandler(schemaId, "params"),
  async (req, res, next) => {
    const poseId = req.params.id;
    try {
      const data = await services.getPoseById(poseId);
      if (data) {
        res.status(200).json(data).end();
      } else {
        res.status(404).json({ message: "pose not found" }).end();
      }
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
