import { Fragment } from 'react';

const InputError = props => {
  return (
    <Fragment>
      {props.showError && props.children && <div className='text-red-500'>{props.children}</div>}
    </Fragment>
  );
};

export default InputError;
