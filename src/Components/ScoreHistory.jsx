import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";

function ScoreHistory() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/scores")
      .then((res) => res.json())
      .then((data) => setScores(data))
      .catch((err) => console.error(err)); // Handle errors gracefully
  }, []);
  const deleteScore=((e)=>{
    fetch(("http://localhost:4000/scores"), {
  method: 'DELETE', // Specify the request method as DELETE
  headers: {
    'Content-Type': 'application/json', // Optional: Specify the content type
  }
})
  .then(response => {
    if (response.ok) {
      console.log('Resource deleted successfully!');
    } else {
      console.error('Failed to delete the resource:', response.status, response.statusText);
    }
  })
  .catch(error => {
    console.error('Error during DELETE request:', error);
  });

  })
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
      <NavBar />
      <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">
        Your Scores
      </h1>
      <div className="space-y-4">
        {scores.map((score, index) => (
          <div
            key={index}
            className="p-4 bg-white rounded-lg shadow-md flex items-center justify-between"
          >
            <div>
              <p className="text-lg font-semibold text-gray-800">
                Name: {score.user}
              </p>
              <p className="text-sm text-gray-600">Subject: {score.subject}</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold text-green-500">
                Score: {score.score}/{score.totalQuestions}
              </p>
              <p className="text-sm text-gray-600">
                Percentage: {score.percentage}%
              </p>
            </div>
            <button onClick={deleteScore} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ScoreHistory;