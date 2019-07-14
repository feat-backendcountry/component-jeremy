import React from 'react';

const Review = ({ review }) =>
  <section className="review">
    <section className="reviewHead">
      <section className="reviewRating">Stars: {review.rating} image here</section>
      <section className="reviewDate">{review.date}</section>
    </section>
    <section className="reviewTitle">{review.reviewTitle}</section>
    {review.fit && <div className="reviewHasFit">
      <ul>
        <li className="reviewFamiliarity">
          <span className="reviewFit-title">Familiarity: </span>
          <span className="reviewFit-desc">{review.familiarity}</span>
        </li>
        <li className="reviewFit">
          <span className="reviewFit-title">Fit: </span>
          <span className="reviewFit-desc">{review.fit}</span>
        </li>
        <li className="reviewSize">
          <span className="reviewFit-title">Size Bought: </span>
          <span className="reviewFit-desc">{review.size}</span>
        </li>
        <li className="reviewHeight">
          <span className="reviewFit-title-short">Height: </span>
          <span className="reviewFit-desc-short">{review.userHeight}"</span>
        </li>
        <li className="reviewWeight">
          <span className="reviewFit-title-short">Weight: </span>
          <span className="reviewFit-desc-short">{review.userWeight}lbs.</span>
        </li>
      </ul>
    </div>}
    <br></br>
    <p className="reviewBody">{review.reviewBody}</p>
    <section className="userBox">
      <section className="userCard" className="userAvatar">
        <img src={review.userAvatar} alt="user avatar"></img>
        {/* <img src="https://avatars0.githubusercontent.com/u/52470968?s=200&v=4" alt="user avatar"></img> */}
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