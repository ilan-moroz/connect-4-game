import classes from './Player.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const Player = () => {
  const currentPlayer = useSelector(
    (state: RootState) => state.player.currentPlayer
  );

  return <div className={classes.playerBox}>Player 1</div>;
};

export default Player;
