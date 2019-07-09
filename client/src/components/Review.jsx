import React from 'react';

const Review = ({ review }) =>
  <section>
    <section className='reviewHead'>
      <section className='reviewRating'>Stars: {review.rating}</section>
      <section className='reviewDate'>{review.date}</section>
      <section className='reviewTitle'>{review.reviewTitle}</section>
    </section>
    <section className='reviewBody'>{review.reviewBody}</section>
    <section className='userCard'>
      <section className='userAvatar'>
        <img src={review.userAvatar}></img>
      </section>
      <section className='username'>{review.username}</section>
    </section>
    <section className='commentArea'>
      <section>Leave a Comment</section>
      <section>Flag Inapproprite</section>
      <section>Like a Comment</section>
    </section>
    <br></br>
    {/* <div>{review.username} {review.userHeight && `is ${review.userHeight}'' and ${review.userWeight}lbs.`}</div> */}
  </section>;

export default Review;