const Student = require("../models/Student");

// Show all students
exports.getStudents = async (req, res) => {
  const students = await Student.find();
  res.render("index", { students });
};

// Show add form
exports.showForm = (req, res) => {
  res.render("add");
};

// Add student
exports.addStudent = async (req, res) => {
  const { name, age, course } = req.body;

  if (!name) {
    return res.send("Name is required");
  }

  await Student.create({ name, age, course });
  res.redirect("/");
};

// Show edit form
exports.editForm = async (req, res) => {
  const student = await Student.findById(req.params.id);
  res.render("edit", { student });
};

// Update student
exports.updateStudent = async (req, res) => {
  await Student.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/");
};

// Delete student
exports.deleteStudent = async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.redirect("/");
};