import mongoose from "mongoose";

const teacherSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const teacherModel = mongoose.model("teacherModel", teacherSchema);
export default teacherModel;