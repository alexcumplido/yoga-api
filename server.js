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
