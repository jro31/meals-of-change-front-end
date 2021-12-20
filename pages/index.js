import { Fragment } from 'react';
import Head from 'next/head';

import SplitBanner from '../components/pages/homepage/SplitBanner';
import Heading from '../components/ui/Heading';
import HorizontalRecipeList from '../components/ui/recipe-lists/HorizontalRecipeList';

const HomePage = props => {
  return (
    <Fragment>
      <Head>
        <title>TEST TITLE</title>
        {/* TODO - Add Meta data here */}
      </Head>
      <SplitBanner />
      <Heading className='ml-10'>Latest recipes</Heading>
      <HorizontalRecipeList recipes={props.recipes} tiers={1} height='40vh' />
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
