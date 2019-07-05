const Review = require('../database/index.js');

const getReviewById = (id) => {
  return Review.find({itemId: id})
}

module.exports = {
  getReviewById
}