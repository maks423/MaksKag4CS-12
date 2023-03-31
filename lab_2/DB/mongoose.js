const mongoose = require("mongoose");

async function setup() {
  try {
    mongoose.connect(process.env.MONGO_DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = setup;
