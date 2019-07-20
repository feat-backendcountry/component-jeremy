import React from 'react';
import Summary from './Summary.jsx';
import Review from './Review.jsx';
import Filter from './Filter.jsx';
import DemoFilter from './DemoFilter.jsx';
import AltFilter from './AltFilter.jsx';


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
    let filteredReviews = (selected === 'All' || selected === 'Reviews') ? this.props.filter.all
      : (selected === 'Runs Small') ? this.props.filter.fitSmall
        : (selected === 'True to Size') ? this.props.filter.fitTrue
          : (selected === 'Runs Large') ? this.props.filter.fitLarge
            : (selected === 'All Fit Reviews') ? this.props.filter.hasFit
              : 1;
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
          <a className="write-review-btn" onClick={this.props.showModal}>Write A Review</a>
        </div>
        <Filter changeFilter={this.changeFilter}/>
        {/* <DemoFilter /> */}
        {/* <AltFilter currentFilter={this.state.currentFilter}/> */}
        <section className='reviews'>
          {this.state.filter && this.state.visable &&
            this.state.filteredReviews.slice(0, this.state.visable).map((review, i) => <Review key={review._id} review={review} showModal={this.props.showModal}/>)
          }
          {this.state.filter && this.state.filteredReviews.length > this.state.visable &&
            <a className="load-btn" onClick={this.loadMore}>Load More</a>
          }

          {!this.state.filter && this.props.reviews.itemReviews && this.state.visable &&
            this.props.reviews.itemReviews.slice(0, this.state.visable).map((review, i) => <Review key={review._id} review={review} showModal={this.props.showModal}/>)}
          {!this.state.filter && this.props.reviews.itemReviews && this.props.reviews.itemReviews.length > this.state.visable &&
            <a className="load-btn" onClick={this.loadMore}>Load More</a>
          }
        </section>
      </div>
    );
  }
}

export default ReviewsView;