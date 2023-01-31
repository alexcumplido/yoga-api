const express = require("express");
const logger = require("morgan");
const app = express();
const posesRouter = require("./routes/poses.js");
const categoriesRouter = require("./routes/categories.js");
const baseUrlRouter = require("./routes/baseURL.js");
const cors = require("cors");
const PORT = process.env.PORT;

app.use(cors());
app.use(logger("dev"));

app.get("/", (req, res) => {
  res.status(200).sendFile(__dirname + "/index.html");
});

app.use(baseUrlRouter);
app.use(posesRouter);
app.use(categoriesRouter);

app.all("*", (req, res) => {
  res
    .status(404)
    .json({ message: "The enpoint for this route does not exist." })
    .end();
});

app.listen(PORT || 8000, () => {
  console.log(`Server running in port number ${PORT || 8000}`);
});
