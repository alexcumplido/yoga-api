require("dotenv").config();
let db;
let dbConnectionStr = process.env.DB_STRING;
let dbName = "yogaapi";

const MongoClient = require("mongodb").MongoClient;
const baseURL = require("../resources/baseURL.json");
const yogacategories = require("../resources/categories.json");

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true }).then(
  (client) => {
    console.log(`Connected to ${dbName} Database`);
    db = client.db(dbName);
  }
);

async function getBaseURL() {
  return baseURL;
}

async function getCategories() {
  return yogacategories;
}

async function getCategoryByName(name) {
  const data = yogacategories.items.find(function (element) {
    return element.name.toLowerCase() === name.toLowerCase();
  });
  return data;
}

async function getPoses() {
  const poses = [];
  const data = await db.collection("poses").find().toArray();
  data.forEach((item) => poses.push(item.element));
  return poses;
}

async function getPoseByName(name) {
  const poses = [];
  const data = await db.collection("poses").find().toArray();
  data.forEach((item) => poses.push(item.element));
  const singlePose = poses.find(function (element) {
    return element.english_name.toLowerCase() === name.toLowerCase();
  });
  return singlePose;
}

async function getPoseById(id) {
  const poses = [];
  const data = await db.collection("poses").find().toArray();
  data.forEach((item) => poses.push(item.element));
  const singlePose = poses.find(function (element) {
    return Number(element.id) === Number(id);
  });
  return singlePose;
}

module.exports = {
  getBaseUrl: getBaseURL,
  getCategories: getCategories,
  getCategoryByName: getCategoryByName,
  getPoses: getPoses,
  getPoseByName: getPoseByName,
  getPoseById: getPoseById,
};

// categories.items.forEach(function (element) {
//   console.log(element);
//   db.collection("categories")
//     .insertOne({ element })
//     .catch((error) => console.error(error));
// });
