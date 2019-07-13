import React from 'react';

const Review = ({ review }) =>
  <section className='review'>
    <section className='reviewHead'>
      <section className='reviewRating'>Stars: {review.rating}</section>
      <section className='reviewDate'>{review.date}</section>
      <section className='reviewTitle'>{review.reviewTitle}</section>
    </section>
    <section className='reviewBody'>{review.reviewBody}</section>
    <section className='userBox'>
      <section className='userCard' className='userAvatar'>
        <img src={review.userAvatar} alt='user avatar'></img>
      </section>
      <section className='userCard' className='username'>{review.username}</section>
    </section>
    <section className='commentBox'>
      <section className='commentArea'>Leave a Comment</section>
      <section className='commentArea'>Flag Inapproprite</section>
      <section className='commentArea'>Like a Comment</section>
    </section>
    <br></br>
    {/* <div>{review.username} {review.userHeight && `is ${review.userHeight}'' and ${review.userWeight}lbs.`}</div> */}
  </section>;

export default Review;