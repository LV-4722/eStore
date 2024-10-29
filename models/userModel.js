import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true, // to remove whitespaces
    },
    email: {
      type: String,
      required: true,
      unique: true, // only one user shud be with one mail id
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: {},
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
    role: {
      type: Number,
      default: 0, // 0->user, 1->admin
    },
  },
  { timestamps: true }
);

export default mongoose.model("users", userSchema);
