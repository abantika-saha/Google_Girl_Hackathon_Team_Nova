import mongoose from "mongoose";

const discussionSchema = mongoose.Schema({
  name: { type: String, required: true },
  question: { type: String, required: true },
  comments: { type: [String], default: [] },
  creator: { type: String, required: true },
});

const discussion = mongoose.model("discussion", discussionSchema);
export default discussion;