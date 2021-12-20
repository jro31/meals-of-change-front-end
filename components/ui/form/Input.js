import { Fragment } from 'react';
import InputError from './InputError';
import Label from './Label';

const Input = props => {
  return (
    <Fragment>
      <Label htmlFor={props.id}>{props.label}</Label>
      <input
        type={props.type || 'text'}
        required={props.required || false}
        id={props.id || null}
        value={props.value}
        onChange={props.onChange || null}
        onBlur={props.onBlur || null}
        onKeyDown={props.onKeyDown || null}
        onKeyUp={props.onKeyUp || null}
        className={`border border-gray-500 p-2 text-lg ${props.className || ''}`} // Note that the placeholder can be styled with Tailwind
        placeholder={props.placeholder || null}
        checked={props.type === 'checkbox' ? props.checked : null}
      />
      <InputError showError={props.showError}>{props.errorMessage}</InputError>
    </Fragment>
  );
};

export default Input;
