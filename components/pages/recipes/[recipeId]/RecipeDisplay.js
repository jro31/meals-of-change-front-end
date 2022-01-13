import Title from '../../../ui/text/Title';
import Bookmark from './Bookmark';
import IngredientsList from './IngredientsList';
import Preface from './Preface';
import RecipePhoto from './RecipePhoto';
import StepsList from './StepsList';

const RecipeDisplay = props => {
  return (
    <div
      className={`flex flex-col lg:flex-row xl:justify-center fixed top-14 inset-x-0 ${
        props.isPreview ? 'bottom-14 sm:bottom-16' : 'bottom-0'
      } -z-10 bg-black`}
    >
      <div className='flex xl:block flex-col basis-full lg:basis-2/3 xl:basis-8/12 2xl:basis-3/5 grow xl:grow-0 shrink xl:shrink-0 overflow-scroll border-x border-t border-slate-200 rounded-t-2xl'>
        <div
          className={`basis-2/3 sm:basis-3/4 md:basis-5/6 lg:basis-3/4 grow-0 shrink-0 sticky top-0 -z-50 ${
            props.isPreview ? 'xl:h-screen-minus-nav-minus-4rem' : 'xl:h-screen-minus-nav'
          }`}
        >
          <RecipePhoto recipeName={props.name} photo={props.photo} />
        </div>
        <div className='basis-1/3 sm:basis-1/4 md:basis-1/6 lg:basis-1/4 grow shrink -mt-36 xl:flex xl:justify-center xl:min-h-screen-minus-nav-minus-13rem xl:mx-px'>
          <div className='rounded-2xl basis-full'>
            <div className='flex items-end pt-4 pb-2 px-2 lg:pl-1/12 bg-gradient-to-b from-transparent to-slate-800 rounded-t-2xl'>
              <Title className='basis-11/12'>{props.name}</Title>
              {!props.isPreview && <Bookmark recipeId={props.recipeId} />}
            </div>
            <div className='pt-2 pb-4 px-2 lg:pl-1/12 bg-slate-800 -my-px'>
              <Preface preface={props.preface} tags={props.tags} />
            </div>
            <div className='bg-slate-800 min-h-screen-minus-nav xl:min-h-0 xl:h-full'>
              <IngredientsList
                className='lg:hidden'
                ingredients={props.ingredients}
                cookingTime={props.cookingTime}
              />
              <StepsList steps={props.steps} />
            </div>
          </div>
        </div>
      </div>
      <div className='hidden lg:block basis-1/3 xl:basis-3/12 2xl:basis-1/5 grow-0 shrink-0 overflow-scroll'>
        <IngredientsList ingredients={props.ingredients} cookingTime={props.cookingTime} />
      </div>
    </div>
  );
};

export default RecipeDisplay;
