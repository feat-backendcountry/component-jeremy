import React from 'react';
import Axios from 'axios';
import ReviewsView from './ReviewsView.jsx';
import QAView from './QAView.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'Reviews',
      itemId: 1,
      reviews: []
    };
  }

  changeView(view) {
    this.setState({
      view: view
    });
  }

  componentDidMount() {
    this.getReviews();
  }

  getReviews() {
    Axios.get(`/reviews/${this.state.itemId}`)
      .then(({data}) => {
        const reviews = data;
        this.setState({
          reviews
        });
      })
      .catch((err) => {
        console.log('error client getReviews');
      });
  }

  render() {
    return (
      <div>
        <div className="panel">
          <h1>Reviews or Q and A</h1>
          <nav className="nav">
            <span
              className={this.state.view === 'Reviews'
                ? 'nav-item selected'
                : 'nav-item unselected'}
              onClick={() => this.changeView('Reviews')}
            >
              Reviews
            </span>
            <span> | </span>
            <span
              className={this.state.view === 'Q and A'
                ? 'nav-item selected'
                : 'nav-item unselected'}
              onClick={() => this.changeView('Q and A')}
            >
              Q and A
            </span>
          </nav>
          <div className="main-view">
            {this.state.view === 'Reviews'
              ? <ReviewsView reviews={this.state.reviews}/>
              : <QAView />
            }
          </div>
          <footer>
            Here lies smelly feat.
          </footer>
        </div>
      </div>
    );
  }
}

export default App;