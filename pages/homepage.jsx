import React from 'react'
import NavBar from '../src/Components/NavBar'
import SubjectSelector from '../src/Components/SubjectSelector'
import { Link } from 'react-router-dom'

function Homepage() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
      <NavBar />
      <h1 className="text-4xl font-bold text-center text-indigo-600 mb-4">
        Hello, Welcome to Quizzy
      </h1>
      <p className="text-lg text-gray-700 text-center mb-6">
        Take quizzes, test your knowledge, and improve your skills in various
        subjects!
      </p>

      <Link rel="stylesheet" href="" to={"/selectionpage"}>
        <div className="flex flex-wrap justify-center gap-4">
  <button class="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300">
    Start Quiz
          </button>
          </div>

      </Link>
    </div>
  );
}

export default Homepage
