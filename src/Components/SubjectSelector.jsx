import React, { useState } from 'react'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'
function SubjectSelector() {
    const [selectedSubject, setSelectedSubject] = useState('')
    const [userName ,setUserName] = useState('')
    const handleSubjectChange = ((e) => {
        setSelectedSubject(e.target.value)
       
    })
    console.log(selectedSubject)
  return (
    <div>
      <NavBar />
          <div>
              
      </div>
      <div>
        <h1>Pick a subject</h1>
      </div>
      <button onClick={handleSubjectChange} value="Math">
        Math
      </button>
      <button onClick={handleSubjectChange} value="Physics">
        Physics
      </button>
      <button onClick={handleSubjectChange} value="Chemistry">
        Chemistry
      </button>
      <button onClick={handleSubjectChange} value="Biology">
        Biology
      </button>
      <button onClick={handleSubjectChange} value="Geography">
        Geography
      </button>
      <br />
          <Link to={"/quizpage"} state={{ selectedSubject }}>
        <button>Take Quiz</button>
      </Link>
    </div>
  );
}

export default SubjectSelector
