import { Fragment } from 'react';
import classes from './Label.module.css';

const Label = props => {
  return (
    <Fragment>
      {props.htmlFor && props.children && (
        <label className={classes.label} htmlFor={props.htmlFor}>
          {props.children}
        </label>
      )}
    </Fragment>
  );
};

export default Label;
