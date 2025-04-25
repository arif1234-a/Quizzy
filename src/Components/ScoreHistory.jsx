import React, { useEffect, useState } from 'react'
import NavBar from './NavBar';

function ScoreHistory() {
    <NavBar />
    const[scores , setScores] = useState([])
    useEffect(() => {
        fetch("http://localhost:4000/scores")
            .then((res) => res.json())
            .then((data) => setScores(data))
        console.log(scores)
    },[])
  return (
    <div>
      <h1>Your Scores</h1>
      {scores.map((score, index) => (
        <div key={index}>
          <div>{score.subject}</div>
              <div>{score.score}/{score.totalQuestions }</div>
          <div>{score.percentage}%</div>
        </div>
      ))}
    </div>
  );
}

export default ScoreHistory
