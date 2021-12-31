import Input from '../../../../ui/form/Input';

const PhotoInput = props => {
  const inputChangeHandler = event => {
    props.setChosenPhoto(event.target.files[0]);
    props.setChosenPhotoPreviewUrl(URL.createObjectURL(event.target.files[0]));
  };

  // TODO - Can this be updated to only accept photos?
  // See https://tailwindcss.com/docs/hover-focus-and-other-states#file-input-buttons for styling the file input
  return <Input id='photo' type='file' label='Photo' onChange={inputChangeHandler} />;
};

export default PhotoInput;
