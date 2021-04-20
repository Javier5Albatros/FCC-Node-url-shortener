const mongoose = require("mongoose");
require("dotenv").config();

const connect = async () => {
  return await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = {
  connect,
};
