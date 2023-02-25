let db;
let dbConnectionStr = process.env.DB_STRING;
let dbName = "yogaapi";

const MongoClient = require("mongodb").MongoClient;

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true }).then(
  (client) => {
    console.log(`Connected to ${dbName} Database`);
    db = client.db(dbName);
  }
);

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

const query = dbLite.prepare(
  "INSERT INTO poses (english_name, sanskrit_name_adapted, sanskrit_name, translation_name, description, benefits, url_svg, url_png, url_svg_alt) values(?, ?, ?, ?, ?, ?, ?, ?, ?)"
);
posesSQL.poses.forEach(function (element) {
  query.run(
    element.difficulty,
    element.sanskrit_name_adapted,
    element.sanskrit_name,
    element.translation_name,
    element.description,
    element.benefits,
    element.url_svg,
    element.url_png,
    element.url_svg_alt
  );
});
const queryLite = dbLite.prepare("SELECT * FROM poses");
const rows = queryLite.all();

async function getCategoryByName(name) {
  const data = yogacategories.items.find(function (element) {
    return element.name.toLowerCase() === name.toLowerCase();
  });
  return data;
}
