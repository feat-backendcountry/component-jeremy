const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/reviews', { useNewUrlParser: true })
  .then(() => console.log('connected to mongo'))
  .catch(() => console.log('err'))

const reviewSchema = mongoose.Schema(
  {
    itemId: { type: Number, required: true },
    itemName: { type: String, required: true },
    itemReviews: [{
      rating: { type: Number, required: true },
      date: { type: String, required: true },
      username: { type: String, required: true },
      userAvatar: { type: String, required: true },
      reviewTitle: { type: String, required: true },
      reviewBody: { type: String, required: true },
      media: { type: String, required: false },
      familiarity: { type: String, required: false },
      fit: { type: String, required: false },
      size: { type: String, required: false },
      userHeight: { type: Number, required: false },
      userWeight: { type: Number, required: false }
    }]
  }
)

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review