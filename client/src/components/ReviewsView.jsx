import React from 'react';
import Summary from './Summary.jsx';
import Review from './Review.jsx';


class ReviewsView extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div className="summary-container">
          <Summary reviews={this.props.reviews.itemReviews} summaryData={this.props.summaryData} />
        </div>
        <h4>Reviews for {this.props.reviews.itemName}, itemId: {this.props.reviews.itemId}</h4>
        <select>
          <option>All</option>
          <option>Reviews</option>
          <option>Photos</option>
          <option>Runs Small</option>
          <option>True to Size</option>
          <option>Runs Large</option>
          <option>All Fit Reviews</option>
        </select>
        <section className='reviews'>
          {(this.props.reviews.itemReviews) && this.props.reviews.itemReviews.map((review, i) => <Review key={review._id} review={review} />)}
        </section>
      </div>
    );
  }
}


export default ReviewsView;