import Image from 'next/image';
import Link from 'next/link';

import StockPhoto from '../../../public/images/fork-large.jpg';

const RecipeCard = props => {
  return (
    <div className={`h-full pt-0 pr-6 w-96 xl:w-108 max-w-screen-minus-40px`}>
      <Link href={`/recipes/${props.recipe.id}`} passHref>
        <a>
          <div className={`flex flex-col h-full justify-center ${props.className || ''}`}>
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
