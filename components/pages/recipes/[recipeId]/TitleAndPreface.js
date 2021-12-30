import Preface from './Preface';
import Title from '../../../ui/text/Title';

const TitleAndPreface = props => {
  return (
    <div className='py-4 px-2 lg:pl-1/12 bg-gradient-to-b from-transparent to-slate-800 rounded-t-2xl'>
      <Title>{props.title}</Title>
      <Preface preface={props.preface} />
    </div>
  );
};

export default TitleAndPreface;
