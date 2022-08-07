import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes";
import blogRouter from "./routes/blogs-routes";
const app = express();
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);

mongoose
  .connect("mongodb://localhost:27017/blog", {
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(5000);
  })
  .then(() => console.log("Connected to Database and listing to Port 5000"))
  .catch((error) => {
    console.log(error);
  });

// app.use("/api", (req, res, next) => {
//   res.send("Hello WOrld");
// });
// mongoose
//   .connect(
//     "mongodb+srv://admin:Qzhp2v54EU4W90yG@cluster0.h3prsdr.mongodb.net/?retryWrites=true&w=majority"
//   )
//   .then(() => {
//     app.listen(5000);
//   })
//   .then(() => console.log("Connected to Database and listing to Port 5000"))
//   .catch((error) => {
//     console.log(error);
//   });

//Qzhp2v54EU4W90yG
