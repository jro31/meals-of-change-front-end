import { Fragment } from 'react';
import Head from 'next/head';
import RecipeDisplay from '../../../components/pages/recipes/[recipeId]/RecipeDisplay';

const RecipeDetails = props => {
  const tagsArray = () => {
    return props.tags.map(tag => tag.name);
  };

  return (
    <Fragment>
      <Head>
        <title>{`${props.name} recipe`}</title>
        <meta name='description' content={props.steps.map(step => step.instructions).join(', ')} />
        <meta
          name='keywords'
          content={`${props.name}, vegan, plant-based, recipe, ${props.tags
            .map(tag => tag.name)
            .join(', ')}`}
        />
      </Head>

      <RecipeDisplay
        recipeId={props.recipeId}
        name={props.name}
        preface={props.preface}
        tags={tagsArray()}
        ingredients={props.ingredients}
        cookingTime={props.timeMinutes}
        steps={props.steps}
        photo={props.largePhoto}
        isPreview={false}
      />
    </Fragment>
  );
};

export const getStaticPaths = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/recipes?ids_array=true`, {
    credentials: 'include',
  });
  const data = await response.json();

  const paths = data.recipe_ids.map(recipe_id => {
    return {
      params: {
        recipeId: recipe_id.toString(),
      },
    };
  });

  return {
    fallback: 'blocking',
    paths: paths,
  };
};

export const getStaticProps = async context => {
  const recipeId = context.params.recipeId;

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/recipes/${recipeId}`, {
    credentials: 'include',
  });
  const data = await response.json();
  const recipe = data.recipe;

  return {
    props: {
      recipeId: recipe.id,
      name: recipe.name,
      author: recipe.user,
      timeMinutes: recipe.time_minutes,
      preface: recipe.preface,
      ingredients: recipe.ingredients,
      steps: recipe.steps,
      tags: recipe.tags,
      largePhoto: recipe.large_photo,
    },
    revalidate: 60,
  };
};

export default RecipeDetails;
