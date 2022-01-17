import Tag from './Tag';

const TagsList = props => {
  return (
    <div className='flex flex-wrap gap-1 sm:gap-3 mt-2'>
      {/* TODO - Each tag should link to the recipes index page for that tag */}
      {/* (not on the preview though) */}
      {props.tagsArray.map(tag => (
        <Tag key={tag} tagName={tag} />
      ))}
    </div>
  );
};

export default TagsList;
