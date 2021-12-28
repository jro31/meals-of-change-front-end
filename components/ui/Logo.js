import Image from 'next/image';
import logo from '../../public/logos/meals-of-change-logo-small.png';

const Logo = props => {
  return (
    <span
      className={`relative ${props.className || ''}`}
      onClick={props.onClick || null}
      style={{ height: `${props.size}px`, width: `${props.size}px` }}
    >
      <Image src={logo} alt='Meals of Change' layout='fill' />
    </span>
  );
};

export default Logo;
