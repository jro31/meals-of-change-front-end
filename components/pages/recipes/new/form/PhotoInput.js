import { Fragment } from 'react';

const PhotoInput = props => {
  const inputChangeHandler = event => {
    props.setChosenPhoto(event.target.files[0]);
    props.setChosenPhotoPreviewUrl(URL.createObjectURL(event.target.files[0]));
  };

  // TODO - Can this be updated to only accept photos?
  return (
    <Fragment>
      <input id='photo' type='file' onChange={inputChangeHandler} className='hidden' />
      <label
        htmlFor='photo'
        className='bg-gradient-to-r from-slate-400 to-slate-700 text-slate-200 rounded-full px-4 py-3 border-0 font-semibold hover:bg-slate-300 cursor-pointer'
      >
        {props.chosenPhoto ? 'Change photo' : 'Choose photo'}
      </label>
    </Fragment>
  );
};

export default PhotoInput;
