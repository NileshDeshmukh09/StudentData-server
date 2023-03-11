
const fs = require('fs');
const csv = require('csv-parser');
const { SequelizeValidationError } = require('sequelize');

function validateCsv(req, res, next) {
  if (!req.file) {
    return res.status(400).json({ message: 'CSV file is required' });
  }

  const results = [];
  const errors = [];
  const processedRollNos = [];

  fs.createReadStream(req.file.path)
    .pipe(csv())
    .on('data', (data) => {
        console.log( "Data :" , data );
      if (!data.name) {
        errors.push('Name is required');
      }
      if (!data.rollno) {
        errors.push('Roll No is required');
      }
      if (!data.address) {
        errors.push('Address is required');
      }
      if (!data.institute) {
        errors.push('Institute is required');
      }
      if (!data.course) {
        errors.push('Course is required');
      }
      if (!data.email) {
        errors.push('Email is required');
      }

      console.log("length : ", errors.length);
      if (errors.length === 0) {
        if (processedRollNos.includes(data.rollno)) {
          console.log(`Duplicate entry found for Roll_No: ${data.rollno}. Skipping row.`);
        } else {
          processedRollNos.push(data.rollno);
          results.push(data);
        }
      } else {
        throw new SequelizeValidationError(errors);
      }
    })
    .on('end', () => {
      req.students = results;
      console.log("Res-length : ", results.length);
      next();
    })
    .on('error', (err) => {
      return res.status(400).json({ message: err.message });
    });
}

module.exports = validateCsv;
