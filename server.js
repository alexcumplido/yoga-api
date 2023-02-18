const express = require("express");
const logger = require("morgan");
const app = express();
const cors = require("cors");
const routerApi = require("./routes/index");
const { logErrors, errorHandler } = require("./middlewares/errorHandler");
const PORT = process.env.PORT;

app.use(cors());
app.use(logger("dev"));

app.get("/", async (req, res) => {
  res.status(200).sendFile(__dirname + "/index.html");
});

routerApi(app);

app.use(logErrors);
app.use(errorHandler);

app.listen(PORT || 8000, () => {
  console.log(`Server running in port number ${PORT || 8000}`);
});

// const Database = require("better-sqlite3");
// const db = new Database("./db/database.db", { verbose: console.log });
// const posesJson = require("./db/poses.json");
// app.get("/database", async (req, res) => {
//   const queryInsert = db.prepare(
//     "INSERT INTO poses (sanskrit_name, english_name, img_url) VALUES (?, ?, ?)"
//   );

//   posesJson.items.forEach(function (element) {
//     queryInsert.run(
//       element.pose_id,
//       element.english_name,
//       element.sanskrit_name,
//       element.difficulty
//       element.description,
//       element.benefits,
//       element.img_url_svg
//       element.img_url_jpg,
//       element.img_url_svg_alt,
//     );
//   });

//   const queryGet = db.prepare("SELECT * FROM  poses");
//   const poses = queryGet.all();
//   res.json(poses);
// });
