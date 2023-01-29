const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
//Create ENV
const PORT = process.env.PORT;
const baseURL = require("./resources/baseURL.json");
const yogacategories = require("./resources/categories.json");
const yogaposes = require("./resources/poses.json");

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.get("/api/yoga/", (request, response) => {
  response.json(baseURL);
});

app.get("/api/yoga/categories/", (request, response) => {
  response.json(yogacategories);
});

app.get("/api/yoga/category/:categoryName/", (request, response) => {
  const category = request.params.categoryName;
  if (category) {
    const singleCategory = yogacategories.items.find(function (element) {
      return element.name.toLowerCase() === category.toLowerCase();
    });
    if (singleCategory) {
      response.json(singleCategory);
    } else {
      response.status(400).json({ message: "category not found" });
    }
  }
});

app.get("/api/yoga/poses/", (request, response) => {
  response.json(yogaposes);
});

app.get("/api/yoga/pose/:poseName/", (request, response) => {
  const pose = request.params.poseName;
  if (pose) {
    const singlePose = yogaposes.items.find(function (element) {
      return element.english_name.toLowerCase() === pose.toLowerCase();
    });
    if (singlePose) {
      response.json(singlePose);
    } else {
      response.status(400).json({ message: "pose not found" });
    }
  }
});

app.listen(PORT || 8000, () => {
  console.log(`Server running in port number ${PORT || 8000}`);
});
