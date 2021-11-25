import { Fragment } from 'react';
import classes from './InputError.module.css';

const InputError = props => {
  return (
    <Fragment>
      {props.showError && props.children && (
        <div className={classes['input-error']}>{props.children}</div>
      )}
    </Fragment>
  );
};

export default InputError;
