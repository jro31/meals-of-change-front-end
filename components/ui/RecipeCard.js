import Image from 'next/image';
import Link from 'next/link';
import Subheading from './text/Subheading';

const RecipeCard = props => {
  return (
    <div className={`h-full pt-0 px-3 pb-4 w-108 max-w-screen-minus-padding`}>
      <Link href={`/recipes/${props.recipe.id}`} passHref>
        <a>
          <div className={`flex flex-col h-full shadow-md ${props.className || ''}`}>
            <div className='h-4/5 relative'>
              {props.recipe.small_photo && (
                <Image
                  src={props.recipe.small_photo}
                  alt={`${props.recipe.name} photo`}
                  layout='fill'
                  className='object-cover -z-10'
                />
              )}
            </div>
            <div className='flex flex-col justify-around h-1/5 py-1 px-2'>
              <Subheading>{props.recipe.name}</Subheading>
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
