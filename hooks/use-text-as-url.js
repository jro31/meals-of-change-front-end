const useTextAsUrl = () => {
  const textAsUrl = text => {
    return text ? text.replace(/ /g, '%20') : '';
  };

  return textAsUrl;
};

export default useTextAsUrl;
