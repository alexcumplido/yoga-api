const express = require("express");

const yogacategories = require("../resources/categories.json");

const categoriesRouter = express.Router();

categoriesRouter.get("/api/yoga/categories/", (req, res) => {
  res.status(200).json(yogacategories).end();
});

categoriesRouter.get("/api/yoga/category/:categoryName/", (req, res) => {
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

module.exports = categoriesRouter;
