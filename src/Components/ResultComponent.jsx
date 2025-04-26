// import React, { useEffect, useState } from 'react'

// function ResultComponent({ userAnswers, subject , userName }) {
//   const [score, setScore] = useState(0); // Number for total score
//   const [correctAnswers, setCorrectAnswers] = useState([]); // Array for correct answers
//   const [totalMark, setTotalMark] = useState(0); // Number for maximum score

//   useEffect(() => {
//     fetch(`http://localhost:3000/questions`) // Fetch all questions
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(correctAnswers);
// setCorrectAnswers(data[subject].map((question) => question.correctAnswer));
//       });
//   }, [subject]);

// useEffect(() => {
//   if (correctAnswers.length > 0 && userAnswers.length > 0) {
//     let calculatedScore = 0;
//     correctAnswers.forEach((correctAnswer, index) => {
//       if (userAnswers[index] === correctAnswer) {
//         calculatedScore++;
//       }
//     });
//     setScore(calculatedScore);
//     setTotalMark(correctAnswers.length); // Total possible marks based on the number of questions
//   }
// }, [correctAnswers, userAnswers]);
  
//   const postScore = () => {
//     const resultData = {
//       user: userName,
//       subject: subject,
//       score: score,
//       percentage: (score / totalMark) * 100, // Score as a percentage
//       totalQuestions: totalMark,
//     };

//     fetch(`http://localhost:4000/scores`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(resultData), // Convert resultData to JSON
//     })
//       .then((res) => {
//         if (res.ok) {
//           console.log("Score posted successfully:", resultData);
//         } else {
//           console.error("Failed to post score");
//         }
//       })
//       .catch((error) => console.error("Error posting score:", error));
//   };
// return (
//   <div>
//     <h1>Results for {subject} Quiz</h1>
//     <p>
//       Your Score: {score} / {totalMark}
//     </p>
//     <p>Percentage: {(score / totalMark) * 100}%</p>
//     <button onClick={postScore}>Save score</button>
//   </div>
// );
// }

// export default ResultComponent

import React, { useEffect, useState } from "react";

function ResultComponent({ userAnswers, subject, userName }) {
  const [score, setScore] = useState(0); // Number for total score
  const [correctAnswers, setCorrectAnswers] = useState([]); // Array for correct answers
  const [totalMark, setTotalMark] = useState(0); // Number for maximum score

  useEffect(() => {
    fetch(`http://localhost:3000/questions`) // Fetch all questions
      .then((res) => res.json())
      .then((data) => {
        setCorrectAnswers(
          data[subject].map((question) => question.correctAnswer)
        );
      });
  }, [subject]);

  useEffect(() => {
    if (correctAnswers.length > 0 && userAnswers.length > 0) {
      let calculatedScore = 0;
      correctAnswers.forEach((correctAnswer, index) => {
        if (userAnswers[index] === correctAnswer) {
          calculatedScore++;
        }
      });
      setScore(calculatedScore);
      setTotalMark(correctAnswers.length); // Total possible marks based on the number of questions
    }
  }, [correctAnswers, userAnswers]);

  const postScore = () => {
    const resultData = {
      user: userName,
      subject: subject,
      score: score,
      percentage: ((score / totalMark) * 100).toFixed(1), // Score as a percentage
      totalQuestions: totalMark,
    };

    fetch(`http://localhost:4000/scores`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(resultData), // Convert resultData to JSON
    })
      .then((res) => {
        if (res.ok) {
          console.log("Score posted successfully:", resultData);
        } else {
          console.error("Failed to post score");
        }
      })
      .catch((error) => console.error("Error posting score:", error));
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center text-indigo-600 mb-4">
        Results for {subject} Quiz
      </h1>
      <div className="bg-white rounded-lg shadow-md p-4">
        <p className="text-lg text-gray-800 mb-2">
          <span className="font-semibold">User:</span> {userName}
        </p>
        <p className="text-lg text-gray-800 mb-2">
          <span className="font-semibold">Your Score:</span> {score} /{" "}
          {totalMark}
        </p>
        <p className="text-lg text-gray-800 mb-4">
          <span className="font-semibold">Percentage:</span>{" "}
          {((score / totalMark) * 100).toFixed(1)}%
        </p>
        <button
          onClick={postScore}
          className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
        >
          Save Score
        </button>
      </div>
    </div>
  );
}

export default ResultComponent;