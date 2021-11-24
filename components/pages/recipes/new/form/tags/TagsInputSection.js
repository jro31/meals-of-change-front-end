import { Fragment } from 'react';
import FormLine from '../../../../../ui/form/FormLine';
import Input from '../../../../../ui/form/Input';
import TagsInput from './TagsInput';

const TagsInputSection = () => {
  return (
    <Fragment>
      <FormLine>
        <TagsInput type='dish-type' />
      </FormLine>
    </Fragment>
  );
};

export default TagsInputSection;
