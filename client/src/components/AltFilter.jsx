import React from 'react';

class AltFilter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="filter-select" style={{ width: 200 + 'px' }}>
        {this.props.currentFilter}
        <ul>
          <li value="0">All</li>
          <li value="1">Reviews</li>
          <li value="2">Runs Small</li>
          <li value="3">True to Size</li>
          <li value="4">Runs Large</li>
          <li value="5">All Fit Reviews</li>
        </ul>
      </div>
    );
  }
}

export default AltFilter;