require('dotenv').config();

const express = require("express");
const bodyParser = require("body-parser");
const app = express();


require("dotenv").config();

const pgp = require("pg-promise")();
const db = pgp({
  host: "localhost",
  port: 5432,
  database: process.env.DB_NAME,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD
});

app.use(bodyParser.json());
app.use("/static", express.static("static"));
app.set("view engine", "hbs");


//Get REQ
app.get("/", function(req, res) {
  res.render("index");
});

app.get("/api/market_stall", function(req, res) {
  db.any(
    `SELECT * FROM market_stall`
  )
    .then(function(data) {
      res.json(data);
    })
    .catch(function(error) {
      res.json({ error: error.message });
    });
});

app.get("/api/dish", function(req, res) {
  db.any(
    `SELECT * FROM dish
    `
  )
    .then(function(data) {
      res.json(data);
    })
    .catch(function(error) {
      res.json({ error: error.message });
    });
});

app.get("/api/market_stall/with_dish", function(req, res) {
    db.any(
      `SELECT *
      FROM market_stall,dish
      WHERE market_stall.id = dish.market_stall_id `
    )
      .then(function(data) {
        res.json(data);
      })
      .catch(function(error) {
        res.json({ error: error.message });
      });
  });

  app.get("/api/market_stall/:id", function(req, res) {
    const market_stall_id = req.params.id
    db.any(
      `SELECT *  FROM market_stall,dish\
      WHERE id =$1 AND market_stall.id = dish.market_stall_id`,[market_stall_id]
    )
      .then(function(data) {
        res.json(data);
      })
      .catch(function(error) {
        res.json({ error: error.message });
      });
  });


app.listen(8080, function() {
  console.log("Listening on port 8080");
});
