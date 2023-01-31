const express = require("express");

const yogaposes = require("../resources/poses.json");

const posesRouter = express.Router();

posesRouter.get("/api/yoga/poses/", (req, res) => {
  res.status(200).json(yogaposes).end();
});

posesRouter.get("/api/yoga/pose/:poseName/", (req, res) => {
  const pose = req.params.poseName;
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

posesRouter.get("/api/yoga/poseId/:id/", (request, response) => {
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

module.exports = posesRouter;
