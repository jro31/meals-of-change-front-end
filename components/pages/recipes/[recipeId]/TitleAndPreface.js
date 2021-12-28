import RecipeTitle from './RecipeTitle';
import Preface from './Preface';

const TitleAndPreface = props => {
  return (
    <div className='py-4 px-2 lg:pl-1/12 bg-slate-800 rounded-t-2xl'>
      <RecipeTitle title={props.title} />
      <Preface preface={props.preface} />
    </div>
  );
};

export default TitleAndPreface;
