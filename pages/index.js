import { Fragment } from 'react';

import SplitBanner from '../components/homepage/SplitBanner';
import HorizontalRecipeList from '../components/ui/recipe-lists/HorizontalRecipeList';
import classes from './index.module.css';

export const DUMMY_RECIPES = [
  {
    id: 'r1',
    name: 'Pasta with cheese',
    photo:
      'https://img-global.cpcdn.com/001_recipes/c25d024c31c9e3c5/751x532cq70/my-nice-light-mozzarella-pasta-sprinkled-parmesan-cheese-grated-recipe-main-photo.jpg',
    process: 'Cook pasta. Add cheese.',
    timeMinutes: 20,
    author: 'Thor',
    ingredients: [
      {
        food: 'Pasta',
        amount: 'Loads',
        preparation: null,
        optional: false,
        unit: null,
      },
      {
        food: 'Cheese',
        amount: '10',
        preparation: 'Grated',
        optional: false,
        unit: 'packs',
      },
    ],
  },
  {
    id: 'r2',
    name: 'Fruit in a bowl',
    photo: 'https://www.valyastasteofhome.com/wp-content/uploads/2015/06/062-1.jpg',
    process: 'Cut fruit. Put in bowl. Eat.',
    timeMinutes: 10,
    author: 'Jesus',
    ingredients: [
      {
        food: 'Berries',
        amount: '1',
        preparation: 'Washed',
        optional: false,
        unit: 'kg',
      },
      {
        food: 'Bananas',
        amount: '2',
        preparation: 'Chopped',
        optional: false,
        unit: null,
      },
    ],
  },
  {
    id: 'r3',
    name: 'Cup of tea',
    photo: 'https://www.toxel.com/wp-content/uploads/2013/03/largecup01.jpg',
    process: 'Boil water. Pour in mug with tea bag.',
    timeMinutes: 5,
    author: 'Churchill',
    ingredients: [
      {
        food: 'Tea bag',
        amount: '1',
        preparation: null,
        optional: false,
        unit: null,
      },
      {
        food: 'Water',
        amount: '750',
        preparation: 'Boiled',
        optional: false,
        unit: 'ml',
      },
    ],
  },
  {
    id: 'r4',
    name: 'Beans on toast',
    photo:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/beans-on-toast-1578934200.jpg',
    process: 'Cook beans in pan. Pour on toast.',
    timeMinutes: 10,
    author: 'Jethro',
    ingredients: [
      {
        food: 'Baked beans',
        amount: '1',
        preparation: null,
        optional: false,
        unit: 'can',
      },
      {
        food: 'Toast',
        amount: '2',
        preparation: null,
        optional: false,
        unit: 'slices',
      },
    ],
  },
  {
    id: 'r5',
    name: 'Pasta with cheese',
    photo:
      'https://img-global.cpcdn.com/001_recipes/c25d024c31c9e3c5/751x532cq70/my-nice-light-mozzarella-pasta-sprinkled-parmesan-cheese-grated-recipe-main-photo.jpg',
    process: 'Cook pasta. Add cheese.',
    timeMinutes: 20,
    author: 'Thor',
    ingredients: [
      {
        food: 'Pasta',
        amount: 'Loads',
        preparation: null,
        optional: false,
        unit: null,
      },
      {
        food: 'Cheese',
        amount: '10',
        preparation: 'Grated',
        optional: false,
        unit: 'packs',
      },
    ],
  },
  {
    id: 'r6',
    name: 'Fruit in a bowl',
    photo: 'https://www.valyastasteofhome.com/wp-content/uploads/2015/06/062-1.jpg',
    process: 'Cut fruit. Put in bowl. Eat.',
    timeMinutes: 10,
    author: 'Jesus',
    ingredients: [
      {
        food: 'Berries',
        amount: '1',
        preparation: 'Washed',
        optional: false,
        unit: 'kg',
      },
      {
        food: 'Bananas',
        amount: '2',
        preparation: 'Chopped',
        optional: false,
        unit: null,
      },
    ],
  },
  {
    id: 'r7',
    name: 'Cup of tea',
    photo: 'https://www.toxel.com/wp-content/uploads/2013/03/largecup01.jpg',
    process: 'Boil water. Pour in mug with tea bag.',
    timeMinutes: 5,
    author: 'Churchill',
    ingredients: [
      {
        food: 'Tea bag',
        amount: '1',
        preparation: null,
        optional: false,
        unit: null,
      },
      {
        food: 'Water',
        amount: '750',
        preparation: 'Boiled',
        optional: false,
        unit: 'ml',
      },
    ],
  },
  {
    id: 'r8',
    name: 'Beans on toast',
    photo:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/beans-on-toast-1578934200.jpg',
    process: 'Cook beans in pan. Pour on toast.',
    timeMinutes: 10,
    author: 'Jethro',
    ingredients: [
      {
        food: 'Baked beans',
        amount: '1',
        preparation: null,
        optional: false,
        unit: 'can',
      },
      {
        food: 'Toast',
        amount: '2',
        preparation: null,
        optional: false,
        unit: 'slices',
      },
    ],
  },
  {
    id: 'r9',
    name: 'Pasta with cheese',
    photo:
      'https://img-global.cpcdn.com/001_recipes/c25d024c31c9e3c5/751x532cq70/my-nice-light-mozzarella-pasta-sprinkled-parmesan-cheese-grated-recipe-main-photo.jpg',
    process: 'Cook pasta. Add cheese.',
    timeMinutes: 20,
    author: 'Thor',
    ingredients: [
      {
        food: 'Pasta',
        amount: 'Loads',
        preparation: null,
        optional: false,
        unit: null,
      },
      {
        food: 'Cheese',
        amount: '10',
        preparation: 'Grated',
        optional: false,
        unit: 'packs',
      },
    ],
  },
  {
    id: 'r10',
    name: 'Fruit in a bowl',
    photo: 'https://www.valyastasteofhome.com/wp-content/uploads/2015/06/062-1.jpg',
    process: 'Cut fruit. Put in bowl. Eat.',
    timeMinutes: 10,
    author: 'Jesus',
    ingredients: [
      {
        food: 'Berries',
        amount: '1',
        preparation: 'Washed',
        optional: false,
        unit: 'kg',
      },
      {
        food: 'Bananas',
        amount: '2',
        preparation: 'Chopped',
        optional: false,
        unit: null,
      },
    ],
  },
  {
    id: 'r11',
    name: 'Cup of tea',
    photo: 'https://www.toxel.com/wp-content/uploads/2013/03/largecup01.jpg',
    process: 'Boil water. Pour in mug with tea bag.',
    timeMinutes: 5,
    author: 'Churchill',
    ingredients: [
      {
        food: 'Tea bag',
        amount: '1',
        preparation: null,
        optional: false,
        unit: null,
      },
      {
        food: 'Water',
        amount: '750',
        preparation: 'Boiled',
        optional: false,
        unit: 'ml',
      },
    ],
  },
  {
    id: 'r12',
    name: 'Beans on toast',
    photo:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/beans-on-toast-1578934200.jpg',
    process: 'Cook beans in pan. Pour on toast.',
    timeMinutes: 10,
    author: 'Jethro',
    ingredients: [
      {
        food: 'Baked beans',
        amount: '1',
        preparation: null,
        optional: false,
        unit: 'can',
      },
      {
        food: 'Toast',
        amount: '2',
        preparation: null,
        optional: false,
        unit: 'slices',
      },
    ],
  },
  {
    id: 'r13',
    name: 'Pasta with cheese',
    photo:
      'https://img-global.cpcdn.com/001_recipes/c25d024c31c9e3c5/751x532cq70/my-nice-light-mozzarella-pasta-sprinkled-parmesan-cheese-grated-recipe-main-photo.jpg',
    process: 'Cook pasta. Add cheese.',
    timeMinutes: 20,
    author: 'Thor',
    ingredients: [
      {
        food: 'Pasta',
        amount: 'Loads',
        preparation: null,
        optional: false,
        unit: null,
      },
      {
        food: 'Cheese',
        amount: '10',
        preparation: 'Grated',
        optional: false,
        unit: 'packs',
      },
    ],
  },
  {
    id: 'r14',
    name: 'Fruit in a bowl',
    photo: 'https://www.valyastasteofhome.com/wp-content/uploads/2015/06/062-1.jpg',
    process: 'Cut fruit. Put in bowl. Eat.',
    timeMinutes: 10,
    author: 'Jesus',
    ingredients: [
      {
        food: 'Berries',
        amount: '1',
        preparation: 'Washed',
        optional: false,
        unit: 'kg',
      },
      {
        food: 'Bananas',
        amount: '2',
        preparation: 'Chopped',
        optional: false,
        unit: null,
      },
    ],
  },
  {
    id: 'r15',
    name: 'Cup of tea',
    photo: 'https://www.toxel.com/wp-content/uploads/2013/03/largecup01.jpg',
    process: 'Boil water. Pour in mug with tea bag.',
    timeMinutes: 5,
    author: 'Churchill',
    ingredients: [
      {
        food: 'Tea bag',
        amount: '1',
        preparation: null,
        optional: false,
        unit: null,
      },
      {
        food: 'Water',
        amount: '750',
        preparation: 'Boiled',
        optional: false,
        unit: 'ml',
      },
    ],
  },
  {
    id: 'r16',
    name: 'Beans on toast',
    photo:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/beans-on-toast-1578934200.jpg',
    process: 'Cook beans in pan. Pour on toast.',
    timeMinutes: 10,
    author: 'Jethro',
    ingredients: [
      {
        food: 'Baked beans',
        amount: '1',
        preparation: null,
        optional: false,
        unit: 'can',
      },
      {
        food: 'Toast',
        amount: '2',
        preparation: null,
        optional: false,
        unit: 'slices',
      },
    ],
  },
];

const HomePage = props => {
  return (
    <Fragment>
      <SplitBanner />
      <h2 className={classes['latest-recipes-heading']}>Latest recipes</h2>
      <HorizontalRecipeList recipes={props.recipes} tiers={1} />
    </Fragment>
  );
};

export const getStaticProps = () => {
  // fetching data from API...
  const returnedRecipes = DUMMY_RECIPES;

  return {
    props: {
      recipes: returnedRecipes,
    },
    revalidate: 60,
  };
};

export default HomePage;
