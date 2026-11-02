
import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
  firstname: {
    type: String,
    trim: true,
    required: "First name is required",
  },
  lastname: {
    type: String,
    trim: true,
    required: "Last name is required",
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    required: "Email is required",
    match: [/.+@.+\..+/, "Please enter a valid email address"],
  },
});

export default mongoose.model("Contact", ContactSchema);
