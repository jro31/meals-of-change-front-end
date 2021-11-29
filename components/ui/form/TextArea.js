import { Fragment } from 'react';
import InputError from './InputError';
import Label from './Label';

const TextArea = props => {
  return (
    <Fragment>
      <Label htmlFor={props.id}>{props.label}</Label>
      <textarea
        required={props.required || false}
        id={props.id || null}
        value={props.value}
        onChange={props.onChange || null}
        onBlur={props.onBlur || null}
        className={`${props.className || ''}`}
        placeholder={props.placeholder || null}
      />
      <InputError showError={props.showError}>{props.errorMessage}</InputError>
    </Fragment>
  );
};

export default TextArea;
