import React from 'react';
import Summary from './Summary.jsx';
import Review from './Review.jsx';

const ReviewsView = ({reviews}) =>
  <div>
    <h4>Reviews Summary</h4>
    <Summary reviews={reviews.itemReviews}/>
    <h4>Reviews for {reviews.itemName}, itemId: {reviews.itemId}</h4>
    <select>
      <option>All</option>
      <option>Reviews</option>
      <option>Photos</option>
      <option>Runs Small</option>
      <option>True to Size</option>
      <option>Runs Large</option>
      <option>All Fit Reviews</option>
    </select>
    <section className='review'>
      {(reviews.itemReviews) && reviews.itemReviews.map((review, i) => <Review key={review._id} review={review}/>)}
    </section>
  </div>;

export default ReviewsView;