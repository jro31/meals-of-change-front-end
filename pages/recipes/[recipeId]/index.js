import { Fragment } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Title from '../../../components/ui/text/Title';
import IngredientsList from '../../../components/pages/recipes/[recipeId]/IngredientsList';
import Preface from '../../../components/pages/recipes/[recipeId]/Preface';
import StepsList from '../../../components/pages/recipes/[recipeId]/StepsList';

const RecipeDetails = props => {
  const router = useRouter();

  const recipeId = router.query.recipeId;

  return (
    <Fragment>
      <Head>
        <title>{props.name}</title>
        {/* TODO - Add Meta data here */}
      </Head>

      <div className='block lg:hidden fixed overflow-scroll top-14 inset-x-0 bottom-0 bg-gray-800'>
        <div className='h-1/3 sticky top-0 -z-50'>
          {/* TODO - Handle there being no photo (probably use a stock photo of the Meals of Change logo) */}
          <Image
            src={props.small_photo}
            alt={`${props.name} photo`}
            layout='fill'
            objectFit='cover'
            objectPosition='50% 50%'
            className='rounded-2xl'
          />
        </div>
        <div className='h-2/3'>
          <div className='bg-gray-200 rounded-2xl'>
            <div className='py-4 px-2 bg-white rounded-t-2xl mb-2'>
              <div>
                <Title className='font-bold'>{props.name}</Title>
              </div>
              <Preface preface={props.preface} />
            </div>
            <div className='py-4 bg-white rounded-b-2xl mt-2'>
              <IngredientsList ingredients={props.ingredients} />
              <StepsList steps={props.steps} />
            </div>
          </div>
        </div>
      </div>

      <div className='hidden lg:flex fixed -z-40 top-14 inset-x-0 bottom-0 bg-gray-800'>
        {/* TODO - Handle no image existing */}
        {/* <Image
          src={props.full_size_photo}
          alt={`${props.name} photo`}
          layout='fill'
          objectFit='cover'
          objectPosition='50% 50%'
        /> */}
        <div className='basis-3/4'></div>
        <div className='basis-1/4'></div>
      </div>

      <Title>{props.name}</Title>
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
