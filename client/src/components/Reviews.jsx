import React from 'react';
import Review from './Review.jsx';

const Reviews = (props) =>
  <div className="reviews">
    {(this.props.reviews.itemReviews) && this.props.reviews.itemReviews.map((review, i) => <Review key={review._id} review={review} />)}
  </div>;

export default Reviews;

//component not currently in use.