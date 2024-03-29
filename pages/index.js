import { Fragment } from 'react';
import Head from 'next/head';

import HorizontalRecipeList from '../components/ui/recipe-lists/HorizontalRecipeList';
import Title from '../components/ui/text/Title';
import Subheading from '../components/ui/text/Subheading';
import BackgroundImage from '../components/pages/homepage/BackgroundImage';

const HomePage = props => {
  return (
    <Fragment>
      <Head>
        <title>Meals of Change</title>
        <meta
          name='description'
          content='Plant-based recipes for all abilities. Add your own vegan creations, see what others have created. Eating for the good of the planet.'
        />
        <meta name='keywords' content='vegan, plant-based, recipes, sustainable diet' />
        {/* TODO - Add Twitter and Facebook meta tags */}
      </Head>

      <div className='flex flex-col fixed overflow-scroll top-0 inset-x-0 bottom-0 bg-slate-600 text-gray-300 -z-10'>
        <BackgroundImage />
        <div className='mt-half-screen-minus-nav min-h-half-screen-minus-nav -z-10'>
          <div className='bg-gradient-to-b from-transparent to-black pb-1'>
            <div className='flex flex-col px-1/12 gap-3'>
              <Title>Meals of Change</Title>
              <Subheading>Plant-based recipes by you</Subheading>
            </div>
          </div>
          <div className='bg-black -mt-1 pt-10 pb-4 h-[468px] w-full'>
            <HorizontalRecipeList recipes={props.recipes} page='homepage' />
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
