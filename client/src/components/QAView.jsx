import React from 'react';

const QAView = (props) =>
  <div className="qa-container">
    <div className="write-review-title" >Have questions about this product?</div>
    <a className="write-review-btn" onClick={props.showModal} >Ask a Question</a>
  </div>;

export default QAView;