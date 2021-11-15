import Flexbox from '../../styles/Flexbox';
import Logo from '../../ui/Logo';
import NavbarMenu from './NavbarMenu';
import Hamburger from '../../ui/Hamburger';
import classes from './Navbar.module.css';

const Navbar = props => {
  return (
    <Flexbox justifyBetween alignCenter className={classes.navbar}>
      <Flexbox alignCenter>
        <Hamburger clickHandler={props.hamburgerIsClicked} className={classes.hamburger} />
        <Logo fontSize={'25px'} />
        <NavbarMenu />
      </Flexbox>
      <Flexbox>
        <div>Search bar</div>
        <div>Sign out</div>
      </Flexbox>
    </Flexbox>
  );
};

export default Navbar;
