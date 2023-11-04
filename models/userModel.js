const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    
    password: { type: String, required: true },

  Name: { type: String , default:''},
   confirmpassword: { type: String , default:''},
   
  }
   
);

const loginModel = new mongoose.model("users", userSchema);

module.exports = loginModel;