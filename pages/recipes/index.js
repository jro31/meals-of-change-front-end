import { Fragment } from 'react';
import { useRouter } from 'next/router';

const RecipeIndex = () => {
  const router = useRouter();

  const addJapaneseParamsHandler = () => {
    router.push(`/recipes?type=japanese`);
  };

  console.log(router.query);

  return (
    <Fragment>
      <h1>RECIPE INDEX PAGE</h1>
      <button onClick={addJapaneseParamsHandler}>Japanese</button>
    </Fragment>
  );
};

export default RecipeIndex;
