import Link from 'next/link';

import InstagramIcon from '../icons/InstagramIcon';
import TwitterIcon from '../icons/TwitterIcon';

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
              <TwitterIcon size='6' />
            </a>
          )}
          {props.instagramUsername && (
            <a
              href={`https://www.instagram.com/${props.instagramUsername}`}
              target='_blank'
              rel='noreferrer'
              className='instagram-icon'
            >
              <InstagramIcon size='6' />
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default RecipeAuthor;
