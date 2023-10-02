import { useState } from 'react';
import classes from './GameBoard.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { playerActions } from '../../store/playerSlice';

const GameBoard = () => {
  const [board, setBoard] = useState(createEmptyBoard());
  const dispatch = useDispatch();
  const currentPlayer = useSelector(
    (state: RootState) => state.player.currentPlayer
  );

  function createEmptyBoard() {
    return Array.from({ length: 6 }, () => Array(7).fill(null));
  }

  const handleClick = (colIndex: number) => {
    // Copy the current board state
    const newBoard = [...board];

    // Find the lowest empty cell in the clicked column
    for (let i = newBoard.length - 1; i >= 0; i--) {
      if (!newBoard[i][colIndex]) {
        newBoard[i][colIndex] = currentPlayer;
        break;
      }
    }
    // Update the board state
    setBoard(newBoard);
    // Switch to the other player
    dispatch(playerActions.setCurrentPlayer());
  };

  return (
    <div className={classes.board}>
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className={classes.row}>
          {row.map((cell, colIndex) => (
            <div
              key={colIndex}
              className={classes.cell}
              onClick={() => handleClick(colIndex)}
            >
              {cell && (
                <div className={`${classes.disc} ${classes[cell]}`}></div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default GameBoard;
