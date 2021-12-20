import { Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import HorizontalRecipeList from '../../components/ui/recipe-lists/HorizontalRecipeList';
import Title from '../../components/ui/Title';

const RecipeIndex = props => {
  const router = useRouter();
  const [tiers, setTiers] = useState(1);

  const addJapaneseParamsHandler = () => {
    router.push(`/recipes?type=japanese`);
  };

  console.log(router.query);

  useEffect(() => {
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
  }, []);

  return (
    <Fragment>
      <Head>
        <title>TEST TITLE</title>
        {/* TODO - Add Meta data here */}
      </Head>
      <Title>RECIPE INDEX PAGE</Title>
      <button onClick={addJapaneseParamsHandler}>Japanese</button>
      <HorizontalRecipeList height='70vh' recipes={props.recipes} tiers={tiers} />
    </Fragment>
  );
};

export const getStaticProps = async () => {
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
