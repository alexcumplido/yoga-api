const { json } = require("express");
const express = require("express");
const yogaposes = require("../resources/poses.json");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json(yogaposes).end();
});

router.get("/poseName/:name", (req, res) => {
  const pose = req.params.name;
  if (isNaN(pose)) {
    const singlePose = yogaposes.items.find(function (element) {
      return element.english_name.toLowerCase() === pose.toLowerCase();
    });
    if (singlePose) {
      res.status(200).json(singlePose).end();
    } else {
      res.status(404).json({ message: "pose not found" }).end();
    }
  } else {
    res.status(400).json({ message: "non valid request" }).end();
  }
});

router.get("/poseId/:id", (request, response) => {
  const poseId = request.params.id;
  if (!isNaN(poseId)) {
    const poseById = yogaposes.items.find(function (element) {
      return Number(element.id) === Number(poseId);
    });
    if (poseById) {
      response.status(200).json(poseById).end();
    } else {
      response.status(404).json({ message: "pose not found" }).end();
    }
  } else {
    response.status(400).json({ message: "non valid request" }).end();
  }
});

module.exports = router;
