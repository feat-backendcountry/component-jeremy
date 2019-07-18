import React from 'react';
import Summary from './Summary.jsx';
import Review from './Review.jsx';
import Filter from './Filter.jsx';


class ReviewsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFilter: 'All',
      filteredReviews: this.props.reviews.itemReviews,
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
      filter: true,
      visable: 5
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
          <a className="write-review-btn" >Write A Review</a>
        </div>
        <Filter changeFilter={this.changeFilter}/>
        <section className='reviews'>
          {this.state.filter && this.state.visable &&
            this.state.filteredReviews.slice(0, this.state.visable).map((review, i) => <Review key={review._id} review={review} />)
          }
          {this.state.filter && this.state.filteredReviews.length > this.state.visable &&
            <a className="load-btn" onClick={this.loadMore}>Load More</a>
          }

          {!this.state.filter && this.props.reviews.itemReviews && this.state.visable &&
            this.props.reviews.itemReviews.slice(0, this.state.visable).map((review, i) => <Review key={review._id} review={review} />)}
          {!this.state.filter && this.props.reviews.itemReviews && this.props.reviews.itemReviews.length > this.state.visable &&
            <a className="load-btn" onClick={this.loadMore}>Load More</a>
          }
        </section>
      </div>
    );
  }
}

export default ReviewsView;