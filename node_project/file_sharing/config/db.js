require("dotenv").config();
const mongoose = require("mongoose");
async function connectDB() {
  //DATABASE CONNECTION
  //VRNz7rtXFxvmvWYF
  try {
    // Connect to the MongoDB cluster
    // mongoose.connect(
    //   process.env.MONGO_CONNECTION_URL,
    //   { useNewUrlParser: true, useUnifiedTopology: true },
    //   () => console.log("Mongoose is connected")
    // );

    mongoose
      .connect(process.env.MONGO_CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log("Database connected!"))
      .catch((err) => console.log(err));
  } catch (e) {
    console.log("could not connect");
  }
}
module.exports = connectDB;
