var mongoose = require("mongoose");

var WebsiteSchema = new mongoose.Schema({
  title: {type: String, index: true}, 
  content: {type: String},
  active: {type: Boolean, default: false},
  updatedAt: { type: Date}
}, {timestamps: true});

var Website = mongoose.model('Website', WebsiteSchema);

module.exports = {
  Website: Website
}