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
        'base64' // Output type
      );
    });

  const resizeImage = async photo => {
    try {
      const thumbnailImage = await resizePhoto(photo, 250);
      const smallImage = await resizePhoto(photo, 450);
      const largeImage = await resizePhoto(photo, 1000);
      const fullSizeImage = await resizePhoto(photo, 2400);
      return [thumbnailImage, smallImage, largeImage, fullSizeImage];
    } catch (error) {
      // TODO - Handle this error
      console.log(error);
    }
  };

  return resizeImage;
};

export default useResizeImage;
