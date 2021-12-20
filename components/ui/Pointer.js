import Image from 'next/image';

import leftPointer from '../../public/icons/left-pointer.svg';
import rightPointer from '../../public/icons/right-pointer.svg';

const Pointer = props => {
  const source = () => {
    switch (props.direction) {
      case 'left':
        return leftPointer;
      case 'right':
        return rightPointer;
      default:
        return leftPointer;
    }
  };

  return (
    <div className={`w-10 h-full absolute pt-4 pb-8 ${props.className || ''}`}>
      <div onClick={props.onClick} className='h-full w-full bg-black opacity-40 relative z-10'>
        <Image
          src={source()}
          alt={
            props.direction
              ? `${props.direction[0].toUpperCase()}${props.direction.substring(1)} pointer`
              : 'Pointer'
          }
          layout='fill'
        />
      </div>
    </div>
  );
};

export default Pointer;
