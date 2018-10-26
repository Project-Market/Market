require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const pgp = require("pg-promise")();
const db = pgp({
  host: process.env.DB_HOST || "localhost",
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

//update to include accurate average rating
app.get("/api/market_stall", function(req, res) {
  db.any(`SELECT * FROM market_stall`)
    .then(function(data) {
      const storesInfo = data;
      db.any(
        `select market_stall.id, Round(AVG(review.rating),1) as average
from review, market_stall where review.market_stall_id=market_stall.id
group by market_stall.id`
      ).then(response => {
        const ratings = response;
        storesInfo.map(store => {
          const averageRating = ratings.filter(item => item.id == store.id);
          store.average_rating = averageRating[0] ? averageRating[0].average : 0;

          return store;
        });
        return res.json(storesInfo);
      });
    })
    .catch(function(error) {
      res.json({ error: error.message });
    });
});

//updated get request to get stall review;
app.get("/api/market_stall_review/:id", function(req, res) {
  const stall_id = req.params.id;
  db.any(`SELECT * FROM review where review.market_stall_id=$1  order by review.id desc`, [stall_id])
    .then(function(data) {
      res.json(data);
    })
    .catch(function(error) {
      res.json({ error: error.message });
    });
});

app.get("/api/dish", function(req, res) {
  db.any(`SELECT * FROM dish`)
    .then(function(data) {
      res.json(data);
    })
    .catch(function(error) {
      res.json({ error: error.message });
    });
});

//get market information
app.get("/api/market", function(req, res){
  db.any(`SELECT * FROM market`)
  .then(data => res.json(data))
  .catch(error => res.json({ error: error.message }))
})

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
  const market_id = req.params.id;
  db.any(
    `SELECT *  FROM market_stall, dish
      WHERE market_stall.id = dish.market_stall_id
      AND market_stall.id =$1`,
    [market_id]
  )
    .then(function(data) {
      res.json(data);
    })
    .catch(function(error) {
      res.json({ error: error.message });
    });
});

//update review post
app.post(`/api/market_stall_review/:id`, (req, res) => {
  const stall_id = req.params.id;
  const { name, rating, review } = req.body;
  db.one(
    `INSERT INTO review (market_stall_id,user_name,rating, review)
    VALUES ($1, $2, $3, $4)`,
    [stall_id, name, rating, review]
  )
    .then(res.json(req.body))
    .catch(error => {
      res.status(200).json({
        error: error.message
      });
    });
});

app.listen(process.env.PORT||8080, function() {
  console.log("Listening on port 8080");
});
