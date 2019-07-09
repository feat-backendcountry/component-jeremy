import React from 'react';

const QAView = (props) =>
  <div>
    <h3>Have questions about this product?</h3>
    <button>Ask a Question</button>
    <br></br>
    <select>
      <option>Questions</option>
      <option>Unanswered Questions</option>
    </select>
    <ul>
      <li>Question 1</li>
      <li>Question 2</li>
      <li>Question 3</li>
      <li>Question 4</li>
    </ul>
  </div>;

export default QAView;