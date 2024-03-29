import { Fragment, useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import HorizontalRecipeList from '../../components/ui/recipe-lists/HorizontalRecipeList';

const RecipeIndex = props => {
  const router = useRouter();
  const [recipes, setRecipes] = useState(props.recipes);
  const [title, setTitle] = useState('');

  const fetchRecipes = useCallback(async () => {
    if (Object.keys(router.query).length) {
      try {
        // TODO - This limit of 50 recipes needs to be removed, or at least paginated so that further recipes are loaded as the user scrolls
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/recipes?${
            router.asPath.split('?')[1]
          }&limit=50`,
          { credentials: 'include' }
        );
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error_message || 'Unable to fetch recipes');
        }

        setRecipes(data.recipes);
        setTitle(data.filter_title || '');
      } catch (error) {
        // TODO - Display this error somehow (perhaps update/redden the title to something like 'Unable to filter recipes')
        console.log(error.message);
        setRecipes(props.recipes);
        setTitle('');
      }
    } else {
      setRecipes(props.recipes);
      setTitle('');
    }
  }, [router.query, props.recipes, router.asPath]);

  useEffect(() => {
    fetchRecipes();
  }, [fetchRecipes]);

  return (
    <Fragment>
      <Head>
        <title>{title || 'Recipes'}</title>
        <meta name='description' content='Plant-based recipes for everyone, by everyone.' />
        <meta
          name='keywords'
          content={`plant-based, vegan, recipes ${recipes.map(recipe => recipe.name).join(', ')}`}
        />
        {/* TODO - Add Twitter and Facebook meta tags */}
      </Head>

      <div className='flex flex-col fixed top-14 inset-x-0 bottom-0 bg-black min-h-screen-minus-nav -z-10 overflow-scroll'>
        <HorizontalRecipeList title={title || 'Recipes'} recipes={recipes} />
      </div>
    </Fragment>
  );
};

export const getStaticProps = async () => {
  // TODO - Limit the number of recipes returned?
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/recipes`, {
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

export default RecipeIndex;
