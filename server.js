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

app.use(posesRouter);
app.use(categoriesRouter);
app.use(baseUrlRouter);

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.all("*", (request, response) => {
  response
    .status(404)
    .json({ message: "The enpoint for this route does not exist." });
});

app.listen(PORT || 8000, () => {
  console.log(`Server running in port number ${PORT || 8000}`);
});
