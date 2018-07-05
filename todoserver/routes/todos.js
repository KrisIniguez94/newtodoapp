var express = require("express");
var router = express.Router();
const environment = process.env.NODE_ENV || "development";
const knexConfig = require("../knexfile.js")[environment];
const knex = require("knex")(knexConfig);

/* GET users listing. */
router.get("/", function(req, res, next) {
  knex("todos").then(function(todos) {
    res.send(todos);
  });
});

router.post("/", function(req, res, next) {
  knex("todos")
    .insert(req.body)
    .then(() => {
      knex("todos")
        .orderBy("id", desc)
        .then(todos => res.json(todos));
    });
});

module.exports = router;
