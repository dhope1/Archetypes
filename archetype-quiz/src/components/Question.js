
import React from 'react';

function Question({ question, onAnswer, selectedOptions }) {
  return (
    <div className="card question-card">
      <h2 className="text-xl font-bold mb-4">{question.question}</h2>
      {question.options.map((option, index) => (
        <label key={index} className="block mb-3 option-label">
          <input
            type="checkbox"
            className="custom-checkbox"
            checked={selectedOptions.includes(index)}
            onChange={() => onAnswer(index)}
          />
          <span className="option-text">{option.text}</span>
        </label>
      ))}
    </div>
  );
}

export default Question;
