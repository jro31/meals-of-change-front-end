import Heading from '../../../ui/text/Heading';

const IngredientsList = props => {
  return (
    <div>
      <div className='px-2'>
        <Heading className='font-bold'>Ingredients</Heading>
      </div>
      <div className='pb-2'>
        {props.ingredients.map((ingredient, index) => (
          <div
            key={ingredient.food}
            className={`flex items-center px-2 py-2 ${
              index % 2 === 0 ? 'bg-gray-200' : 'bg-white'
            }`}
          >
            <div className='basis-1/3 grow-0 shrink-0 text-center text-sm font-light'>
              {ingredient.amount}
            </div>
            <div>
              <div>
                {ingredient.food}
                {ingredient.optional && (
                  <span className='text-xs font-extra-light'> (optional)</span>
                )}
              </div>
              <div className='text-xs font-extra-light'>{ingredient.preparation}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IngredientsList;
