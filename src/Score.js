import React from 'react';

const Score = ({ score, totalQuestions }) => {
  return (
    <div className="score">
      <h1>Quiz Finished!</h1>
      <p>Your Score: {score} / {totalQuestions}</p>
    </div>
  );
};

export default Score;
