const { json } = require("express");
const express = require("express");
const yogacategories = require("../resources/categories.json");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json(yogacategories).end();
});

router.get("/:categoryName/", (req, res) => {
  const category = req.params.categoryName;
  if (isNaN(category)) {
    const singleCategory = yogacategories.items.find(function (element) {
      return element.name.toLowerCase() === category.toLowerCase();
    });

    if (singleCategory) {
      res.status(200).json(singleCategory).end();
    } else {
      res.status(404).json({ message: "category not found" }).end();
    }
  } else {
    res.status(404).json({ message: "non valid request" }).end();
  }
});

module.exports = router;
