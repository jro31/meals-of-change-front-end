import CryptoJS from 'crypto-js';

const useChecksum = () => {
  const md5FromFile = file => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = fileEvent => {
        const binary = CryptoJS.lib.WordArray.create(fileEvent.target.result);
        const md5 = CryptoJS.MD5(binary);
        resolve(md5);
      };
      reader.onerror = () => {
        reject('Something went wrong with the file reader');
      };
      reader.readAsArrayBuffer(file);
    });
  };

  const checksum = async file => {
    const md5 = await md5FromFile(file);
    return md5.toString(CryptoJS.enc.Base64);
  };
  return checksum;
};

export default useChecksum;
