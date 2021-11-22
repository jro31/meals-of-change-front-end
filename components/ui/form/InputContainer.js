import Flexbox from '../../styles/Flexbox';
import classes from './InputContainer.module.css';

const InputContainer = props => {
  return (
    <Flexbox column w100 className={classes['input-container']}>
      {props.children}
    </Flexbox>
  );
};

export default InputContainer;
