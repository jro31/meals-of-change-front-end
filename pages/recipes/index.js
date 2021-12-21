import { Fragment, useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import HorizontalRecipeList from '../../components/ui/recipe-lists/HorizontalRecipeList';
import Title from '../../components/ui/text/Title';

const RecipeIndex = props => {
  const router = useRouter();
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
    switch (true) {
      case window.innerHeight <= 600:
        setTiers(1);
        return;
      case window.innerHeight < 1000:
        setTiers(2);
        return;
      case window.innerHeight >= 1000:
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

  return (
    <Fragment>
      <Head>
        <title>TEST TITLE</title>
        {/* TODO - Add Meta data here */}
      </Head>
      <Title>{title || 'Recipes'}</Title>
      <HorizontalRecipeList height='70vh' recipes={recipes} tiers={tiers} />
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
