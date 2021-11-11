import Link from 'next/link';

const RecipeCard = props => {
  return (
    <Link href={`/recipes/${props.recipe.id}`}>
      <a>
        <div>{props.recipe.name}</div>
        <div>{props.recipe.photo}</div>
      </a>
    </Link>
  );
};

export default RecipeCard;
