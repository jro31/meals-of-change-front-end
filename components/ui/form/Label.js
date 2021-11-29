import { Fragment } from 'react';

const Label = props => {
  return (
    <Fragment>
      {props.htmlFor && props.children && <label htmlFor={props.htmlFor}>{props.children}</label>}
    </Fragment>
  );
};

export default Label;
