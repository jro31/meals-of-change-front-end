import { Fragment } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import IngredientsList from '../../../components/pages/recipes/[recipeId]/IngredientsList';
import StepsList from '../../../components/pages/recipes/[recipeId]/StepsList';
import RecipePhoto from '../../../components/pages/recipes/[recipeId]/RecipePhoto';
import Title from '../../../components/ui/text/Title';
import Preface from '../../../components/pages/recipes/[recipeId]/Preface';

const RecipeDetails = props => {
  const router = useRouter();

  const recipeId = router.query.recipeId;

  return (
    <Fragment>
      <Head>
        <title>{props.name}</title>
        {/* TODO - Add Meta data here */}
      </Head>

      {/* TODO - Display recipe tags somewhere */}
      <div className='flex flex-col lg:flex-row xl:justify-center fixed top-14 inset-x-0 bottom-0 -z-10 bg-black'>
        <div className='flex xl:block flex-col basis-full lg:basis-2/3 xl:basis-8/12 2xl:basis-3/5 grow xl:grow-0 shrink xl:shrink-0 overflow-scroll border-x border-t border-slate-200 rounded-t-2xl'>
          {props.large_photo && (
            <div className='basis-2/3 sm:basis-3/4 md:basis-5/6 lg:basis-3/4 grow-0 shrink-0 sticky top-0 -z-50 xl:h-screen-minus-nav'>
              <RecipePhoto recipeName={props.name} photo={props.large_photo} />
            </div>
          )}
          <div className='basis-1/3 sm:basis-1/4 md:basis-1/6 lg:basis-1/4 grow shrink -mt-36 xl:flex xl:justify-center xl:min-h-screen-minus-nav-minus-13rem xl:mx-px'>
            <div className='rounded-2xl basis-full'>
              <div className='pt-4 pb-2 px-2 lg:pl-1/12 bg-gradient-to-b from-transparent to-slate-800 rounded-t-2xl'>
                <Title>{props.name}</Title>
              </div>
              <div className='pt-2 pb-4 px-2 lg:pl-1/12 bg-slate-800 -my-px'>
                <Preface preface={props.preface} tags={props.tags} />
              </div>
              <div className='bg-slate-800 min-h-screen-minus-nav xl:min-h-0 xl:h-full'>
                <IngredientsList className='lg:hidden' ingredients={props.ingredients} />
                <StepsList steps={props.steps} />
              </div>
            </div>
          </div>
        </div>
        <div className='hidden lg:block basis-1/3 xl:basis-3/12 2xl:basis-1/5 grow-0 shrink-0 overflow-scroll'>
          <IngredientsList ingredients={props.ingredients} />
        </div>
      </div>
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
      name: recipe.name,
      author: recipe.user,
      timeMinutes: recipe.time_minutes,
      preface: recipe.preface,
      ingredients: recipe.ingredients,
      steps: recipe.steps,
      tags: recipe.tags,
      thumbnail_photo: recipe.thumbnail_photo,
      small_photo: recipe.small_photo,
      large_photo: recipe.large_photo,
      full_size_photo: recipe.full_size_photo,
    },
    revalidate: false, // TODO - Update this to a time (in seconds, e.g 60) if the data ever needs to be reloaded, for example if it's possible to add comments to a recipe
  };
};

export default RecipeDetails;
