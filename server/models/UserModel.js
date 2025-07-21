import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
    default: true,
  },
  password: {
    required: true,
    type: String,
  },
  creditBalance: {
    type: Number,
    default: 5,
  },
});

const userModel = mongoose.model.User || mongoose.model("User", UserSchema); // Mongoose automatically make lowercase + pluralizes the model name to create the collection. like for "User" --> users || "Transaction" ---> transactions 

export default userModel;
