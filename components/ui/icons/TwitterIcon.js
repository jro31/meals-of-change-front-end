import Image from 'next/image';

import TwitterLogo from '../../../public/icons/twitter.svg';

const TwitterIcon = props => {
  return (
    <div className={`flex justify-center items-center w-${props.size} h-${props.size}`}>
      <div className='relative w-full h-11/12'>
        <Image src={TwitterLogo} alt='Twitter' layout='fill' />
      </div>
    </div>
  );
};

export default TwitterIcon;
