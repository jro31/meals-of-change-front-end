import { Fragment } from 'react';

const Checkbox = props => {
  return (
    <Fragment>
      <input
        type='checkbox'
        id={props.id || null}
        checked={props.checked}
        onChange={props.onChange}
        className='rounded border-slate-500 text-slate-500 focus:ring-0 focus:ring-offset-0 bg-slate-500'
      />
      {props.label && props.id && (
        <label htmlFor={props.id} className='ml-1'>
          {props.label}
        </label>
      )}
    </Fragment>
  );
};

export default Checkbox;
