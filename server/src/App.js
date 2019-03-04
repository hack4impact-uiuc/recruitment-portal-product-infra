const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

// app.use(bodyParser.urlencoded());
app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.urlencoded());

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
// const router = require("./api/password-reset.js");
// app.use("/", router);

app.get("/", function(req, res) {
  res.send({ Hello: "World" });
});

app.listen(8000, function() {
  console.log("Listening on http://localhost:8000");
});
