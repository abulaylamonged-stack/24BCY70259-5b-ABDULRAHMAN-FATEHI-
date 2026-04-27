const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: Number,
  course: String,
});

module.exports = mongoose.model("Student", StudentSchema);