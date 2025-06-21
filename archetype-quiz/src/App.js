import logo from './logo.svg';
import './App.css';
import React from 'react';
import './index.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold text-blue-600">Testing Tailwind</h1>
    </div>
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


