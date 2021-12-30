import Image from 'next/image';
import Link from 'next/link';

const RecipeCard = props => {
  return (
    <div className={`h-full pt-0 pr-6 pb-4 w-96 xl:w-108 max-w-screen-minus-40px`}>
      <Link href={`/recipes/${props.recipe.id}`} passHref>
        <a>
          <div className={`flex flex-col h-full ${props.className || ''}`}>
            <div className='h-4/5 relative border border-slate-200 rounded-2xl shadow-sm shadow-slate-200'>
              {props.recipe.small_photo && (
                <Image
                  src={props.recipe.small_photo}
                  alt={`${props.recipe.name} photo`}
                  layout='fill'
                  className='object-cover rounded-2xl'
                />
              )}
            </div>
            <div className='flex flex-col justify-around h-1/5 pt-2'>
              <div className='text-2xl font-light text-white'>{props.recipe.name}</div>
              <div className='flex w-full justify-between font-light'>
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
