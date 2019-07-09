import React from 'react';

const Summary = ({reviews}) =>
  <div>
    <div>No. of reviews: {reviews && reviews.length}</div>
    {/* <div>{reviews && JSON.stringify(reviews[0])}</div> */}
  </div>;

export default Summary;