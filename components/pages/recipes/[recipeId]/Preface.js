import { Fragment, useRef, useState, useEffect } from 'react';
import Subheading from '../../../ui/text/Subheading';

const Preface = props => {
  const prefaceRef = useRef();
  const [prefaceOverflows, setPrefaceOverflows] = useState(false);
  const [prefaceOverflowIsOpen, setPrefaceOverflowIsOpen] = useState(false);

  const prefaceClick = () => {
    if (!prefaceOverflows) return;

    setPrefaceOverflowIsOpen(!prefaceOverflowIsOpen);
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
            {props.tags.length && (
              <div className='flex flex-wrap gap-3 mt-2'>
                {props.tags.map(tag => (
                  <div key={tag.id} className='bg-slate-500 px-3 py-2 rounded-2xl'>
                    <span className='capitalize'>{tag.name.split(' ')[0]}</span>
                    {tag.name.split(' ').slice(1)[0] && (
                      <span>&#160;{tag.name.split(' ').slice(1).join(' ')}</span>
                    )}
                  </div>
                ))}
              </div>
            )}
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
