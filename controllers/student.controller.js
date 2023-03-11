const Student = require('../models/Student');

async function addStudentsFromCSV(req, res, next) {
  try {
    const students = req.students;
    var studentList = await Student.bulkCreate(students);
    return res.status(201).json({ message: 'Students added successfully', studentList });
  } catch (error) {
    next(error);
  }
}

// Get all students
async function getAllStudents(req, res, next) {
  try {
    const students = await Student.findAll();
    return res.status(200).json({
      message: 'Students added successfully',
      students
    });

  } catch (error) {
    next(error);
  }
}

module.exports = { addStudentsFromCSV , getAllStudents }
