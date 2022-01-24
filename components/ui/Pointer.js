import Image from 'next/image';

import LeftPointer from '../../public/icons/left-pointer.svg';
import RightPointer from '../../public/icons/right-pointer.svg';

const Pointer = props => {
  const source = () => {
    switch (props.direction) {
      case 'left':
        return LeftPointer;
      case 'right':
        return RightPointer;
      default:
        return LeftPointer;
    }
  };

  return (
    <div className={`w-10 h-full absolute pt-4 pb-8 ${props.className || ''}`}>
      <div onClick={props.onClick} className='h-full w-full bg-black opacity-40 relative z-10'>
        {/* <Image
          src={source()}
          alt={
            props.direction
              ? `${props.direction[0].toUpperCase()}${props.direction.substring(1)} pointer`
              : 'Pointer'
          }
          layout='fill'
        /> */}
        <img
          src={props.direction === 'right' ? '/icons/right-pointer.svg' : '/icons/left-pointer.svg'}
          alt='Pointer'
          className='w-full h-full'
        />
      </div>
    </div>
  );
};

export default Pointer;
