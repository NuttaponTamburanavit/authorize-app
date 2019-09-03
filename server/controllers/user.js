const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

const hashPassword = async (plaintextPassword) => {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  return await bcrypt.hash(plaintextPassword, salt);
}

exports.create_user = async (req, res) => {
  let body = req.body;
  let query_user = await User.findOne({ 
    email: body.email
  });

  if (query_user) {
    return res.json({
      status: 400,
      message: "Email exists"
    });
  }

  let email = body.email;
  let password = await hashPassword(body.password);

  await User.create({ email, password });
  return res.json({
    status: 200,
    email,
    message: "Register complete."
  });
};