const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
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
        user : {
          id : newUser.id ,
          email : newUser.email ,
          updatedAt : newUser.updatedAt ,
          createdAt : newUser.createdAt 
        }
        
     });
  } catch (error) {
    console.log( error );
    return res.status(500).json({ error: 'Unable to create user' });
  }
};




exports.login = async (req, res) => {
  const { email, password } = req.body;

  // Find the user by email
  const user = await User.findOne({ where: { email } });
  if (!user) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }

  // Check if the password matches
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }

  // Create a JWT token with a 2 days expiry
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: '2d',
  });

  // Return the token to the client
  return res.json({ 
    message : "user Fetched successfully !",
    user : {
      id : user.id ,
      email : user.email ,
      accesstoken : token 
    }
  });
};
