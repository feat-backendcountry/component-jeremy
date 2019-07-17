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
            {this.props.summaryData.avgRating.toFixed(0) === '5' && <section className="avgRating-stars">⭑⭑⭑⭑⭑</section>}
            {this.props.summaryData.avgRating.toFixed(0) === '4' && <section className="avgRating-stars">⭑⭑⭑⭑⭒</section>}
            {this.props.summaryData.avgRating.toFixed(0) === '3' && <section className="avgRating-stars">⭑⭑⭑⭒⭒</section>}
            {this.props.summaryData.avgRating.toFixed(0) === '2' && <section className="avgRating-stars">⭑⭑⭒⭒⭒</section>}
            {this.props.summaryData.avgRating.toFixed(0) === '1' && <section className="avgRating-stars">⭑⭒⭒⭒⭒</section>}
          </div>

          <div className='starsBar'>
            <div className="starsBar-title">Review Summary</div><br></br>
            <div className="col-3">
              <div className="starsBar-stars">5 Stars</div>
              <div className="summary-bar bar5"></div>
              <div className="starsBar-num">
                {this.props.summaryData.ratingsObj[5] || 0}
              </div>
            </div>
            <div className="col-3">
              <div className="starsBar-stars">4 Stars</div>
              <div className="summary-bar bar4"></div>
              <div className="starsBar-num">
                {this.props.summaryData.ratingsObj[4] || 0}
              </div>
            </div>
            <div className="col-3">
              <div className="starsBar-stars">3 Stars</div>
              <div className="summary-bar bar3"></div>
              <div className="starsBar-num">
                {this.props.summaryData.ratingsObj[3] || 0}
              </div>
            </div>
            <div className="col-3">
              <div className="starsBar-stars">2 Stars</div>
              <div className="summary-bar bar2"></div>
              <div className="starsBar-num">
                {this.props.summaryData.ratingsObj[2] || 0}
              </div>
            </div>
            <div className="col-3">
              <div className="starsBar-stars">1 Stars</div>
              <div className="summary-bar bar1"></div>
              <div className="starsBar-num">
                {this.props.summaryData.ratingsObj[1] || 0}
              </div>
            </div>
          </div>

          <div className='fitBar'>
            <div className="fitBar-title">Fits True To Size</div>
            {/* <div>Avg Fit: {this.props.summaryData.avgFit.toFixed(2)}%</div> */}
            <div className="fitBar-bar">
            </div>
            <ul>
              <li>Runs Small {this.props.summaryData.fitsObj['Runs Small']}</li>
              <li>True to Size {this.props.summaryData.fitsObj['True to Size']}</li>
              <li>Runs Large {this.props.summaryData.fitsObj['Runs Large']}</li>
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