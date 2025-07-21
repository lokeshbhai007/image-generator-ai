import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRouter from "./routes/userRoutes.js";

dotenv.config(); // load env variables

const app = express();
const port = process.env.PORT || 3001;
app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_URI;

if (!uri) {
  console.error("MongoDB URI is not defined. Please check your .env file.");
}

// ✅ Connect to MongoDB
mongoose
  .connect(uri, {})
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use('/api/user', userRouter) // Mount the user routes


app.get('/', (req,res) => {
    res.send("Hii i am here")
})



  //start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
