import { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import HorizontalRecipeList from '../../components/ui/recipe-lists/HorizontalRecipeList';
import Title from '../../components/ui/text/Title';

const RecipeIndex = props => {
  const router = useRouter();
  const recipeListContainerRef = useRef();
  const [tiers, setTiers] = useState(1);
  const [recipes, setRecipes] = useState(props.recipes);
  const [title, setTitle] = useState('');

  const fetchRecipes = useCallback(async () => {
    if (Object.keys(router.query).length) {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/recipes?${
            router.asPath.split('?')[1]
          }&limit=50`,
          {}
        );
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error_message || 'Unable to fetch recipes');
        }

        setRecipes(data.recipes);
        setTitle(data.filter_title || '');
      } catch (error) {
        // TODO - Display this error somehow
        console.log('😇😇😇😇😇😇😇😇😇😇😇😇😇😇😇😇😇😇😇😇😇😇😇😇😇😇😇😇');
        console.log(error.message);
        setRecipes(props.recipes);
        setTitle('');
      }
    } else {
      setRecipes(props.recipes);
      setTitle('');
    }
  }, [router.query, props.recipes, router.asPath]);

  const setListTiers = () => {
    const recipeListHeight = recipeListContainerRef.current.offsetHeight;

    switch (true) {
      case recipeListHeight <= 750:
        setTiers(1);
        return;
      case recipeListHeight < 1125:
        setTiers(2);
        return;
      case recipeListHeight >= 1125:
        setTiers(3);
        return;
      default:
        setTiers(1);
    }
  };

  useEffect(() => {
    fetchRecipes();
    setListTiers();
  }, [fetchRecipes]);

  // TODO - Handle no recipes being returned
  // TODO - Handle user scrolling to the last recipe
  return (
    <Fragment>
      <Head>
        <title>{title || 'Recipes'}</title>
        {/* TODO - Add Meta data here */}
      </Head>

      <div className='flex flex-col fixed top-14 inset-x-0 bottom-0 bg-black min-h-screen-minus-nav'>
        <div className='pl-1/12 my-6 grow-0 shrink'>
          <Title>{title || 'Recipes'}</Title>
        </div>
        <div className='grow shrink-0' ref={recipeListContainerRef}>
          <HorizontalRecipeList
            height='calc(100vh - 3.5rem - 108px)'
            recipes={recipes}
            tiers={tiers}
          />
        </div>
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
