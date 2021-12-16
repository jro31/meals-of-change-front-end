import Link from 'next/link';

const RecipeCard = props => {
  return (
    <div className={`h-full pt-0 px-3 pb-4 w-108 max-w-screen-minus-padding`}>
      <Link href={`/recipes/${props.recipe.id}`} passHref>
        <a>
          <div className={`flex flex-col h-full shadow-md ${props.className || ''}`}>
            <div className='h-4/5'>
              {/* TODO - Update this to use 'image' */}
              {/* TODO - Handle no photo existing */}
              <img src={props.recipe.photo} className='h-full w-full object-cover' />
            </div>
            <div className='flex flex-col justify-around h-1/5 py-1 px-2'>
              <h3>{props.recipe.name}</h3>
              <div className='flex w-full justify-between'>
                <div>By {props.recipe.author}</div>
                <div>{`${props.recipe.time_minutes} minutes`}</div>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default RecipeCard;
