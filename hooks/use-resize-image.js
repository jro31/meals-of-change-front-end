import Resizer from 'react-image-file-resizer';

const useResizeImage = () => {
  const resizePhoto = (photo, maxWidth) =>
    new Promise(resolve => {
      Resizer.imageFileResizer(
        photo,
        maxWidth, // maxWidth of the new image
        maxWidth * 2, // maxHeight of the new image
        'JPEG', // Format of the new image
        100, // Quality of the new image
        0, // Rotation
        uri => {
          resolve(uri);
        },
        'file' // Output type
      );
    });

  const resizeImage = async photo => {
    try {
      const smallPhoto = await resizePhoto(photo, 450);
      const largePhoto = await resizePhoto(photo, 1200);
      return [smallPhoto, largePhoto];
    } catch (error) {
      // TODO - Handle this error
      console.log(error);
    }
  };

  return resizeImage;
};

export default useResizeImage;
