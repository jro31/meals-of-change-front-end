import Input from '../../../../ui/form/Input';

const PhotoInput = props => {
  const inputChangeHandler = event => {
    props.setChosenPhoto(event.target.files[0]);
    props.setChosenPhotoPreviewUrl(URL.createObjectURL(event.target.files[0]));
  };

  // TODO - Can this be updated to only accept photos?
  // See https://tailwindcss.com/docs/hover-focus-and-other-states#file-input-buttons for styling the file input
  return (
    <input
      id='photo'
      type='file'
      onChange={inputChangeHandler}
      className='w-full file:bg-gradient-to-r file:from-slate-400 file:to-slate-700 file:text-slate-200 file:rounded-full file:px-4 file:py-2 file:border-0 file:mr-4 file:font-semibold file:cursor-pointer hover:file:bg-slate-300'
    />
  );
};

export default PhotoInput;
