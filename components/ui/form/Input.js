import { Fragment } from 'react';
import InputError from './InputError';
import Label from './Label';

const Input = props => {
  return (
    <Fragment>
      {props.label && <Label htmlFor={props.id}>{props.label}</Label>}
      <input
        type={props.type || 'text'}
        required={props.required || false}
        id={props.id || null}
        value={props.value}
        onChange={props.onChange || null}
        onBlur={props.onBlur || null}
        onKeyDown={props.onKeyDown || null}
        onKeyUp={props.onKeyUp || null}
        className={`border border-slate-300 bg-slate-100 p-2 text-lg rounded-lg placeholder:text-slate-300 focus:outline-1 focus:outline-slate-400 ${
          props.className || ''
        }`}
        placeholder={props.placeholder || null}
        checked={props.type === 'checkbox' ? props.checked : null}
      />
      <InputError showError={props.showError}>{props.errorMessage}</InputError>
    </Fragment>
  );
};

export default Input;
