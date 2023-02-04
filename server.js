const express = require("express");
const logger = require("morgan");
require("dotenv").config();
const app = express();
const cors = require("cors");
// const MongoClient = require("mongodb").MongoClient;
// const baseURL = require("./resources/baseURL.json");
// const yogaposes = require("./resources/poses.json");
// const yogacategories = require("./resources/categories.json");
const routerApi = require("./routes/index");
const PORT = process.env.PORT;
// let db;
// let dbConnectionStr = process.env.DB_STRING;
// let dbName = "yogaapi";

app.use(cors());
app.use(logger("dev"));

// MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true }).then(
//   (client) => {
//     console.log(`Connected to ${dbName} Database`);
//     db = client.db(dbName);
//   }
// );

app.get("/", async (req, res) => {
  res.status(200).sendFile(__dirname + "/index.html");
});
routerApi(app);
// app.get("/api/yoga/", (request, response) => {
//   response.status(200).json(baseURL).end();
// });

// app.get("/api/yoga/categories/", async (req, res) => {
//   try {
//     const categories = [];
//     const data = await db.collection("categories").find().toArray();
//     data.forEach((item) => categories.push(item.element));
//     res.json(categories).end();
//   } catch (error) {
//     res.json(error).end();
//   }
// });

// app.get("/api/yoga/category/:categoryName/", (req, res) => {
//   const category = req.params.categoryName;
//   if (isNaN(category)) {
//     const singleCategory = yogacategories.items.find(function (element) {
//       return element.name.toLowerCase() === category.toLowerCase();
//     });

//     if (singleCategory) {
//       res.status(200).json(singleCategory).end();
//     } else {
//       res.status(404).json({ message: "category not found" }).end();
//     }
//   } else {
//     res.status(404).json({ message: "non valid request" }).end();
//   }
// });

// app.get("/api/yoga/poses/", async (req, res) => {
//   try {
//     const poses = [];
//     const data = await db.collection("poses").find().toArray();
//     data.forEach((item) => poses.push(item.element));
//     res.json(poses).end();
//   } catch (error) {
//     res.json(error).end();
//   }
// });

// app.get("/api/yoga/pose/:poseName/", async (req, res) => {
//   const pose = req.params.poseName;
//   if (isNaN(pose)) {
//     const poses = [];
//     const data = await db.collection("poses").find().toArray();
//     data.forEach((item) => poses.push(item.element));
//     const singlePose = poses.find(function (element) {
//       return element.english_name.toLowerCase() === pose.toLowerCase();
//     });
//     if (singlePose) {
//       res.status(200).json(singlePose).end();
//     } else {
//       res.status(404).json({ message: "pose not found" }).end();
//     }
//   } else {
//     res.status(400).json({ message: "non valid request" }).end();
//   }
// });

// app.get("/api/yoga/poseId/:id/", async (request, response) => {
//   const poseId = request.params.id;
//   if (!isNaN(poseId)) {
//     const poses = [];
//     const data = await db.collection("poses").find().toArray();
//     data.forEach((item) => poses.push(item.element));
//     const poseById = poses.find(function (element) {
//       return Number(element.id) === Number(poseId);
//     });
//     if (poseById) {
//       response.status(200).json(poseById).end();
//     } else {
//       response.status(404).json({ message: "pose not found" }).end();
//     }
//   } else {
//     response.status(400).json({ message: "non valid request" }).end();
//   }
// });

// app.all("*", (req, res) => {
//   res
//     .status(404)
//     .json({ message: "The enpoint for this route does not exist." })
//     .end();
// });

app.listen(PORT || 8000, () => {
  console.log(`Server running in port number ${PORT || 8000}`);
});
