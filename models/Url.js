const mongoose = require("mongoose");
const shortid = require("shortid");

const urlSchema = mongoose.Schema({
  original_url: {
    type: String,
    required: true,
  },
  short_url: {
    type: String,
    default: () => shortid.generate(),
  },
});

const Url = mongoose.model("NodeUrl", urlSchema);

module.exports = {
  Url,
};
