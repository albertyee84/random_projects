import React, { useState} from 'react'
import Square from './Square'

export default function Board() {
    const [turn, setTurn] = useState('X')

    return (
        <div className="board">
            {renderSquares()}
        </div>
    )

    function renderSquares() {
        const grid = [];
        for(let i = 0; i < 9; i++) {
            grid.push(<Square key={i} number={i} switchPlayers={switchPlayers} turn={turn} didWin={didWin} fullBoard={fullBoard}/>)
        }
        return grid;
    }

    function switchPlayers() {
        if(turn === 'X') {
            setTurn("O")
        } else {
            setTurn("X")
        }
    }

    function didWin() {
        const squares = document.querySelectorAll('.square')
        const winning = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        for (let i  = 0; i < winning.length; i++) {
            if (squares[winning[i][0]].innerText === squares[winning[i][1]].innerText && 
                squares[winning[i][0]].innerText === squares[winning[i][2]].innerText &&
                squares[winning[i][0]].innerText !== ''
                ) return true;
        }
        return false;
    }

    function fullBoard() {
        const squares = document.querySelectorAll('.square')
        return [...squares].every(square => square.innerText !== "")
    }
    
}
