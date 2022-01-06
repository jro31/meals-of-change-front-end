import useChecksum from './use-checksum';
import usePresignedUrl from './use-presigned-url';
import useResizeImage from './use-resize-image';

const usePhotoUploader = () => {
  const resizeImage = useResizeImage();
  const calculateChecksum = useChecksum();
  const getPresignedUrl = usePresignedUrl();

  const photoUploader = async photo => {
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
        // TODO - Add policies on S3 to limit file-type to jpeg, and file size

        const s3Response = await fetch(presignedUrl.direct_upload.url, s3Options);

        if (!s3Response.ok) {
          throw new Error('unable to upload photo');
        }
        blobSignedIdArray.push(presignedUrl.blob_signed_id);
      };

      const [smallPhoto, largePhoto] = await resizeImage(photo);
      await uploadPhoto(smallPhoto, 'small');
      await uploadPhoto(largePhoto, 'large');

      return blobSignedIdArray;
    }
    return [];
  };

  return photoUploader;
};

export default usePhotoUploader;
