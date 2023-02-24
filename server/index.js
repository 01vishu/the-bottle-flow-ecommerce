import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import { config } from "dotenv";
config();
mongoose
  .connect(process.env.MONOG_URI)
  .then(() => {
    console.log("DB Connected!");
  })
  .catch((error) => {
    console.log(error);
  });
const app = express();
//Development Logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Body parser, reading data from req.body
app.use(express.json({ limit: "10kb" }));

const port = 8000;
app.listen(port, () => {
  console.log(`App is running on ${port}`);
});
