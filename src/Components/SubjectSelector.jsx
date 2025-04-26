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

    const handleUserName = ((e) => {
        setUserName(e.target.textContent)
    })
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <NavBar />
      <div>
        <input type="text" onChange={handleUserName} />
      </div>
      <div>
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Pick a subject
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button
          onClick={handleSubjectChange}
          value="Math"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Math
        </button>
        <button
          onClick={handleSubjectChange}
          value="Physics"
          className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
        >
          Physics
        </button>
        <button
          onClick={handleSubjectChange}
          value="Chemistry"
          className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600"
        >
          Chemistry
        </button>
        <button
          onClick={handleSubjectChange}
          value="Biology"
          className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600"
        >
          Biology
        </button>
        <button
          onClick={handleSubjectChange}
          value="Geography"
          className="bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
        >
          Geography
        </button>
      </div>
      <br />
      <Link to={"/quizpage"} state={{ selectedSubject, userName }}>
        <button className="border border-blue-500 text-blue-500 font-medium py-2 px-6 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300">
          Take Quiz
        </button>
      </Link>
    </div>
  );
}

export default SubjectSelector

