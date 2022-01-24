import Image from 'next/image';
import logo from '../../public/logos/text-free-logo.svg';

const TextFreeLogo = props => {
  return (
    <div
      className={`relative ${props.className || ''}`}
      onClick={props.onClick || null}
      style={{ height: `${props.size}px`, width: `${props.size}px` }}
    >
      {/* <Image src={logo} alt='Meals of Change' layout='fill' /> */}
      <img src='/logos/text-free-logo.svg' alt='Meals of Change' className='w-full h-full' />
    </div>
  );
};

export default TextFreeLogo;
