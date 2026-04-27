const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");
const validate = require("../middleware/validate");


router.get("/", studentController.getStudents);
router.get("/add", studentController.showForm);

// Existing routes
router.post("/add", validate, studentController.addStudent);

router.get("/edit/:id", studentController.editForm);
router.post("/edit/:id", studentController.updateStudent);
router.post("/delete/:id", studentController.deleteStudent);

module.exports = router;