const { json } = require("express");
const express = require("express");
const services = require("../services/services");
const router = express.Router();

router.get("/", async (req, res, next) => {
  console.log(req.query);
  try {
    let data;
    if (Object.keys(req.query).length === 0) {
      data = await services.getPoses();
    } else {
      data = await services.getPosesByParams(req.query);
      if (!data) {
        res.status(404).json({ message: "pose not found" }).end();
      }
    }
    res.status(200).json(data).end();
  } catch (error) {
    next(error);
  }
});

module.exports = router;
