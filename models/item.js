const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true }, // Furniture, appliances, etc.
  location: { type: String, required: true }, // North Campus, etc.
  imageUrl: { type: String },
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Reference to User
  status: { type: String, enum: ["available", "claimed"], default: "available" },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Item', ItemSchema);
