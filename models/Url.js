const mongoose = require("mongoose");
const { v4: uuidv4 } = require('uuid');

const urlSchema = mongoose.Schema({
  original_url: {
    type: String,
    required: true,
  },
  short_url: {
    type: String,
    default: uuidv4(),
  },
});

const Url = mongoose.model("NodeUrl", urlSchema);

module.exports = {
  Url,
};
