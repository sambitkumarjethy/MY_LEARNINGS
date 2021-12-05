const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const connectDB = require("./config/db");
connectDB();
//ROUTES
app.use("/api/file", require("./routes/files"));
app.listen(PORT, () => {
  console.log(`Listing to port ${PORT}`);
});
