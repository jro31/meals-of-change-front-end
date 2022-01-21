import Image from 'next/image';
import Link from 'next/link';

import TwitterIcon from '../../../public/icons/twitter.svg';
import InstagramIcon from '../../../public/icons/instagram.svg';

const RecipeAuthor = props => {
  return (
    <div className='flex justify-start gap-2.5 flex-wrap'>
      {props.authorId && (
        <Link href={`/recipes?user_id=${props.authorId}`}>
          <a>
            <div>By {props.name}</div>
          </a>
        </Link>
      )}
      {!props.authorId && <div>By {props.name}</div>}
      {(props.twitterHandle || props.instagramUsername) && (
        <div className='flex justify-start gap-2.5'>
          {props.twitterHandle && (
            <a
              href={`https://twitter.com/${props.twitterHandle}`}
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
          {props.instagramUsername && (
            <a
              href={`https://www.instagram.com/${props.instagramUsername}`}
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
      )}
    </div>
  );
};

export default RecipeAuthor;
