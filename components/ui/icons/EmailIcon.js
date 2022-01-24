import Image from 'next/image';

import EmailLogo from '../../../public/icons/email.svg';

const EmailIcon = () => {
  return (
    <div className='flex justify-center items-center w-11 h-9'>
      <div className='relative w-full h-full'>
        {/* <Image src={EmailLogo} alt='Email' layout='fill' /> */}
        <img src='/icons/email.svg' alt='Email' className='w-full h-full' />
      </div>
    </div>
  );
};

export default EmailIcon;
