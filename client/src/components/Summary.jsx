import React from 'react';


class Summary extends React.Component {
  constructor(props) {
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
    const ratingsObj = {};
    for (let i = 0; i < ratings.length; i++) {
      if (ratingsObj[ratings[i]]) {
        ratingsObj[ratings[i]]++;
      } else if (ratings[i] !== undefined) {
        ratingsObj[ratings[i]] = 1;
      }
    }
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
    //determine if Fits slightly small
    this.setState({
      reviews,
      avgRating,
      ratingsObj,
      avgFit,
      fitsObj
    }, () => console.log(JSON.stringify(this.state.ratingsObj)));
  }

  render() {
    if (this.state.reviews) {
      return (
        <div className='summaryBlock'>
          <div className='avgRating'>
            Overall Rating
            <div>{this.state.avgRating.toFixed(1)} based on {this.state.reviews.length} ratings</div>
          </div>
          <div className='starsBar'>
            Review Summary
            <ul>
              <li>No. of 5 Star Ratings: {this.state.ratingsObj[5]} / barChart: {(this.state.ratingsObj[5] / this.state.reviews.length).toFixed(2) * 100}%</li>
              <li>No. of 4 Star Ratings: {this.state.ratingsObj[4]} / barChart: {(this.state.ratingsObj[4] / this.state.reviews.length).toFixed(2) * 100}%</li>
              <li>No. of 3 Star Ratings: {this.state.ratingsObj[3]} / barChart: {(this.state.ratingsObj[3] / this.state.reviews.length).toFixed(2) * 100}%</li>
              <li>No. of 2 Star Ratings: {this.state.ratingsObj[2]} / barChart: {(this.state.ratingsObj[2] / this.state.reviews.length).toFixed(2) * 100}%</li>
              <li>No. of 1 Star Ratings: {this.state.ratingsObj[1]} / barChart: {(this.state.ratingsObj[1] / this.state.reviews.length).toFixed(2) * 100}%</li>
            </ul>
          </div>
          <div className='fitBar'>
            Avg Fit Goes Here
            <ul>
              <li>Avg Fit: {this.state.avgFit.toFixed(2)}%</li>
              <li>Runs Small: {this.state.fitsObj['Runs Small']}</li>
              <li>True to Size: {this.state.fitsObj['True to Size']}</li>
              <li>Runs Large: {this.state.fitsObj['Runs Large']}</li>
            </ul>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Summary;