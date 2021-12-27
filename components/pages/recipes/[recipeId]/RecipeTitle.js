import Title from '../../../ui/text/Title';

const RecipeTitle = props => {
  return (
    <div className='text-white'>
      <Title>{props.title}</Title>
    </div>
  );
};

export default RecipeTitle;
