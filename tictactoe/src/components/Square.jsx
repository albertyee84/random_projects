import React from "react";

export default function Square({ switchPlayers, turn, didWin, fullBoard }) {
return <div className="square" onClick={handleClick}></div>;

  function handleClick(e) {
    if(e.target.innerText === "") {
      e.target.innerText = turn
      if(didWin()) {
        alert(`${turn} Wins!`)
      } else if (fullBoard()) {
        alert(`It's a draw!`)
      } else {
        switchPlayers()
      }
    }
  }
}
