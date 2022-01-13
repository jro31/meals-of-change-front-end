import { Fragment } from 'react';
import Tag from './Tag';

const TagsList = props => {
  return (
    <Fragment>
      {props.tagsArray.map(tag => (
        <Tag key={tag} tagName={tag} />
      ))}
    </Fragment>
  );
};

export default TagsList;
