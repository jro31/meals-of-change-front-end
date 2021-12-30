import { Fragment } from 'react';
import Head from 'next/head';
import Image from 'next/image';

import HorizontalRecipeList from '../components/ui/recipe-lists/HorizontalRecipeList';
import Title from '../components/ui/text/Title';

const HomePage = props => {
  return (
    <Fragment>
      <Head>
        <title>Meals of Change</title>
        {/* TODO - Add Meta data here */}
      </Head>
      <div className='flex flex-col fixed overflow-scroll top-0 inset-x-0 bottom-0 bg-slate-600 text-gray-300 -z-10'>
        <div className='w-full h-screen-minus-nav fixed -z-20'>
          {/* TODO - Resize this image */}
          <Image
            src='/../public/images/homepage-buddah-bowl.jpg'
            alt='Vegan Buddah bowl'
            layout='fill'
            objectFit='cover'
            objectPosition='right 50%'
          />
        </div>
        <div className='mt-half-screen-minus-nav min-h-half-screen-minus-nav -z-10'>
          <div className='bg-gradient-to-b from-transparent to-black pb-1'>
            <div className='flex flex-col px-1/12 gap-3'>
              <Title>Meals of Change</Title>
              <div className='text-3xl font-thin text-gray-300'>Plant-based recipes by you</div>
            </div>
          </div>
          <div className='bg-black -mt-1 pt-10'>
            <HorizontalRecipeList recipes={props.recipes} tiers={1} height='40vh' />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export const getStaticProps = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/recipes?limit=50`, {
    credentials: 'include',
  });
  const data = await response.json();

  return {
    props: {
      recipes: data.recipes,
    },
    revalidate: 60,
  };
};

export default HomePage;
