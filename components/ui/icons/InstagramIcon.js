import Image from 'next/image';

import InstagramLogo from '../../../public/icons/instagram.svg';

const InstagramIcon = props => {
  const sizeClassNames = () => {
    switch (props.size) {
      case '6':
        return 'w-6 h-6';
      case '10':
        return 'w-10 h-10';
      default:
        return 'w-10 h-10';
    }
  };

  return (
    <div className={`flex justify-center items-center ${sizeClassNames()}`}>
      <div className='relative w-full h-full'>
        <Image src={InstagramLogo} alt='IG' layout='fill' />
      </div>
    </div>
  );
};

export default InstagramIcon;
