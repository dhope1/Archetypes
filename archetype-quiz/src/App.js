
import React, { useState } from 'react';
import Quiz from './components/Quiz';
import './index.css';

function App() {
  const [isQuizStarted, setIsQuizStarted] = useState(false);

  const startQuiz = () => {
    setIsQuizStarted(true);
  };

  return (
    <div className="container">
      {!isQuizStarted ? (
        <div className="card landing-page">
          <h1 className="text-4xl font-bold mb-4">Discover Your Archetype</h1>
          <p className="text-lg mb-6">
            Take the Male Personality Archetype Quiz to uncover your unique personality traits! Answer a series of questions to find out which archetype—Alpha, Sigma, Beta, or others—best defines you.
          </p>
          <button onClick={startQuiz} className="button start-button">
            Start Quiz
          </button>
        </div>
      ) : (
        <Quiz />
      )}
    </div>
  );
}

export default App;
