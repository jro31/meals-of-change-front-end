import { Fragment } from 'react';
import classes from './Input.module.css';

const Input = props => {
  return (
    <Fragment>
      {props.label && (
        <label className={classes.label} htmlFor={props.id || null}>
          {props.label}
        </label>
      )}
      <input
        type={props.type || 'text'}
        required={props.required || false}
        id={props.id || null}
        value={props.value}
        onChange={props.onChange || null}
        onBlur={props.onBlur || null}
        className={classes.input}
      />
      {props.showError && <div className={classes['error-message']}>{props.errorMessage}</div>}
    </Fragment>
  );
};

export default Input;
