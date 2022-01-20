import Image from 'next/image';
import { useRouter } from 'next/router';

import StockPhoto from '../../../public/images/fork-large.jpg';
import TwitterIcon from '../../../public/icons/twitter.svg';
import InstagramIcon from '../../../public/icons/instagram.svg';

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
            objectPosition={props.photo ? '50% 50%' : '50% top'}
            className='rounded-2xl'
          />
        </div>
        <div className='flex flex-col h-1/4 pt-2'>
          <div className='text-lg font-light text-white'>{props.recipe.name}</div>
          <div className='flex w-full justify-between font-light'>
            <div className='flex justify-start gap-2.5'>
              <div>By {props.recipe.author}</div>
              {props.recipe.author_twitter_handle && (
                <a
                  href={`https://twitter.com/${props.recipe.author_twitter_handle}`}
                  target='_blank'
                  rel='noreferrer'
                  className='twitter-icon'
                >
                  <div className='flex justify-center items-center h-6 w-6'>
                    <div className='relative w-full h-11/12'>
                      <Image src={TwitterIcon} alt='' layout='fill' />
                    </div>
                  </div>
                </a>
              )}
              {props.recipe.author_instagram_username && (
                <a
                  href={`https://www.instagram.com/${props.recipe.author_instagram_username}`}
                  target='_blank'
                  rel='noreferrer'
                  className='instagram-icon'
                >
                  <div className='flex justify-center items-center h-6 w-6'>
                    <div className='relative w-full h-full'>
                      <Image src={InstagramIcon} alt='' layout='fill' />
                    </div>
                  </div>
                </a>
              )}
            </div>
            <div>{`${props.recipe.time_minutes} minutes`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
