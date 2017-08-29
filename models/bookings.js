var mongoose = require("mongoose");
var uniqueValidator = require('mongoose-unique-validator');

var BookingSchema = new mongoose.Schema({
	userId: {type: String, required: [true, "can't be blank"]},
	referenceId: {type: String, unique: true},
	active: {type: String, default: false}
}, {timestamps: true});

BookingSchema.plugin(uniqueValidator, {message: 'is already taken.'});

var Booking = mongoose.model('Booking', BookingSchema);

module.exports = {
  Booking: Booking
}