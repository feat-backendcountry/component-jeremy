const Review = require('../database/index.js');

const getReviewById = (id) => {
  return Review.find({itemId: id})
}

const getReviewsDb = () => {
  return Review.find({}).sort({itemId: 1})
}

module.exports = {
  getReviewById,
  getReviewsDb
}