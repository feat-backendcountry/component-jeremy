import React from 'react';


class Summary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.reviews && this.props.summaryData) {
      return (
        <div className='summaryBlock'>
          <div className='avgRating'>
            Overall Rating
            <div>{this.props.summaryData.avgRating.toFixed(1)} based on {this.props.reviews.length} ratings</div>
          </div>
          <div className='starsBar'>
            Review Summary
            <ul>
              <li>No. of 5 Star Ratings: {this.props.summaryData.ratingsObj[5]} / barChart: {this.props.summaryData.ratingsObj.star5Bar}%</li>
              <li>No. of 4 Star Ratings: {this.props.summaryData.ratingsObj[4]} / barChart: {this.props.summaryData.ratingsObj.star4Bar}%</li>
              <li>No. of 3 Star Ratings: {this.props.summaryData.ratingsObj[3]} / barChart: {this.props.summaryData.ratingsObj.star3Bar}%</li>
              <li>No. of 2 Star Ratings: {this.props.summaryData.ratingsObj[2]} / barChart: {this.props.summaryData.ratingsObj.star2Bar}%</li>
              <li>No. of 1 Star Ratings: {this.props.summaryData.ratingsObj[1]} / barChart: {this.props.summaryData.ratingsObj.star1Bar}%</li>
            </ul>
          </div>
          <div className='fitBar'>
            Avg Fit Goes Here
            <ul>
              <li>Avg Fit: {this.props.summaryData.avgFit.toFixed(2)}%</li>
              <li>Runs Small: {this.props.summaryData.fitsObj['Runs Small']}</li>
              <li>True to Size: {this.props.summaryData.fitsObj['True to Size']}</li>
              <li>Runs Large: {this.props.summaryData.fitsObj['Runs Large']}</li>
            </ul>
          </div>
        </div>
      );
    } else {
      return <div>Summary Went Wrong</div>;
    }
  }
}

export default Summary;