import React from 'react';
import Review from './Review.jsx';

// class Reviews extends React.Component {
//   constructor(props) {
//     super(props);
//   }

const Reviews = (props) =>
  <div className="reviews">
    {(this.props.reviews.itemReviews) && this.props.reviews.itemReviews.map((review, i) => <Review key={review._id} review={review} />)}
  </div>;