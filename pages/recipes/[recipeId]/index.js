import { Fragment } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { DUMMY_RECIPES } from '../../index';

const RecipeDetails = props => {
  const router = useRouter();

  const recipeId = router.query.recipeId;

  return (
    <Fragment>
      <Head>
        <title>{props.name}</title>
        {/* ADD META DATA HERE */}
      </Head>
      <h1>{props.name}</h1>
      <img src={props.photo} alt={props.name} />
    </Fragment>
  );
};

export const getStaticPaths = () => {
  const paths = DUMMY_RECIPES.map(recipe => {
    return {
      params: {
        recipeId: recipe.id,
      },
    };
  });

  return {
    fallback: 'blocking',
    paths: paths,
  };
};

export const getStaticProps = context => {
  const recipeId = context.params.recipeId;

  // Fetching data for a single recipe from the API...
  const returnedRecipe = DUMMY_RECIPES.filter(recipe => recipe.id === recipeId)[0];

  return {
    props: {
      id: returnedRecipe.id,
      name: returnedRecipe.name,
      photo: returnedRecipe.photo,
      process: returnedRecipe.process,
      timeMinutes: returnedRecipe.timeMinutes,
      author: returnedRecipe.author,
      ingredients: returnedRecipe.ingredients,
    },
  };
};

export default RecipeDetails;
