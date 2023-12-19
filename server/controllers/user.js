const express = require("express");
const router = express.Router();
const personService = require("../services/User");

router.get("/", async (req, res) => {
  try {
    var people = await personService.getAll(req);
    res.json(people);
  } catch (error) {
    console.log(error);
    res.status(500).json({ statusCode: 500, error: "Something went wrong" });
  }
});

module.exports = router;