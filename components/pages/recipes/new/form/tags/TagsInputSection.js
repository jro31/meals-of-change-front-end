import { Fragment } from 'react';
import FormLine from '../../../../../ui/form/FormLine';
import TagsInput from './TagsInput';

const TagsInputSection = () => {
  return (
    <Fragment>
      <FormLine>
        <TagsInput type='dish-type' />
      </FormLine>
      <FormLine>
        <TagsInput type='cuisine' />
      </FormLine>
      <FormLine>
        <TagsInput type='other' />
      </FormLine>
    </Fragment>
  );
};

export default TagsInputSection;
