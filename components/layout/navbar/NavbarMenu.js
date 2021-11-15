import Flexbox from '../../styles/Flexbox';

import classes from './NavbarMenu.module.css';

const NavbarMenu = props => {
  return (
    <Flexbox alignCenter className={classes['navbar-menu']}>
      <div>Browse</div>
      <div>Favourites</div>
      <div>Add recipe</div>
    </Flexbox>
  );
};

export default NavbarMenu;
