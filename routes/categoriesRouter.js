const { json } = require("express");
const express = require("express");
const services = require("../services/services");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const data = await services.getCategories();
    res.status(200).json(data).end();
  } catch (error) {
    next(error);
  }
});

router.get("/:name/", async (req, res, next) => {
  const name = req.params.name;
  if (isNaN(name)) {
    try {
      const data = await services.getCategoryByName(name);
      if (data) {
        res.status(200).json(data).end();
      } else {
        res.status(404).json({ message: "category not found" }).end();
      }
    } catch (error) {
      next(error);
    }
  } else {
    res.status(404).json({ message: "non valid request" }).end();
  }
});

module.exports = router;
