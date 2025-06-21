```js
import React from 'react';

function Question({ question, onAnswer, selectedOptions }) {
  return (
    <div className="card">
      <h2 className="text-xl font-bold mb-4">{question.question}</h2>
      {question.options.map((option, index) => (
        <label key={index} className="block mb-2">
          <input
            type="checkbox"
            className="mr-2"
            checked={selectedOptions.includes(index)}
            onChange={() => onAnswer(index)}
          />
          {option.text}
        </label>
      ))}
    </div>
  );
}

export default Question;
```