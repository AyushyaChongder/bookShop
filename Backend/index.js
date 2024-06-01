import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

//connect to mongoDB server
try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to mongoDB server");
} catch (error) {
  console.error("Error connecting to mongoDB server",error);
}

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
