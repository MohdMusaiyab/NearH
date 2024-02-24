import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";
import bodyParser from "body-parser";
import hospitalRoutes from "./routes/hospitalRoutes.js";
import authRoutes from "./routes/authRoutes.js";
 dotenv.config();
 // Connect to MongoDB
 const app = express();
 app.use(bodyParser.json());
 mongoose
 .connect(process.env.MONGO)
 .then(() => {
   console.log("Connected to Databse");
  })
  .catch((err) => {
    console.log("Connection Failed");
    console.log(err);
  });
  

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use("/api/v1/hospital", hospitalRoutes);
app.use('/api/v1/auth',authRoutes);
app.listen(process.env.PORT, () => {
  console.log("Server is running on port 3000");
});
