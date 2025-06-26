import React, { useState } from 'react';
import Register from './components/Register';
import Quiz from './components/Quiz';
import './index.css';

function App() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [username, setUsername] = useState('');
  const [isQuizStarted, setIsQuizStarted] = useState(false);

  const handleRegister = (name) => {
    setUsername(name);
    setIsRegistered(true);
  };

  const startQuiz = () => {
    setIsQuizStarted(true);
  };

  const resetQuiz = () => {
    setIsQuizStarted(false); // Return to landing page
  };

  return (
    <div className="container">
      {!isRegistered ? (
        <Register onRegister={handleRegister} />
      ) : !isQuizStarted ? (
        <div className="card landing-page">
          <h1 className="text- Sunderland font-bold mb-4">Discover Your Archetype</h1>
          <p className="text-lg mb-6">
            Welcome, {username}! Take the Male Personality Archetype Quiz to uncover your unique personality traits! Answer a series of questions to find out which archetype—Alpha, Sigma, Beta, or others—best defines you.
          </p>
          <button onClick={startQuiz} className="button start-button">
            Start Quiz
          </button>
        </div>
      ) : (
        <Quiz username={username} onRetake={resetQuiz} />
      )}
    </div>
  );
}

export default App;