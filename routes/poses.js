const express = require("express");

const yogaposes = require("../resources/poses.json");

const posesRouter = express.Router();

posesRouter.get("/api/yoga/poses/", (request, response) => {
  response.json(yogaposes);
});

posesRouter.get("/api/yoga/pose/:poseName/", (request, response) => {
  const pose = request.params.poseName;
  if (isNaN(pose)) {
    const singlePose = yogaposes.items.find(function (element) {
      return element.english_name.toLowerCase() === pose.toLowerCase();
    });
    if (singlePose) {
      response.json(singlePose);
    } else {
      response.status(404).json({ message: "pose not found" });
    }
  } else {
    response.status(400).json({ message: "non valid request" });
  }
});

posesRouter.get("/api/yoga/poseId/:id/", (request, response) => {
  const poseId = request.params.id;
  if (!isNaN(poseId)) {
    const poseById = yogaposes.items.find(function (element) {
      return Number(element.id) === Number(poseId);
    });
    if (poseById) {
      response.json(poseById);
    } else {
      response.status(404).json({ message: "pose not found" });
    }
  } else {
    response.status(400).json({ message: "non valid request" });
  }
});

module.exports = posesRouter;
