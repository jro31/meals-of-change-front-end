import Image from 'next/image';

import ShareIcon from '../../../../public/icons/share.svg';

const Share = () => {
  const handleShareClick = () => {
    return '';
  };

  return (
    <div
      onClick={handleShareClick}
      className='flex justify-center items-center w-12 h-10 bg-slate-500/50 rounded-md cursor-pointer'
    >
      <div className='relative w-5/12 h-8'>
        <Image src={ShareIcon} alt='Share icon' layout='fill' />
      </div>
    </div>
  );
};

export default Share;
