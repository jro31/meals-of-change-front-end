import { useSelector } from 'react-redux';
import Flexbox from '../../styles/Flexbox';

import MenuContainer from './menu/MenuContainer';
import classes from './ProfileMenu.module.css';

const ProfileMenu = props => {
  const profileMenuIsOpen = useSelector(state => state.profileMenu.profileMenuIsOpen);

  const transitionClassNames = {
    enter: '',
    enterActive: classes['menu-open'],
    exit: '',
    exitActive: classes['menu-close'],
  };

  return (
    <MenuContainer
      in={profileMenuIsOpen}
      showHandler={props.showHandler}
      transitionClassNames={transitionClassNames}
    >
      <Flexbox className={classes['profile-menu']}>
        <div>Favourites</div>
      </Flexbox>
    </MenuContainer>
  );
};

export default ProfileMenu;
