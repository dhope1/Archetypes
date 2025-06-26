import React from 'react';

function Results({ scores, onRetake }) {
  const totalPoints = Object.values(scores).reduce((sum, val) => sum + val, 0);
  const percentages = Object.entries(scores)
    .map(([archetype, points]) => ({
      archetype,
      percentage: totalPoints ? ((points / totalPoints) * 100).toFixed(1) : 0,
    }))
    .sort((a, b) => b.percentage - a.percentage)
    .slice(0, 3); // Top 3 only

  const handleShare = () => {
    const topArchetype = percentages[0].archetype;
    const topPercentage = percentages[0].percentage;
    const shareText = `I'm ${topPercentage}% ${topArchetype}! Take the Male Personality Archetype Quiz to find yours: https://decoding-male-personalit-2i0ewnn.gamma.site/ `;
    navigator.clipboard.writeText(shareText).then(() => {
      alert('Results copied to clipboard! Paste it on X or share with friends.');
    });
  };

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
        <a href="https://decoding-male-personalit-2i0ewnn.gamma.site/" className="text-blue-400 hover:underline">
          Learn more about archetypes
        </a>
      </p>
      <div className="button-container mt-6">
        <button onClick={handleShare} className="button share-button">
          Share Results
        </button>
        <button onClick={onRetake} className="button retake-button">
          Retake Quiz
        </button>
      </div>
    </div>
  );
}

export default Results;