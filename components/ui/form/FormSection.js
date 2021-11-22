import FlexBox from '../../styles/Flexbox';
import classes from './FormSection.module.css';

const FormSection = props => {
  return <FlexBox className={classes['form-section']}>{props.children}</FlexBox>;
};

export default FormSection;
