import Flexbox from '../../styles/Flexbox';

const InputContainer = props => {
  return (
    <Flexbox column w100>
      {props.children}
    </Flexbox>
  );
};

export default InputContainer;
