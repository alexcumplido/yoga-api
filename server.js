const express = require("express");
const logger = require("morgan");
const posesRouter = require("./routes/poses.js");
const categoriesRouter = require("./routes/categories.js");
const baseURL = require("./resources/baseURL.json");
const app = express();
const PORT = process.env.PORT;
const cors = require("cors");

app.use(cors());
app.use(logger("dev"));
app.use(posesRouter);
app.use(categoriesRouter);

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.get("/api/yoga/", (request, response) => {
  response.json(baseURL);
});

app.all("*", (request, response) => {
  response
    .status(404)
    .json({ message: "The enpoint for this route does not exist." });
});

app.listen(PORT || 8000, () => {
  console.log(`Server running in port number ${PORT || 8000}`);
});
