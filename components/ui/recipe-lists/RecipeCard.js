import Image from 'next/image';
import { useRouter } from 'next/router';

import StockPhoto from '../../../public/images/fork-large.jpg';
import RecipeAuthor from './RecipeAuthor';

const RecipeCard = props => {
  const router = useRouter();

  const cardClickHandler = event => {
    if (event.target.closest('.twitter-icon')) return;
    if (event.target.closest('.instagram-icon')) return;

    router.push(`/recipes/${props.recipe.id}`);
  };

  return (
    <div className={`h-full pt-0 pr-6 w-96 xl:w-108 max-w-screen-minus-40px`}>
      <div
        onClick={cardClickHandler}
        className={`flex flex-col h-full justify-center cursor-pointer ${props.className || ''}`}
      >
        <div className='h-3/4 relative border border-slate-200 rounded-2xl shadow-sm shadow-slate-200 max-h-[350px]'>
          <Image
            src={props.recipe.small_photo || StockPhoto}
            alt={`${props.recipe.name} photo`}
            layout='fill'
            objectFit='cover'
            objectPosition={props.recipe.small_photo ? '50% 50%' : '50% top'}
            className='rounded-2xl'
          />
        </div>
        <div className='flex flex-col h-1/4 pt-2'>
          <div className='text-lg font-light text-white'>{props.recipe.name}</div>
          <div className='flex w-full justify-between font-light'>
            <RecipeAuthor
              name={props.recipe.author}
              twitterHandle={props.recipe.author_twitter_handle}
              instagramUsername={props.recipe.author_instagram_username}
            />
            <div>{`${props.recipe.time_minutes} minutes`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
