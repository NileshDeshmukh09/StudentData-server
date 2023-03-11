const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multer');
const validateCsv = require('../middlewares/validate-csv');
const handleDbError = require('../middlewares/handle-db-error');
const studentController = require('../controllers/student.controller');

// upload data of CSV to db
router.post('/students/upload', upload.single('file'), validateCsv, studentController.addStudentsFromCSV , handleDbError);

// GET all students
router.get('/students', studentController.getAllStudents , handleDbError);

module.exports = router;
