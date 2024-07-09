import React from 'react';

const Result = ({ score }) => {
  return (
    <div>
      <h2>Quiz Finished!</h2>
      <p>Your score is: {score}</p>
      <button onClick={() => window.location.reload()}>Restart Quiz</button>
    </div>
  );
};
export default Result;