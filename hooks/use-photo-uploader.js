import useChecksum from './use-checksum';
import usePresignedUrl from './use-presigned-url';
import useResizeImage from './use-resize-image';

const usePhotoUploader = () => {
  const resizeImage = useResizeImage();
  const calculateChecksum = useChecksum();
  const getPresignedUrl = usePresignedUrl();

  const photoUploader = async photo => {
    // TODO - Add check that 'photo' is a photo - If not throw an error
    // TODO - Test that it works with non-jpg photos (at least test with png)

    if (photo) {
      let checksum = null;
      let presignedUrl = null;
      let blobSignedIdArray = [];

      const uploadPhoto = async (photo, imageSize) => {
        checksum = await calculateChecksum(photo);
        presignedUrl = await getPresignedUrl(photo, photo.size, checksum, imageSize);

        const s3Options = {
          method: 'PUT',
          headers: presignedUrl.direct_upload.headers,
          body: photo,
        };

        const s3Response = await fetch(presignedUrl.direct_upload.url, s3Options);

        if (!s3Response.ok) {
          console.log('🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮');
          console.log(response);
          // TODO - Throw error
        }
        blobSignedIdArray.push(presignedUrl.blob_signed_id);
      };

      const [thumnailPhoto, smallPhoto, largePhoto, fullSizePhoto] = await resizeImage(photo);
      await uploadPhoto(thumnailPhoto, 'thumbnail');
      await uploadPhoto(smallPhoto, 'small');
      await uploadPhoto(largePhoto, 'large');
      await uploadPhoto(fullSizePhoto, 'full_size');

      return blobSignedIdArray;
    }
    return [];
  };

  return photoUploader;
};

export default usePhotoUploader;
