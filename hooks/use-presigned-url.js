const usePresignedUrl = () => {
  const presignedUrl = async (file, byte_size, checksum) => {
    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        file: {
          filename: file.name,
          byte_size: byte_size,
          checksum: checksum,
          content_type: file.type,
          metadata: {
            message: 'resume for parsing',
          },
        },
      }),
      credentials: 'include',
    };

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/presigned_url`,
      options
    );
    if (!response.ok) {
      return response;
    }
    return await response.json();
  };
  return presignedUrl;
};

export default usePresignedUrl;
