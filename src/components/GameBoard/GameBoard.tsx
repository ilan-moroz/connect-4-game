import { useState } from 'react';
import classes from './GameBoard.module.css';

const GameBoard = () => {
  const [board, setBoard] = useState(createEmptyBoard());

  function createEmptyBoard() {
    return Array.from({ length: 6 }, () => Array(7).fill(null));
  }

  return (
    <div className={classes.board}>
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className={classes.row}>
          {row.map((cell, colIndex) => (
            <div key={colIndex} className={classes.cell}></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default GameBoard;
