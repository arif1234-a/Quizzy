import React, { useState } from 'react'

function SubjectSelector() {
    const [selectedSubject, setSelectedSubject] = useState('')
    
    const handleSubjectChange = ((e) => {
        setSelectedSubject(e.target.value)
       
    })
    console.log(selectedSubject)
  return (
      <div>
          <div>
              <h1>Pick a subject</h1>
          </div>
      <button onClick={handleSubjectChange} value="Math">
        Math
      </button>
      <button onClick={handleSubjectChange} value="Physics">
        Physics
      </button>
      <button onClick={handleSubjectChange} value="Chemisty">
        Chemistry
      </button>
      <button onClick={handleSubjectChange} value="Biology">
        Biology
      </button>
      <button onClick={handleSubjectChange} value="Geography">
        Geography
          </button>
          <button>Take Quiz</button>
    </div>
  );
}

export default SubjectSelector
