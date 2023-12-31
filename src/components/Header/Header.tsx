import Button from '../UI/Button/Button';
import Player from '../UI/Player/Player';
import classes from './Header.module.css';

const Header = () => {
  const handleReset = () => {};

  return (
    <>
      <h1 className={classes.header}>Connect 4</h1>
      <div className={classes.btnBox}>
        <Button onClick={handleReset}>Menu</Button>
        <Player />
        <Button onClick={handleReset}>restart</Button>
      </div>
    </>
  );
};

export default Header;
