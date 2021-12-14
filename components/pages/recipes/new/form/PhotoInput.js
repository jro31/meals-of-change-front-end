import FormLine from '../../../../ui/form/FormLine';
import Input from '../../../../ui/form/Input';
import InputContainer from '../../../../ui/form/InputContainer';

const PhotoInput = props => {
  const inputChangeHandler = event => {
    props.setChosenPhoto(event.target.files[0]);
  };

  return (
    <FormLine>
      <InputContainer>
        <Input id='photo' type='file' label='Photo' onChange={inputChangeHandler} />
      </InputContainer>
    </FormLine>
  );
};

export default PhotoInput;
