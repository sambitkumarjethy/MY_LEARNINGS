const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const connectDB = require("./config/db");
const path = require("path");
connectDB();
//TEMPLATE ENGINE
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");
//ROUTES
app.use("/api/file", require("./routes/files"));
app.use("/files", require("./routes/show"));

app.listen(PORT, () => {
  console.log(`Listing to port ${PORT}`);
});
