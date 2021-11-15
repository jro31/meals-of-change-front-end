import Flexbox from '../styles/Flexbox';
import classes from './Hamburger.module.css';

const Hamburger = props => {
  return (
    <Flexbox
      column
      onClick={props.clickHandler}
      className={`${classes.hamburger} ${props.className || ''}`}
    >
      <span></span>
      <span></span>
      <span></span>
    </Flexbox>
  );
};

export default Hamburger;