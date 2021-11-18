import Image from 'next/image';

import classes from './Pointer.module.css';
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
      style={{ ...props.style, width: props.size, height: props.size }}
      className={`${classes.pointer} ${props.className || ''}`}
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
