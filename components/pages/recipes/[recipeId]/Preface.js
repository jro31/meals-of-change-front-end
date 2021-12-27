import { Fragment, useRef, useState, useEffect } from 'react';

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
        <div className='pt-2 flex'>
          <div
            className={`${
              prefaceOverflowIsOpen ? '' : 'h-6 overflow-hidden'
            } basis-11/12 grow shrink-0`}
            ref={prefaceRef}
            onClick={prefaceClick}
          >
            {props.preface}
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
