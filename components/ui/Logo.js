import classes from './Logo.module.css';

const Logo = props => {
  return (
    <span className={classes.logo} style={{ fontSize: props.fontSize }}>
      Meals of Change
    </span>
  );
};

export default Logo;
