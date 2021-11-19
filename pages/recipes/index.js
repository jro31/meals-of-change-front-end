import { Fragment } from 'react';
import { useRouter } from 'next/router';

import HorizontalRecipeList from '../../components/ui/recipe-lists/HorizontalRecipeList';
import { DUMMY_RECIPES } from '../index';

const RecipeIndex = props => {
  const router = useRouter();

  const addJapaneseParamsHandler = () => {
    router.push(`/recipes?type=japanese`);
  };

  console.log(router.query);

  return (
    <Fragment>
      <h1>RECIPE INDEX PAGE</h1>
      <button onClick={addJapaneseParamsHandler}>Japanese</button>
      <HorizontalRecipeList height={'70vh'} recipes={props.recipes} tiers={2} />
    </Fragment>
  );
};

export const getStaticProps = () => {
  // fetching data from API...
  const returnedRecipes = DUMMY_RECIPES;

  return {
    props: {
      recipes: returnedRecipes,
    },
    revalidate: 60,
  };
};

export default RecipeIndex;
