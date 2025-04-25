import React from 'react'
import { Link } from 'react-router-dom'
function NavBar() {

  return (
    <div>
      <link rel="stylesheet" href="" to={"/homepage"}>
        <button>Home</button>
      </link>
      <link rel="stylesheet" href="" to={"/scorepage"}>
        <button>Score History</button>
        <link rel="stylesheet" href="" to={"/selectionpage"}>
          <button>Subjects</button>
        </link>
      </link>
    </div>
  );
}

export default NavBar
