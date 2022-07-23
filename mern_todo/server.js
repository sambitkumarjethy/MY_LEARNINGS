const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const routes = require("./routes/TodoRoutes");
const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log(`mongoose is connected...`))
  .catch((err) => console.error(err));
app.listen(5000, () => {
  console.log(`App listning to port 5000`);
});
