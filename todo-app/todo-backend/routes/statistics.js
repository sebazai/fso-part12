const express = require("express");
const router = express.Router();
const { getAddedTodos } = require("../redis/getAddedTodos");

/* GET statistics data. */
router.get("/", async (req, res) => {
  const added_todos = await getAddedTodos();
  res.send({
    added_todos,
  });
});

module.exports = router;
