import mongoose from "mongoose";

const volunteerSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const volunteerModel = mongoose.model("volunteerModel", volunteerSchema);
export default volunteerModel;