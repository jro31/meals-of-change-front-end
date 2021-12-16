import { Fragment } from 'react';

import SplitBanner from '../components/pages/homepage/SplitBanner';
import HorizontalRecipeList from '../components/ui/recipe-lists/HorizontalRecipeList';

const HomePage = props => {
  return (
    <Fragment>
      <SplitBanner />
      <h2 className='ml-10'>Latest recipes</h2>
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
