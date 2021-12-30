import { Fragment } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import IngredientsList from '../../../components/pages/recipes/[recipeId]/IngredientsList';
import StepsList from '../../../components/pages/recipes/[recipeId]/StepsList';
import RecipePhoto from '../../../components/pages/recipes/[recipeId]/RecipePhoto';
import TitleAndPreface from '../../../components/pages/recipes/[recipeId]/TitleAndPreface';

const RecipeDetails = props => {
  const router = useRouter();

  const recipeId = router.query.recipeId;

  return (
    <Fragment>
      <Head>
        <title>{props.name}</title>
        {/* TODO - Add Meta data here */}
      </Head>

      <div className='flex flex-col lg:flex-row 2xl:justify-center fixed overflow-scroll lg:overflow-auto top-14 inset-x-0 bottom-0 -z-10 bg-black'>
        {/* Small screen */}
        {props.large_photo && (
          <div className='lg:hidden basis-1/3 grow-0 shrink-0 sticky top-0 -z-50'>
            <RecipePhoto recipeName={props.name} photo={props.large_photo} />
          </div>
        )}
        <div className='lg:hidden basis-2/3 grow shrink text-gray-300'>
          <div className='bg-slate-800 rounded-2xl'>
            <TitleAndPreface title={props.name} preface={props.preface} />
            <div className='pb-4 rounded-b-2xl'>
              <IngredientsList className='text-gray-700' ingredients={props.ingredients} />
              <StepsList steps={props.steps} className='pt-2' />
            </div>
          </div>
        </div>

        {/* Large screen */}
        <div className='hidden lg:flex 2xl:hidden flex-col basis-2/3 grow shrink overflow-scroll text-gray-300'>
          {props.large_photo && (
            <div className='basis-2/3 grow-0 shrink-0 sticky top-0 -z-50'>
              <RecipePhoto recipeName={props.name} photo={props.large_photo} />
            </div>
          )}
          <div className='basis-1/3 grow shrink'>
            <div className='rounded-2xl'>
              <TitleAndPreface title={props.name} preface={props.preface} />
              <div className='bg-slate-800 rounded-b-2xl min-h-screen-minus-nav'>
                <StepsList steps={props.steps} />
              </div>
            </div>
          </div>
        </div>
        <div className='hidden lg:block 2xl:hidden basis-1/3 grow-0 shrink-0 overflow-scroll'>
          <div className='bg-white rounded-2xl'>
            <IngredientsList ingredients={props.ingredients} />
          </div>
        </div>

        {/* 2xl screen */}
        <div className='hidden 2xl:block basis-3/5 grow-0 shrink-0 overflow-scroll'>
          {props.large_photo && (
            <div className='h-screen-minus-nav sticky top-0 -z-50 border-x border-t border-slate-200 rounded-t-2xl'>
              <RecipePhoto recipeName={props.name} photo={props.large_photo} />
            </div>
          )}
          <div className='flex justify-center min-h-screen-minus-nav-minus-8rem -mt-28 mx-px'>
            <div className='rounded-2xl w-full'>
              <TitleAndPreface title={props.name} preface={props.preface} />
              <div className='bg-slate-800 rounded-b-2xl h-full'>
                <StepsList steps={props.steps} />
              </div>
            </div>
          </div>
        </div>
        <div className='hidden 2xl:block basis-1/5 grow-0 shrink-0 overflow-scroll'>
          <div className='rounded-2xl'>
            <IngredientsList ingredients={props.ingredients} />
          </div>
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
