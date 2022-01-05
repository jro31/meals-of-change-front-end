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

  const tagsArray = () => {
    return props.tags.map(tag => tag.name);
  };

  useEffect(() => {
    if (!props.preface) return;

    if (prefaceRef.current.scrollHeight > prefaceRef.current.offsetHeight) {
      setPrefaceOverflows(true);
    }
  }, [props.preface]);

  return (
    <Fragment>
      {props.preface && (
        <div
          className={`pt-2 flex items-end ${prefaceOverflows ? 'cursor-pointer' : ''}`}
          onClick={prefaceClick}
        >
          <div
            className={`${
              prefaceOverflowIsOpen ? '' : 'h-9 overflow-hidden'
            } basis-11/12 grow shrink-0`}
            ref={prefaceRef}
          >
            <Subheading className='h-full'>{props.preface}</Subheading>
            {tagsArray() && <TagsList tagsArray={tagsArray()} />}
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
