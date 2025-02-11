const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  umichID: { type: String, unique: true, required: true }, // U-M login ID
  email: { type: String, required: true },
  name: { type: String, required: true },
  role: { type: String, enum: ["admin", "user"], default: "user" },
  profilePic: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);
