export default function Score({ score, bestScore }) {
    return (
      <div className="score-container grid grid-cols-2 gap-4" >
        <p>Current Score: {score}</p>
        <p>Best Score: {bestScore}</p>
      </div>
    );
  }
  