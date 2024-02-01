import { Schema } from "mongoose";

export const task = new Schema({
  name: {
    type: String,
    required: [true, "Please enter the name of your task"],
    maxlength: [50, "Name cannot exceed 50 characters"],
  },
  description: {
    type: String,
    required: [true, "Please describe your task"],
    maxlength: [155, "Description cannot exceed 155 characters"],
  },
});