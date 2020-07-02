const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  rating: { type: Number, required: true },
  review: { type: String, required: true },
  recAreaRef: { type: mongoose.Schema.ObjectId, ref: 'RecArea' },
  campgroundRef: { type: mongoose.Schema.ObjectId, ref: 'Campground' },
  comments: [commentSchema]
}, {
  timestamps: true
})

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User' }
}, {
  timestamps: true
})

module.exports = mongoose.model('Review', reviewSchema)