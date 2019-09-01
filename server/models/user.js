const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserModelSchema = new Schema({
  email: { 
    type: String, 
    required: true 
  },
  password: { 
    type: String, 
    required: true 
  },
  first_name: String,
  last_name: String,
  create_date: {
    type: Date,
    default: Date.now
  }
});

const UserModel = mongoose.model('user', UserModelSchema);
module.exports = UserModel;
