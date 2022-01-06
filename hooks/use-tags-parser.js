const useTagsParser = () => {
  const parseTags = tagsObject => [...new Set(Object.values(tagsObject).flat())];

  return parseTags;
};

export default useTagsParser;
