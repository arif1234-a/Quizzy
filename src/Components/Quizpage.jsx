import React, { useState, useEffect } from "react";
import ResultComponent from "./ResultComponent";
import { useLocation } from 'react-router-dom';
import NavBar from "./NavBar";

function Quizpage() {
  const [questions, setquestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [results, setResults] = useState(false);
  const location = useLocation()
  const {selectedSubject , userName} = location.state
const handleSubmit = () => {
  console.log(userAnswers);
  setResults(true);
  console.log("Results state:", results); 
};

  const handleAnswerChange = (index, answer) => {
      const updatedAnswers = [...userAnswers];
      console.log(updatedAnswers)
    updatedAnswers[index] = answer;
      setUserAnswers(updatedAnswers);
        console.log(userAnswers);
  };
useEffect(() => {
  fetch(`http://localhost:3000/questions`) // Fetch all questions
    .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setquestions(data[selectedSubject]); // Set only the selected subject's questions
    });
}, [selectedSubject]);

  return (
    <div>
      <NavBar />
      <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-indigo-600">
          Quiz: {selectedSubject}
        </h1>
        {/* {questions.map((question, index) => (
          <div key={question.id}>
            <p>
              {index + 1}.{question.text}
            </p>
            {question.options.map((option) => (
              <div key={option}>
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={option}
                  onChange={() => handleAnswerChange(index, option)}
                />
                <label>{option}</label>
              </div>
            ))}
          </div>
        ))} */}
        <div className="space-y-6">
          {questions.map((question, index) => (
            <div
              key={question.id}
              className="p-4 bg-white rounded-lg shadow-md border border-gray-200"
            >
              <p className="text-lg font-semibold text-gray-800 mb-4">
                {index + 1}. {question.text}
              </p>
              <div className="space-y-2">
                {question.options.map((option) => (
                  <label
                    key={option}
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={option}
                      onChange={() => handleAnswerChange(index, option)}
                      className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                    />
                    <span className="text-gray-700">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={handleSubmit}
          className=" bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition duration-300"
        >
          Submit Quiz
        </button>{" "}
        {results && (
          <ResultComponent
            userAnswers={userAnswers}
            subject={selectedSubject}
            userName={userName}
          />
        )}
      </div>
    </div>
  );
}

export default Quizpage;

