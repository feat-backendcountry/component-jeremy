import React from 'react';

const Filter = function(props) {
  return (
    <div className="filter-container">
      <div className="filter-title">View</div>
      <select className="filter-select" onChange={props.changeFilter}>
        <option defaultValue>All</option>
        <option>Reviews</option>
        {/* <option>Photos</option> */}
        <option>Runs Small</option>
        <option>True to Size</option>
        <option>Runs Large</option>
        <option>All Fit Reviews</option>
      </select>
    </div>
  );
};

export default Filter;