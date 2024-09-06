const mongoose = require("mongoose");

require("dotenv");

const dbConnect = () => {
  mongoose
    .connect(
      "mongodb://localhost:27017/sih"
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
