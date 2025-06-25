
import React, { useState } from 'react';
import Question from './Question';
import Results from './Results';
import questions from '../data/questions.json';

function Quiz({ username }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [scores, setScores] = useState({
    Alpha: 0,
    Beta: 0,
    Sigma: 0,
    Delta: 0,
    Gamma: 0,
    Omega: 0,
    Zeta: 0,
  });
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (questionId, optionIndex) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: prev[questionId]
        ? prev[questionId].includes(optionIndex)
          ? prev[questionId].filter((i) => i !== optionIndex)
          : [...prev[questionId], optionIndex]
        : [optionIndex],
    }));
  };

  const handleNext = () => {
    const currentAnswers = answers[currentQuestion + 1] || [];
    const currentQ = questions[currentQuestion];
    const newScores = { ...scores };

    currentAnswers.forEach((index) => {
      const points = currentQ.options[index].points;
      Object.entries(points).forEach(([archetype, value]) => {
        newScores[archetype] = (newScores[archetype] || 0) + value;
      });
    });

    setScores(newScores);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Save to local storage
      const quizData = {
        username,
        answers,
        scores: newScores,
        timestamp: new Date().toISOString(),
      };
      localStorage.setItem('quizData', JSON.stringify(quizData));
      setShowResults(true);
    }
  };

  const handleSkip = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Save to local storage
      const quizData = {
        username,
        answers,
        scores,
        timestamp: new Date().toISOString(),
      };
      localStorage.setItem('quizData', JSON.stringify(quizData));
      setShowResults(true);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="container">
      {showResults ? (
        <Results scores={scores} />
      ) : (
        <div className="question-transition" key={currentQuestion}>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${progress}%` }}></div>
          </div>
          <Question
            question={questions[currentQuestion]}
            onAnswer={(index) => handleAnswer(currentQuestion + 1, index)}
            selectedOptions={answers[currentQuestion + 1] || []}
          />
          <div className="button-container">
            <button
              onClick={handleNext}
              className="button"
              disabled={questions[currentQuestion].id !== 13 && !(answers[currentQuestion + 1] && answers[currentQuestion + 1].length)}
            >
              {currentQuestion < questions.length - 1 ? 'Next' : 'Finish'}
            </button>
            {questions[currentQuestion].id === 13 && (
              <button onClick={handleSkip} className="button">
                Skip
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;
