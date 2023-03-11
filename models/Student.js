// models/student.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Student = sequelize.define('Student', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },

  rollNo: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },

  address: {
    type: DataTypes.STRING,
    allowNull: false
  },

  institute: {
    type: DataTypes.STRING,
    allowNull: false
  },

  course: {
    type: DataTypes.STRING,
    allowNull: false
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
});

module.exports = Student;
