import Tag from './Tag';

const TagsList = props => {
  return (
    <div className='flex flex-wrap gap-1 sm:gap-3 mt-2'>
      {props.tagsArray.map(tag => (
        <Tag key={tag} tagName={tag} />
      ))}
    </div>
  );
};

export default TagsList;
