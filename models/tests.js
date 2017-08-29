var mongoose = require("mongoose");
var uniqueValidator = require('mongoose-unique-validator');

var TestSchema = new mongoose.Schema({
  name: { type: String, index: true }, 
  username: {type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true},
  email: {type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true},
  password: { type: String, required: [true, "can't be blank"]},
  active: {type: Boolean, default: false}
}, {timestamps: true});

TestSchema.plugin(uniqueValidator, {message: 'is already taken.'});

var Test = mongoose.model('Test', TestSchema);

module.exports = {
  Test: Test
}