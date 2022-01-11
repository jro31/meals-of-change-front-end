import { Fragment, useRef, useState, useEffect } from 'react';
import Subheading from '../../../ui/text/Subheading';
import TagsList from './TagsList';

const Preface = props => {
  const prefaceRef = useRef();
  const [prefaceOverflows, setPrefaceOverflows] = useState(false);
  const [prefaceOverflowIsOpen, setPrefaceOverflowIsOpen] = useState(false);

  const prefaceClick = () => {
    if (!prefaceOverflows) return;

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
          {/* TODO - Fix this on mobile (the top of the second line of the preface overflows when closed) */}
          <div
            className={`${
              prefaceOverflowIsOpen ? '' : `${props.preface ? 'h-10' : 'h-12'} overflow-hidden`
            } basis-11/12 grow shrink-0`}
            ref={prefaceRef}
          >
            {props.preface && <Subheading className='h-full'>{props.preface}</Subheading>}
            {props.tags[0] && <TagsList tagsArray={props.tags} />}
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
