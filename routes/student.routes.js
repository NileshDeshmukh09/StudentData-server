const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multer');
const validateCsv = require('../middlewares/validate-csv');
const handleDbError = require('../middlewares/handle-db-error');
const studentController = require('../controllers/student.controller');
const  JWTAuth = require("../middlewares/JWTAuth");


// upload data of CSV to db
router.post('/students/upload', JWTAuth.verifyToken , upload.single('file'), validateCsv, studentController.addStudentsFromCSV , handleDbError);

// GET all students
router.get('/students', JWTAuth.verifyToken ,  studentController.getAllStudents , handleDbError);

// Export Data
router.get('/students/export', JWTAuth.verifyToken , studentController.exportData );


module.exports = router;
