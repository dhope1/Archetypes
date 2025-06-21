
import React from 'react';

function Results({ scores }) {
  const totalPoints = Object.values(scores).reduce((sum, val) => sum + val, 0);
  const percentages = Object.entries(scores)
    .map(([archetype, points]) => ({
      archetype,
      percentage: totalPoints ? ((points / totalPoints) * 100).toFixed(1) : 0,
    }))
    .sort((a, b) => b.percentage - a.percentage);

  return (
    <div className="card">
      <h2 className="text-2xl font-bold mb-4">Your Archetype Results</h2>
      {percentages.map(({ archetype, percentage }) => (
        <div key={archetype} className="mb-2">
          <span className="font-semibold">{archetype}:</span> {percentage}%
        </div>
      ))}
    </div>
  );
}

export default Results;
