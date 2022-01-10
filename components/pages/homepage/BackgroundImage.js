import Image from 'next/image';
import { Fragment } from 'react';

import BuddahBowlXs from '../../../public/images/homepage-buddah-bowl-xs.jpg';
import BuddahBowlSm from '../../../public/images/homepage-buddah-bowl-sm.jpg';
import BuddahBowlMd from '../../../public/images/homepage-buddah-bowl-md.jpg';
import BuddahBowlLg from '../../../public/images/homepage-buddah-bowl-lg.jpg';
import BuddahBowlXl from '../../../public/images/homepage-buddah-bowl-xl.jpg';
import BuddahBowl2xl from '../../../public/images/homepage-buddah-bowl-2xl.jpg';

const BackgroundImage = () => {
  return (
    <Fragment>
      <div className='block sm:hidden w-full h-screen-minus-nav fixed -z-20'>
        <Image
          src={BuddahBowlXs}
          alt='Vegan Buddah bowl'
          layout='fill'
          objectFit='cover'
          objectPosition='right 50%'
        />
      </div>
      <div className='hidden sm:block md:hidden w-full h-screen-minus-nav fixed -z-20'>
        <Image
          src={BuddahBowlSm}
          alt='Vegan Buddah bowl'
          layout='fill'
          objectFit='cover'
          objectPosition='right 50%'
        />
      </div>
      <div className='hidden md:block lg:hidden w-full h-screen-minus-nav fixed -z-20'>
        <Image
          src={BuddahBowlMd}
          alt='Vegan Buddah bowl'
          layout='fill'
          objectFit='cover'
          objectPosition='right 50%'
        />
      </div>
      <div className='hidden lg:block xl:hidden w-full h-screen-minus-nav fixed -z-20'>
        <Image
          src={BuddahBowlLg}
          alt='Vegan Buddah bowl'
          layout='fill'
          objectFit='cover'
          objectPosition='right 50%'
        />
      </div>
      <div className='hidden xl:block 2xl:hidden w-full h-screen-minus-nav fixed -z-20'>
        <Image
          src={BuddahBowlXl}
          alt='Vegan Buddah bowl'
          layout='fill'
          objectFit='cover'
          objectPosition='right 50%'
        />
      </div>
      <div className='hidden 2xl:block w-full h-screen-minus-nav fixed -z-20'>
        <Image
          src={BuddahBowl2xl}
          alt='Vegan Buddah bowl'
          layout='fill'
          objectFit='cover'
          objectPosition='right 50%'
        />
      </div>
    </Fragment>
  );
};

export default BackgroundImage;
