import { useSelector } from 'react-redux';
import Flexbox from '../../styles/Flexbox';

import MenuContainer from './menu/MenuContainer';

const ProfileMenu = props => {
  const profileMenuIsOpen = useSelector(state => state.profileMenu.profileMenuIsOpen);

  const transitionClassNames = {
    enter: '',
    enterActive: 'animate-slide-in-left',
    exit: '',
    exitActive: 'animate-slide-out-right',
  };

  return (
    <MenuContainer
      in={profileMenuIsOpen}
      showHandler={props.showHandler}
      transitionClassNames={transitionClassNames}
    >
      <Flexbox className='fixed top-14 right-0 bg-white z-30 p-10 h-screen-minus-nav min-w-33'>
        <div>Favourites</div>
      </Flexbox>
    </MenuContainer>
  );
};

export default ProfileMenu;
