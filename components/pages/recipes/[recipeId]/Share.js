import { Fragment } from 'react';
import Image from 'next/image';

import useShowShareHandler from '../../../../hooks/use-show-share-handler';
import ShareIcon from '../../../../public/icons/share.svg';
import ShareModal from '../../../layout/ShareModal';

const Share = props => {
  const showShareHandler = useShowShareHandler();

  const textAsUrl = text => {
    return text ? text.replace(/ /g, '%20') : '';
  };

  return (
    <Fragment>
      <div
        onClick={showShareHandler}
        className='flex justify-center items-center w-12 h-10 bg-slate-500/50 rounded-md cursor-pointer'
      >
        <div className='relative w-5/12 h-8'>
          <Image src={ShareIcon} alt='' layout='fill' />
        </div>
      </div>
      <ShareModal
        title={props.title}
        twitterUrlText={textAsUrl(props.tweetText)}
        hashtags={props.hashtags}
        whatsAppUrlText={textAsUrl(props.whatsAppText)}
      />
    </Fragment>
  );
};

export default Share;
