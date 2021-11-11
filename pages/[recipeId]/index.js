import { Fragment } from 'react';
import Head from 'next/head';

const recipeDetails = props => {
  return (
    <Fragment>
      <Head>
        <title>RECIPE TITLE</title>
        {/* ADD META DATA HERE */}
      </Head>
      <div>RECIPE DETAILS</div>
    </Fragment>
  );
};

export default recipeDetails;
