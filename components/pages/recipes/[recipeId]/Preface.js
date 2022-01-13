import { Fragment, useRef, useState, useEffect } from 'react';
import Subheading from '../../../ui/text/Subheading';
import Bookmark from './Bookmark';
import TagsList from './TagsList';

const Preface = props => {
  const prefaceRef = useRef();
  const [prefaceOverflows, setPrefaceOverflows] = useState(false);
  const [prefaceOverflowIsOpen, setPrefaceOverflowIsOpen] = useState(false);

  const prefaceClick = event => {
    if (!prefaceOverflows) return;
    if (event.target.closest('#bookmark')) return;

    setPrefaceOverflowIsOpen(!prefaceOverflowIsOpen);
  };

  useEffect(() => {
    if (!props.preface && !props.tags) return;

    if (prefaceRef.current.scrollHeight > prefaceRef.current.offsetHeight) {
      setPrefaceOverflows(true);
    }
  }, [props.preface, props.tags]);

  return (
    <Fragment>
      {(props.preface || props.tags) && (
        <div
          className={`flex items-end ${prefaceOverflows ? 'cursor-pointer' : ''}`}
          onClick={prefaceClick}
        >
          <div
            className={`${
              prefaceOverflowIsOpen
                ? ''
                : `${props.preface ? 'h-8 sm:h-9' : 'h-10 sm:h-12'} overflow-hidden`
            } basis-11/12 grow shrink-0`}
            ref={prefaceRef}
          >
            {props.preface && <Subheading className='h-full'>{props.preface}</Subheading>}
            <div className='flex flex-wrap gap-1 sm:gap-3 mt-2'>
              <Bookmark recipeId={props.recipeId} />
              {props.tags[0] && <TagsList tagsArray={props.tags} />}
            </div>
          </div>
          {prefaceOverflows && !prefaceOverflowIsOpen && (
            <div className='basis-1/12 grow-0 shrink'>...</div>
          )}
        </div>
      )}
    </Fragment>
  );
};

export default Preface;
