const express = require("express");

const yogacategories = require("../resources/categories.json");

const categoriesRouter = express.Router();

categoriesRouter.get("/api/yoga/categories/", (request, response) => {
  response.json(yogacategories);
});

categoriesRouter.get(
  "/api/yoga/category/:categoryName/",
  (request, response) => {
    const category = request.params.categoryName;
    if (isNaN(category)) {
      const singleCategory = yogacategories.items.find(function (element) {
        return element.name.toLowerCase() === category.toLowerCase();
      });

      if (singleCategory) {
        response.json(singleCategory);
      } else {
        response.status(404).json({ message: "category not found" });
      }
    } else {
      response.status(404).json({ message: "non valid request" });
    }
  }
);

module.exports = categoriesRouter;
