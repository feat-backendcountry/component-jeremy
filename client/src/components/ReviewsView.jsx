import React from 'react';
import Summary from './Summary.jsx';
import Review from './Review.jsx';
// import Reviews from './Reviews.jsx';


class ReviewsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFilter: 'All',
      filteredReviews: [],
      visable: 5,
      filter: false
    };
    this.changeFilter = this.changeFilter.bind(this);
    this.loadMore = this.loadMore.bind(this);
  }

  changeFilter(e) {
    const selected = e.target.value;
    let filteredReviews = [];
    if (selected === 'All' || selected === 'Reviews') {
      filteredReviews = this.props.filter.all;
    } else if (selected === 'Runs Small') {
      filteredReviews = this.props.filter.fitSmall;
    } else if (selected === 'True to Size') {
      filteredReviews = this.props.filter.fitTrue;
    } else if (selected === 'Runs Large') {
      filteredReviews = this.props.filter.fitLarge;
    } else if (selected === 'All Fit Reviews') {
      filteredReviews = this.props.filter.hasFit;
    }
    this.setState({
      currentFilter: selected,
      filteredReviews,
      filter: true
    });
  }

  loadMore() {
    const visable = this.state.visable + 5;
    this.setState({visable});
  }

  render() {
    return (
      <div>
        <Summary reviews={this.props.reviews.itemReviews} summaryData={this.props.summaryData} />
        <div className="write-review-container">
          <div className="write-review-title">What do you think about this product?</div>
          {/* <button className="write-review-btn">Write A Review</button> */}
          <a className="write-review-btn" href="/">Write A Review</a>
        </div>
        <div className="filter-container">
          <div className="filter-title">View</div>
          <select className="filter-select" onChange={this.changeFilter}>
            <option defaultValue>All</option>
            <option>Reviews</option>
            {/* <option>Photos</option> */}
            <option>Runs Small</option>
            <option>True to Size</option>
            <option>Runs Large</option>
            <option>All Fit Reviews</option>
          </select>
        </div>
        <section className='reviews'>
          {this.state.filter &&
            this.state.filteredReviews.map((review, i) => <Review key={review._id} review={review} />)
          }
          {this.state.filter && this.state.filteredReviews.length > this.state.visable &&
            <a className="load-btn" onClick={this.loadMore}>Load More</a>
          }

          {!this.state.filter && this.props.reviews.itemReviews && this.state.visable &&
            this.props.reviews.itemReviews.slice(0, this.state.visible).map((review, i) => <Review key={review._id} review={review} />)}
          {!this.state.filter && this.props.reviews.itemReviews && this.props.reviews.itemReviews.length > this.state.visable &&
            <a className="load-btn" onClick={this.loadMore}>Load More</a>
          }
        </section>
      </div>
    );
  }
}

export default ReviewsView;