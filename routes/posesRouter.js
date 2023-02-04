const { json } = require("express");
const express = require("express");
const services = require("../services/services");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await services.getPoses();
    res.status(200).json(data).end();
  } catch (error) {
    res.status(404).json({ mesage: error.message });
  }
});

router.get("/poseName/:name", async (req, res) => {
  const name = req.params.name;
  if (isNaN(name)) {
    try {
      const data = await services.getPoseByName(name);
      if (data) {
        res.status(200).json(data).end();
      } else {
        res.status(404).json({ message: "pose not found" }).end();
      }
    } catch (error) {
      res.status(404).json({ mesage: error.message });
    }
  } else {
    res.status(404).json({ message: "non valid request" }).end();
  }
});

router.get("/poseId/:id", async (req, res) => {
  const poseId = req.params.id;
  if (!isNaN(poseId)) {
    try {
      const data = await services.getPoseById(poseId);
      if (data) {
        res.status(200).json(data).end();
      } else {
        res.status(404).json({ message: "pose not found" }).end();
      }
    } catch (error) {
      res.status(404).json({ mesage: error.message });
    }
  } else {
    res.status(404).json({ message: "non valid request" }).end();
  }
});

module.exports = router;