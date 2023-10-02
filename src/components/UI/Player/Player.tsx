import classes from './Player.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

const Player = () => {
  const currentPlayer = useSelector(
    (state: RootState) => state.player.currentPlayer
  );

  const playerColor = currentPlayer === 'red';

  return (
    <div
      className={`${classes.playerBox} ${
        playerColor ? classes.playerRed : classes.playerYellow
      }`}
    >
      {playerColor ? 'Player 1' : 'Player 2'}
    </div>
  );
};

export default Player;
