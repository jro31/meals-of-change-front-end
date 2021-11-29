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
    <div
      style={{ ...props.style }}
      className={`bg-white bg-opacity-50 flex items-center rounded-full p-2 ${
        props.className || ''
      }`}
    >
      <Image
        onClick={props.onClick}
        src={source()}
        alt={
          props.direction
            ? `${props.direction[0].toUpperCase()}${props.direction.substring(1)} pointer`
            : 'Pointer'
        }
        width={props.size}
        height={props.size}
      />
    </div>
  );
};

export default Pointer;
