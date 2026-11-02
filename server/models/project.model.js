
import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: "Title is required",
  },
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
  completion: {
    type: Date,
    required: "Completion date is required",
  },
  description: {
    type: String,
    trim: true,
    required: "Description is required",
  },
});

export default mongoose.model("Project", ProjectSchema);
