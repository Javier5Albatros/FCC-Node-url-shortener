require("dotenv").config();
const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 8080;

const app = express();

app.use(cors());
app.use("/public", express.static(`${process.cwd()}/public`));

app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
