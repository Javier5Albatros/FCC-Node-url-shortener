require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { json, urlencoded } = require("express");
const { connect } = require("./db/connect");

const port = process.env.PORT || 8080;
const app = express();

const db = connect(process.env.MONGO_URI);

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: false }));
app.use("/public", express.static(`${process.cwd()}/public`));

app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
