import React from 'react'
import { Link } from 'react-router-dom'
function NavBar() {

  return (
    <div className="bg-indigo-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-6 text-white text-2xl font-bold">
          <Link rel="stylesheet" href="" to={"/homepage"}>
            <button>Home</button>
          </Link>
          <Link rel="stylesheet" href="" to={"/scorespage"}>
            <button>Score History</button>
          </Link>
          <Link rel="stylesheet" href="" to={"/selectionpage"}>
            <button>Subjects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar
