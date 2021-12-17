import { Fragment } from 'react';
import FormLine from '../../../../../ui/form/FormLine';
import TagsInput from './TagsInput';

const tagTypes = ['dish-type', 'cuisine', 'other'];

const TagsInputSection = () => {
  return (
    <Fragment>
      {tagTypes.map(type => (
        <FormLine key={type}>
          <TagsInput type={type} />
        </FormLine>
      ))}
    </Fragment>
  );
};

export default TagsInputSection;
