const { json } = require("express");
const express = require("express");
const services = require("../services/services");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await services.getCategories();
    res.status(200).json(data).end();
  } catch (error) {
    res.status(404).json({ mesage: error.message });
  }
});

router.get("/:categoryName/", async (req, res) => {
  const name = req.params.categoryName;
  if (isNaN(name)) {
    try {
      const data = await services.getCategoryByName(name);
      if (data) {
        res.status(200).json(data).end();
      } else {
        res.status(404).json({ message: "category not found" }).end();
      }
    } catch (error) {
      res.status(404).json({ mesage: error.message });
    }
  } else {
    res.status(404).json({ message: "non valid request" }).end();
  }
});

module.exports = router;
