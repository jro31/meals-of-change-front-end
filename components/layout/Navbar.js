import Flexbox from '../styles/Flexbox';
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <Flexbox justifyBetween alignCenter className={classes.navbar}>
      <Flexbox>
        <div>Meals of Change</div>
        <Flexbox>
          <div>Browse</div>
          <div>Favourites</div>
          <div>Add recipe</div>
        </Flexbox>
      </Flexbox>
      <Flexbox>
        <div>Search bar</div>
        <div>Sign out</div>
      </Flexbox>
    </Flexbox>
  );
};

export default Navbar;
