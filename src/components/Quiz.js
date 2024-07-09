import React, { useState, useEffect } from 'react';
import Quizdata from './Quizdata';
import Question from './Question';
import Timer from './Timer';
import Result from './Result';

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [secondsLeft, setSecondsLeft] = useState(60); // Timer set to 60 seconds
  
    useEffect(() => {
      if (secondsLeft === 0) {
        endQuiz();
      }
  
      const Timer = setInterval(() => {
        setSecondsLeft(prev => prev - 1);
      }, 1000);
  
      return () => clearInterval(Timer);
    }, [secondsLeft]);
  
    const handleAnswerClick = (answer) => {
      const isCorrect = Quizdata[currentQuestion].correctAnswer === answer;
      if (isCorrect) {
        setScore(prev => prev + 1);
      }
  
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < Quizdata.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        endQuiz();
      }
    };
  
    const endQuiz = () => {
      setShowResult(true);
    };
  
    return (
      <div>
        {!showResult ? (
          <>
            <p>Time left: {secondsLeft} seconds</p>
            <Question
              question={Quizdata[currentQuestion].question}
              options={Quizdata[currentQuestion].options}
              handleAnswerClick={handleAnswerClick}
            />
          </>
        ) : (
          <Result score={score} />
        )}
      </div>
    );
  };
  
  export default Quiz;