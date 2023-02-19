const express = require("express");
const logger = require("morgan");
const app = express();
const cors = require("cors");
const routerApi = require("./routes/index");
const { logErrors, errorHandler } = require("./middlewares/errorHandler");
const PORT = process.env.PORT;
const Database = require("better-sqlite3");
const db = new Database("./db/database.db", { verbose: console.log });

app.use(cors());
app.use(logger("dev"));

app.get("/", async (req, res) => {
  res.status(200).sendFile(__dirname + "/index.html");
});

const transitive = require("./resources/transitiveSQL.json");
app.get("/posestransitive", async (req, res) => {
  const queryInsert = db.prepare(
    "INSERT INTO poses_transitive (pose_id, category_id, difficulty_id) VALUES (?, ?, ?)"
  );

  transitive.poses_category.forEach(function (element) {
    queryInsert.run(
      element.pose_id,
      element.category_id,
      element.difficulty_id
    );
  });

  const queryGet = db.prepare("SELECT * FROM  poses_transitive");
  const transitivePoses = queryGet.all();
  res.json(transitivePoses);
});

routerApi(app);

app.use(logErrors);
app.use(errorHandler);

app.listen(PORT || 8000, () => {
  console.log(`Server running in port number ${PORT || 8000}`);
});
