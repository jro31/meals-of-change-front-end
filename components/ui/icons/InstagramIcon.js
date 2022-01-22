import Image from 'next/image';

import InstagramLogo from '../../../public/icons/instagram.svg';

const InstagramIcon = props => {
  return (
    <div className={`flex justify-center items-center w-${props.size} h-${props.size}`}>
      <div className='relative w-full h-full'>
        <Image src={InstagramLogo} alt='IG' layout='fill' />
      </div>
    </div>
  );
};

export default InstagramIcon;
