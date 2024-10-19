import React, { useState } from 'react';
import { questions } from './QuestionsData';
import QuestionCard from './QuestionCard';
import Score from './Score';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswer = (selectedOption) => {
    const correctAnswer = questions[currentQuestion].answer;
    
    if (selectedOption === correctAnswer) {
      setScore(score + 1);
    }
    
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setIsFinished(true);
    }
  };

  if (isFinished) {
    return <Score score={score} totalQuestions={questions.length} />;
  }

  return (
    <div className="quiz">
      <QuestionCard 
        question={questions[currentQuestion].question} 
        options={questions[currentQuestion].options}
        handleAnswer={handleAnswer}
      />
    </div>
  );
};

export default Quiz;
