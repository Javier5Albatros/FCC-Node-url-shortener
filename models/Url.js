const mongoose = require("mongoose");

const urlSchema = mongoose.Schema({
  original: {
    type: String,
    required: true,
  },
  shortened: {
    type: String,
  },
});

const Url = mongoose.model("Url", urlSchema);

module.exports = {
  Url,
};
