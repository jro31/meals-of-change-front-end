import { Fragment } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Heading from '../../../components/ui/text/Heading';
import Title from '../../../components/ui/text/Title';

const RecipeDetails = props => {
  const router = useRouter();

  const recipeId = router.query.recipeId;

  return (
    <Fragment>
      <Head>
        <title>{props.name}</title>
        {/* TODO - Add Meta data here */}
      </Head>

      <div className='block xl:hidden fixed overflow-scroll top-14 inset-x-0 bottom-0 bg-gray-800'>
        <div className='h-1/3 sticky top-0 -z-50'>
          <Image
            src={props.small_photo}
            alt={`${props.name} photo`}
            layout='fill'
            objectFit='cover'
            objectPosition='50% 50%'
          />
        </div>
        <div className='h-2/3'>
          <div className='bg-gray-200 rounded-2xl'>
            <div className='py-4 px-2 bg-white rounded-t-2xl mb-2'>
              <Title className='font-bold'>{props.name}</Title>
            </div>
            <div className='py-4 px-2 bg-white rounded-b-2xl mt-2'>
              <div>
                <Heading className='font-bold'>Ingredients</Heading>
              </div>
              <div>
                {props.ingredients.map(ingredient => (
                  // TODO - Alternate the background colours of each ingredient div
                  <div key={ingredient.food} className='flex items-center px-2'>
                    <div className='basis-1/3 grow-0 shrink-0'>{ingredient.amount}</div>
                    <div>
                      <div>
                        {ingredient.food}
                        {ingredient.optional && (
                          <span className='text-xs font-extra-light'> (optional)</span>
                        )}
                      </div>
                      <div className='text-xs font-extra-light'>{ingredient.preparation}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                {props.steps.map(step => (
                  // TODO - Alternate the background colours of each step div
                  <div key={step.position} className='flex'>
                    <div className='basis-1/12 grow-0 shrink-0'>{step.position}</div>
                    <div>{step.instructions}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='hidden xl:block fixed -z-40 top-14 inset-x-0 bottom-0 bg-gray-800'>
        {/* TODO - Handle no image existing */}
        <Image
          src={props.full_size_photo}
          alt={`${props.name} photo`}
          layout='fill'
          objectFit='cover'
          objectPosition='50% 50%'
        />
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
