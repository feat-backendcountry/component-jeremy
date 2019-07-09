import React from 'react';


class Summary extends React.Component {
  constructor({props}) {
    super(props);
    this.state = {};
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (!this.state.avgRating) {
      this.analyzeReviews();
    }
  }

  analyzeReviews() {
    // console.log(this.props.reviews.length);
    const reviews = this.props.reviews;
    const ratings = reviews.map((review, i, arr) => review.rating);
    const avgRating = ratings.reduce((a, b) => a + b) / ratings.length;
    const fitsArr = reviews.map((review) => review.fit);
    //avg fit is determined by weighting small at 0 reg at 50 and large at 100 and is the percent above/below avg
    const avgFit = fitsArr
      .map((fit) => (fit === 'Runs Large') ? 100 : (fit === 'True to Size') ? 50 : 0)
      .reduce((a, b) => a + b)
      / fitsArr.length;
    const fitsObj = {};
    for (let i = 0; i < fitsArr.length; i++) {
      if (fitsObj[fitsArr[i]]) {
        fitsObj[fitsArr[i]]++;
      } else if (fitsArr[i] !== undefined) {
        fitsObj[fitsArr[i]] = 1;
      }
    }
    this.setState({
      reviews,
      ratings,
      avgRating,
      avgFit,
      fitsObj
    });
    console.log('fits object: ', JSON.stringify(fitsObj));
    console.log('avgFit', avgFit);
    console.log('avgRating: ', avgRating);
  }

  render() {
    return (
      <div>
        <div>No. of reviews: {this.props.reviews && this.props.reviews.length}</div>
        <div>{this.props.reviews && JSON.stringify(this.props.reviews[0])}</div>
      </div>
    );
  }
}

export default Summary;