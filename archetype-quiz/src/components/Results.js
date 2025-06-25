
import React from 'react';

function Results({ scores }) {
  const totalPoints = Object.values(scores).reduce((sum, val) => sum + val, 0);
  const percentages = Object.entries(scores)
    .map(([archetype, points]) => ({
      archetype,
      percentage: totalPoints ? ((points / totalPoints) * 100).toFixed(1) : 0,
    }))
    .sort((a, b) => b.percentage - a.percentage)
    .slice(0, 3); // Top 3 only

  return (
    <div className="card question-card">
      <h2 className="text-2xl font-bold mb-4">Your Top Archetypes</h2>
      {percentages.map(({ archetype, percentage }) => (
        <div key={archetype} className="mb-2">
          <span className="font-semibold">{archetype}:</span> {percentage}%
        </div>
      ))}
      <p className="mt-6">
        Want to dive deeper?{' '}
        <a href="[YOUR_ARTICLE_LINK_HERE]" className="text-blue-400 hover:underline">
          Learn more about archetypes
        </a>
      </p>
    </div>
  );
}

export default Results;
