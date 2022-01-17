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

        {/* Facebook */}
        <meta property='og:title' content={props.name} />
        <meta property='og:type' content='website' />
        <meta property='og:url' content={`https://mealsofchange.com/recipes/${props.recipeId}`} />
        <meta property='og:image' content={props.largePhoto} />
        <meta property='og:site_name' content='Meals of Change'></meta>

        {/* Twitter */}
        <meta name='twitter:title' content={props.name} />
        <meta name='twitter:site' content='@mealsofchange' />
        {/* TODO - Once storing user twitter handles, add '<meta name="twitter:creator" content="@SarahMaslinNir">' tag - see https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/summary-card-with-large-image */}
        <meta name='twitter:description' content={props.preface || props.steps[0].instructions} />
        <meta name='twitter:image' content={props.smallPhoto} />
        {/* FIXME - This image isn't dislaying */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:image:alt' content={`${props.name} photo`}></meta>
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
      smallPhoto: recipe.small_photo,
      largePhoto: recipe.large_photo,
    },
    revalidate: 60,
  };
};

export default RecipeDetails;
