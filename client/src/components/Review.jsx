import React from 'react';

const Review = ({ review }) =>
  <section className="review">
    <section className="reviewHead">
      <section className="reviewRating">Stars: {review.rating} image here</section>
      <section className="reviewDate">{review.date}</section>
    </section>
    <section className="reviewTitle">{review.reviewTitle}</section>
    {review.fit && <div className="reviewHasFit">
      <section className="reviewFamiliarity">Familiarity: {review.familiarity}</section>
      <section className="reviewFit">Fit: {review.fit}</section>
      <section className="reviewSize">Size Bought: {review.size}</section>
      <section className="reviewHeight">Height: {review.userHeight}</section>
      <section className="reviewWeight">Weight: {review.userWeight}lbs</section>
    </div>
    }
    <section className="reviewBody">{review.reviewBody}</section>
    <section className="userBox">
      <section className="userCard" className="userAvatar">
        <img src={review.userAvatar} alt="user avatar"></img>
      </section>
      <section className="userCard" className="username">{review.username}</section>
    </section>
    <section className="commentBox">
      <section className="commentArea">Leave a Comment</section>
      <section className="commentArea">Flag Inapproprite</section>
      <section className="commentArea">Like a Comment</section>
    </section>
    <br></br>
    {/* <div>{review.username} {review.userHeight && `is ${review.userHeight}"" and ${review.userWeight}lbs.`}</div> */}
  </section>;

export default Review;