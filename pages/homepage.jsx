import React from 'react'
import NavBar from '../src/Components/NavBar'
import SubjectSelector from '../src/Components/SubjectSelector'
import { Link } from 'react-router-dom'

function Homepage() {
  return (
    <div>
          <NavBar />
          <h1>Hello, Welcome to Quizzy</h1>
          <p>Click below to take a quiz</p>
          <Link rel="stylesheet" href="" to={'/selectionpage'}>
              <button>Choose a subject</button>
          </Link>
    </div>
  )
}

export default Homepage
