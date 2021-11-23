import Flexbox from '../../styles/Flexbox';
import classes from './FormLine.module.css';

const FormLine = props => {
  return <Flexbox className={classes['form-line']}>{props.children}</Flexbox>;
};

export default FormLine;
