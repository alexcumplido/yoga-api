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

async function getPosesSorted() {
  const poses = [];
  const data = await db.collection("poses").find().toArray();
  data.forEach((item) => poses.push(item.element));
  poses.sort(function (a, b) {
    if (a.english_name.toLowerCase() < b.english_name.toLowerCase()) {
      return -1;
    }
    if (a.english_name.toLowerCase() > b.english_name.toLowerCase()) {
      return 1;
    }
    return 0;
  });

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
  getBaseURL,
  getCategories,
  getCategoryByName,
  getPoses,
  getPosesSorted,
  getPoseByName,
  getPoseById,
};
