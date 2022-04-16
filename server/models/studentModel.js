import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  year: { type: String, required: true },
});

const studentModel = mongoose.model("studentModel", studentSchema);
export default studentModel;