import React from 'react';
import { MdThumbUp, MdFlag } from 'react-icons/md';

const Review = ({ review }) =>
  <section className="review">
    <section className="reviewHead">
      {review.rating === 5 && <section className="reviewRating">⭑⭑⭑⭑⭑</section>}
      {review.rating === 4 && <section className="reviewRating">⭑⭑⭑⭑⭒</section>}
      {review.rating === 3 && <section className="reviewRating">⭑⭑⭑⭒⭒</section>}
      {review.rating === 2 && <section className="reviewRating">⭑⭑⭒⭒⭒</section>}
      {review.rating === 1 && <section className="reviewRating">⭑⭒⭒⭒⭒</section>}
      {/* <section className="reviewRating">{review.rating} star image here</section> */}
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
    <div className="reviewBody">
      <p>{review.reviewBody}</p>
    </div>
    <section className="userBox">
      <div className="user-container">
        <span className="userAvatar">
          <img src={review.userAvatar} alt={review.username}></img>
        </span>
        <span className="username">
          <a href="/">{review.username}</a>
        </span>
      </div>
    </section>
    <section className="commentBox">
      <section className="commentArea leavecomment">Leave a comment...</section>
      <section className="commentArea flagcomment">Flag inappropriate <MdFlag /></section>
      <section className="commentArea likecomment"><MdThumbUp /> 0</section>
    </section>
    {/* <div>{review.username} {review.userHeight && `is ${review.userHeight}"" and ${review.userWeight}lbs.`}</div> */}
  </section>;

export default Review;