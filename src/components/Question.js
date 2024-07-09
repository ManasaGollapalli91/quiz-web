
import React from 'react';

const Question = ({ question, options, handleAnswerClick }) => {
  return (
    <div>
      <h2>{question}</h2>
      {options.map(option => (
        <button key={option} onClick={() => handleAnswerClick(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default Question;
