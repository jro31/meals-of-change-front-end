import { Fragment } from 'react';
import TagsInput from './TagsInput';

const tagTypes = ['dish-type', 'cuisine', 'other'];

const TagsInputSection = () => {
  return (
    <Fragment>
      {tagTypes.map(type => (
        <div key={type}>
          <TagsInput type={type} />
        </div>
      ))}
    </Fragment>
  );
};

export default TagsInputSection;
