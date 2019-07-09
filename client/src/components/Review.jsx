import React from 'react';

const Review = ({ review }) =>
  <li>
    <div>{review.username} {review.userHeight && `is ${review.userHeight}'' and ${review.userWeight}lbs.`}</div>
    <img src={review.userAvatar}></img>
    <div>{review.date}</div>
    <div>Stars: {review.rating}</div>
    <div>{review.reviewTitle}</div>
    <div>{review.reviewBody}</div>
  </li>;

export default Review;