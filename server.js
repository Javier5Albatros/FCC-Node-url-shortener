require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { json, urlencoded } = require("express");
const { connect } = require("./db/connect");
const { router } = require("./routes/shorturl");

const port = process.env.PORT || 8080;
const app = express();

const db = connect();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: false }));
app.use("/public", express.static(`${process.cwd()}/public`));

app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

app.use("/api", router);

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
