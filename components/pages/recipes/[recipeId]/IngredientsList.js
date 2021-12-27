import Heading from '../../../ui/text/Heading';

const IngredientsList = props => {
  return (
    <div className={`${props.className || ''} bg-white`}>
      <div className='px-2 pb-4'>
        <Heading className='font-bold'>Ingredients</Heading>
      </div>
      <div className='pb-2 lg:min-h-screen-minus-nav'>
        {props.ingredients.map((ingredient, index) => (
          <div
            key={ingredient.food}
            className={`flex items-center px-2 py-3 ${
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
