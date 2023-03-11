const Student = require('../models/student');
const csv = require('csv-parser');
const fs = require('fs');

const addStudentsFromCSV = async (req, res) => {
    try {
        const results = [];
        fs.createReadStream(req.file.path)
            .pipe(csv())
            .on('data', (data) => {
                results.push(data);
            })
            .on('end', async () => {
                const uniqueResults = [];
                const existingStudents = await Student.findAll();
                for (let i = 0; i < results.length; i++) {
                    let isUnique = true;
                    for (let j = 0; j < existingStudents.length; j++) {
                        if (results[i].rollNo === existingStudents[j].rollNo) {
                            isUnique = false;
                            break;
                        }
                    }
                    if (isUnique) {
                        uniqueResults.push(results[i]);
                    }
                }
                const createdStudents = await Student.bulkCreate(uniqueResults);
                res.status(201).json(createdStudents);
            });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    addStudentsFromCSV,
};