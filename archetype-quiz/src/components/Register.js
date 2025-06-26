import React, { useState } from 'react';

function Register({ onRegister }) {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onRegister(username.trim());
    }
  };

  return (
    <div className="card landing-page">
      <h1 className="text-4xl font-bold mb-4">Get Started</h1>
      <p className="text-lg mb-6">Enter your username to take the Male Personality Archetype Quiz!</p>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Your username"
          className="input mb-6"
          required
        />
        <button type="submit" className="button register-button">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;