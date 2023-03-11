const Student = require('../models/Student');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

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

async function exportData(req, res) {
  try {
    // Get all students from the database
    const students = await Student.findAll();

    // Create a new CSV file
    const csvWriter = createCsvWriter({
      path: 'students.csv',
      header: [
        { id: 'id', title: 'ID' },
        { id: 'name', title: 'Name' },
        { id: 'rollno', title: 'Roll No' },
        { id: 'address', title: 'Address' },
        { id: 'institute', title: 'Institute' },
        { id: 'course', title: 'Course' },
        { id: 'email', title: 'Email' },
      ]
    });

    // Write the students to the CSV file
    await csvWriter.writeRecords(students);

    // Set the response headers to trigger a file download
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename=students.csv');

    // Send the CSV file to the client
    res.download('students.csv');
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
}

module.exports = { addStudentsFromCSV, getAllStudents , exportData }
