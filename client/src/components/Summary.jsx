import React from 'react';


class Summary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.reviews && this.props.summaryData) {
      return (
        <div className='summary-container'>
          <div className='avgRating'>
            <div className='avgRating-title'>Overall Rating</div>
            <div className="avgRating-subtitle">
              {this.props.summaryData.avgRating.toFixed(1)} based on {this.props.reviews.length} ratings
            </div>
            <div>starsimagehere</div>
          </div>
          <div className='starsBar'>
            <div className="starsBar-title">Review Summary</div>
            <figure>
              <a className="starsBar-stars" data-rank="5">5 Stars</a>
              <div className="starsBar-bar bar5">
                <span></span>
                <div>{this.props.summaryData.ratingsObj.star5Bar}%</div>
              </div>
              <span className="starsBar-reviews-number">
                <a className="five-star-bar" data-rank="5" data-quantity={this.props.summaryData.ratingsObj[5]}>{this.props.summaryData.ratingsObj[5]}</a>
              </span>

              <a className="starsBar-stars" data-rank="4">4 Stars</a>
              <div className="starsBar-bar bar4">
                <span></span>
                <div>{this.props.summaryData.ratingsObj.star4Bar}%</div>
              </div>
              <span className="starsBar-reviews-number">
                <a className="five-star-bar" data-rank="4" data-quantity={this.props.summaryData.ratingsObj[4]}>{this.props.summaryData.ratingsObj[4]}</a>
              </span>

              <a className="starsBar-stars" data-rank="3">3 Stars</a>
              <div className="starsBar-bar bar3">
                <span></span>
                <div>{this.props.summaryData.ratingsObj.star3Bar}%</div>
              </div>
              <span className="starsBar-reviews-number">
                <a className="five-star-bar" data-rank="3" data-quantity={this.props.summaryData.ratingsObj[3]}>{this.props.summaryData.ratingsObj[3]}</a>
              </span>

              <a className="starsBar-stars" data-rank="2">2 Stars</a>
              <div className="starsBar-bar bar2">
                <span></span>
                <div>{this.props.summaryData.ratingsObj.star2Bar}%</div>
              </div>
              <span className="starsBar-reviews-number">
                <a className="five-star-bar" data-rank="2" data-quantity={this.props.summaryData.ratingsObj[2]}>{this.props.summaryData.ratingsObj[2]}</a>
              </span>

              <a className="starsBar-stars" data-rank="1">1 Stars</a>
              <div className="starsBar-bar bar1">
                <span></span>
                <div>{this.props.summaryData.ratingsObj.star1Bar}%</div>
              </div>
              <span className="starsBar-reviews-number">
                <a className="five-star-bar" data-rank="1" data-quantity={this.props.summaryData.ratingsObj[1]}>{this.props.summaryData.ratingsObj[1]}</a>
              </span>


            </figure>
          </div>

          <div className='fitBar'>
            <div className="fitBar-title">Avg Fit Goes Here</div>
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