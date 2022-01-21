import { Fragment } from 'react';
import Image from 'next/image';

import useShareModal from '../../../../hooks/use-share-modal';
import useTextAsUrl from '../../../../hooks/use-text-as-url';
import ShareIcon from '../../../../public/icons/share.svg';

const Share = props => {
  const toggleShareModalHandler = useShareModal();
  const textAsUrl = useTextAsUrl();

  return (
    <Fragment>
      <div
        onClick={() =>
          toggleShareModalHandler(
            props.title,
            textAsUrl(props.tweetText),
            props.hashtags,
            textAsUrl(props.whatsAppText),
            props.mailToSubject,
            props.mailToBody
          )
        }
        className='flex justify-center items-center w-12 h-10 bg-slate-500/50 rounded-md cursor-pointer'
      >
        <div className='relative w-5/12 h-8'>
          <Image src={ShareIcon} alt='' layout='fill' />
        </div>
      </div>
    </Fragment>
  );
};

export default Share;
