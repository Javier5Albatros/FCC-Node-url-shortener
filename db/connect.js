const mongoose = require("mongoose");

const connect = async (url) => {
  return mongoose.connect(
    url,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => {
      console.log("Connected to dabase!");
    }
  );
};

module.exports = {
  connect,
};
