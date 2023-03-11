const bcrypt = require('bcrypt');
const  User  = require('../models/User');

exports.signup = async (req, res) => {
  const { email, password } = req.body;

  // Check if the email is already in use
  const existingUser = await User.findOne({ where: { email } });
  if (existingUser) {
    return res.status(409).json({ error: 'Email already in use' });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create a new user
  try {
    const newUser = await User.create({
      email,
      password: hashedPassword,
    });
    return res.status(201).json({ 
        message: 'User created successfully',
        newUser
     });
  } catch (error) {
    console.log( error );
    return res.status(500).json({ error: 'Unable to create user' });
  }
};
