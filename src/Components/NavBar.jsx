import React from 'react'
import { Link } from 'react-router-dom'
function NavBar() {

  return (
    <div >
      <Link rel="stylesheet" href="" to={"/homepage"}>
        <button>Home</button>
      </Link>
      <Link rel="stylesheet" href="" to={"/scorespage"}>
        <button>Score History</button></Link>
        <Link rel="stylesheet" href="" to={"/selectionpage"}>
          <button>Subjects</button>
        </Link>
    </div>
  );
}

export default NavBar
