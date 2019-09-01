const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

exports.login = async (req, res) => {
  let body = req.body;
  let query_user = await User.findOne({ 
    email: body.email
  });

  let isPasswordCorrect = await bcrypt.compare(body.password, query_user.password);

  if (isPasswordCorrect) {
    delete query_user.password
    const token = jwt.sign({ user: query_user }, 'FancyAppSecretKey')
    return res.json({
      status: 200,
      token,
      message: "Login complete."
    });
  }

  return res.json({
    status: 500,
    message: "Email or Password incorrect."
  });
};

exports.register = async (req, res) => {
  let body = req.body;
  let query_user = await User.findOne({ 
    email: body.email
  });

  let isPasswordCorrect = await bcrypt.compare(body.password, query_user.password);

  if (isPasswordCorrect) {
    delete query_user.password
    const token = jwt.sign({ user: query_user }, 'FancyAppSecretKey')
    return res.json({
      status: 200,
      token,
      message: "Login complete."
    });
  }

  return res.json({
    status: 500,
    message: "Email or Password incorrect."
  });
};