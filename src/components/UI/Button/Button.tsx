import classes from './Button.module.css';

type buttonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

const Button = (props: buttonProps) => {
  return (
    <button onClick={props.onClick} className={classes.btn}>
      {props.children}
    </button>
  );
};

export default Button;
