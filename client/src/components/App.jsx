import React from 'react';
import Axios from 'axios';
import ReviewsView from './ReviewsView.jsx';
import QAView from './QAView.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'Reviews',
      reviews: [],
      showModal: false
    };
    this.getReviews = this.getReviews.bind(this);
    this.changeView = this.changeView.bind(this);
    this.filterReviews = this.filterReviews.bind(this);
    this.summarizeReviews = this.summarizeReviews.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  componentWillMount() {
    var parsedUrl = new URL(window.location.href);
    const itemId = +parsedUrl.searchParams.get('id') || Math.ceil(Math.random() * 100) + 1;
    this.setState({itemId}, () => this.getReviews());
  }

  changeView(view) {
    this.setState({
      view: view
    });
  }

  showModal() {
    this.setState({
      showModal: true
    });
  }

  hideModal() {
    this.setState({
      showModal: false
    });
  }

  getReviews() {
    Axios.get(`reviews/${this.state.itemId}`)
      .then(({data}) => {
        const reviews = data;
        this.setState({reviews}, () => {
          this.summarizeReviews();
          this.filterReviews();
        } );
      })
      .catch((err) => {
        console.log('error client getReviews');
      });
  }

  filterReviews() {
    const reviews = this.state.reviews.itemReviews;
    const filter = {
      all: reviews,
      hasFit: reviews.filter(review => review.fit),
      fitSmall: reviews.filter(review => review.fit === 'Runs Small'),
      fitTrue: reviews.filter(review => review.fit === 'True to Size'),
      fitLarge: reviews.filter(review => review.fit === 'Runs Large'),
      // hasMedia: []
    };

    this.setState({ filter });
  }

  summarizeReviews() {
    const reviews = this.state.reviews.itemReviews;
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
    ratingsObj.star5Bar = (ratingsObj[5] !== 0) ? (ratingsObj[5] / reviews.length).toFixed(2) * 100 || 0 : 0;
    ratingsObj.star4Bar = (ratingsObj[4] !== 0) ? (ratingsObj[4] / reviews.length).toFixed(2) * 100 || 0 : 0;
    ratingsObj.star3Bar = (ratingsObj[3] !== 0) ? (ratingsObj[3] / reviews.length).toFixed(2) * 100 || 0 : 0;
    ratingsObj.star2Bar = (ratingsObj[2] !== 0) ? (ratingsObj[2] / reviews.length).toFixed(2) * 100 || 0 : 0;
    ratingsObj.star1Bar = (ratingsObj[1] !== 0) ? (ratingsObj[1] / reviews.length).toFixed(2) * 100 || 0 : 0;
    const fitsArr = reviews.map((review) => review.fit);
    const avgFit = fitsArr
      .map((fit) => (fit === 'Runs Large') ? 100 : (fit === 'True to Size') ? 50 : 25)
      .reduce((a, b) => a + b)
      / fitsArr.length;
    const fitsObj = {
      'Runs Small': 0,
      'True to Size': 0,
      'Runs Large': 0
    };
    for (let i = 0; i < fitsArr.length; i++) {
      if (fitsObj[fitsArr[i]]) {
        fitsObj[fitsArr[i]]++;
      } else if (fitsArr[i] !== undefined) {
        fitsObj[fitsArr[i]] = 1;
      }
    }
    const summaryData = {
      reviews,
      avgRating,
      ratingsObj,
      avgFit,
      fitsObj
    };
    this.setState({summaryData});
  }

  render() {
    return (
      <div className="app">
        {this.state.showModal &&
          <div className='modal-container' onClick={this.hideModal}>
            <img
              className='modal-image'
              src='https://i.imgur.com/kL2hUS1.png'
              alt='static image component'
              // onClick={this.hideModal}
            />
          </div>
        }
        <div className="main">
          <div className="reviews-top-boarder"></div>
          <div className="tabs-container">
            <ul className="tabs">
              <li
                className={this.state.view === 'Reviews'
                  ? 'selected'
                  : 'unselected'}
                onClick={() => this.changeView('Reviews')}
              >
                Reviews
              </li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li
                className={this.state.view === 'Q & A'
                  ? 'selected'
                  : 'unselected'}
                onClick={() => this.changeView('Q & A')}
              >
                Q & A
              </li>
            </ul>
            <div className="content">
              {this.state.view === 'Reviews'
                ? <ReviewsView
                  reviews={this.state.reviews}
                  summaryData={this.state.summaryData}
                  filter={this.state.filter}
                  showModal={this.showModal}
                />
                : <QAView showModal={this.showModal} />
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;