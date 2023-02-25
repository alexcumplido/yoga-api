const { json } = require("express");
const express = require("express");
const services = require("../services/services");
const router = express.Router();
const validatorHandler = require("../middlewares/validatorHandler");
const { schemaName, schemaId } = require("../schemas/schemas");

router.get("/", async (req, res, next) => {
  const sort = req.query.sort === "true" ? true : false;
  const level = req.query.level;
  const category = req.query.category;
  try {
    let data;
    if (sort) {
      data = await services.getPosesSorted();
    } else if (category) {
      data = await services.getPosesByCategoryAndDifficulty(category, level);
    } else if (level) {
      data = await services.getPosesByDifficulty(level);
    } else {
      data = await services.getPoses();
    }
    res.status(200).json(data).end();
  } catch (error) {
    next(error);
  }
});

router.get(
  "/:id",
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

module.exports = router;
