const mongoose = require("mongoose");

require("dotenv").config();
const DB_URL = process.env.MONGODB_URI

const dbConnect = () => {
  mongoose
    .connect(
      DB_URL
      , {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
    .then(() => console.log("DB CONNECTION SUCCESS"))
    .catch((err) => {
      console.log(`DB CONNECTION ISSUES`);
      console.error(err.message);
      process.exit(1);
    });
};

module.exports = dbConnect;
