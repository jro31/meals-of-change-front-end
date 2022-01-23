import Image from 'next/image';

import TwitterLogo from '../../../public/icons/twitter.svg';

const TwitterIcon = props => {
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
      <div className='relative w-full h-11/12'>
        <Image src={TwitterLogo} alt='Twitter' layout='fill' />
      </div>
    </div>
  );
};

export default TwitterIcon;
