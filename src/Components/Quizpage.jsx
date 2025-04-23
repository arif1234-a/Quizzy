import React, { useState, useEffect } from "react";
function Quizpage({ selectedSubject }) {
  const [questions, setquestions] = useState([]);
    const [userAnswers, setUserAnswers] = useState([]);
    
     const handleAnswerChange = (index, answer) => {
       const updatedAnswers = [...userAnswers];
       updatedAnswers[index] = answer;
       setUserAnswers(updatedAnswers);
     };
  useEffect(() => {
    fetch(`http://localhost:3000/questions/${selectedSubject}`)
      .then((res) => res.json())
      .then((data) => setquestions(data));
  }, []);

 return (
    <div>
      <h1>Quiz: {selectedSubject}</h1>
      {questions.map((question, index) => (
          <div key={question.id}>
            <p>{index}.{question.text}</p>
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
        ))
      }
      <button onClick={() => console.log(userAnswers)}>Submit Quiz</button>
    </div>
  );
}

export default Quizpage;


