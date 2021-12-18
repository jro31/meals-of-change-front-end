import FormLine from '../../../../ui/form/FormLine';
import Input from '../../../../ui/form/Input';
import InputContainer from '../../../../ui/form/InputContainer';

const PhotoInput = props => {
  const inputChangeHandler = event => {
    props.setChosenPhoto(event.target.files[0]);
    props.setChosenPhotoPreviewUrl(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <FormLine>
      <InputContainer>
        {/* TODO - Can this be updated to only accept photos? */}
        {/* See https://tailwindcss.com/docs/hover-focus-and-other-states#file-input-buttons for styling the file input */}
        <Input id='photo' type='file' label='Photo' onChange={inputChangeHandler} />
      </InputContainer>
    </FormLine>
  );
};

export default PhotoInput;
