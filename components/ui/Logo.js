import classes from './Logo.module.css';

const Logo = props => {
  return (
    <span
      className={`${classes.logo} ${props.className || ''}`}
      style={{ fontSize: props.fontSize }}
      onClick={props.onClick || null}
    >
      Meals of Change
    </span>
  );
};

export default Logo;
