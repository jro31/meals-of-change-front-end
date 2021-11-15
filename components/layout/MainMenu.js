import Flexbox from '../styles/Flexbox';
import classes from './MainMenu.module.css';

const MainMenu = () => {
  return (
    <Flexbox className={classes['main-menu']}>
      <div className={classes['main-menu-item']}>Recipes</div>
    </Flexbox>
  );
};

export default MainMenu;
