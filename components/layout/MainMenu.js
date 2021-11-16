import Flexbox from '../styles/Flexbox';
import classes from './MainMenu.module.css';

const MainMenu = props => {
  return (
    <Flexbox className={`${classes['main-menu']} ${props.isOpen ? classes.open : classes.closed}`}>
      <div className={classes['main-menu-item']}>Recipes</div>
    </Flexbox>
  );
};

export default MainMenu;
