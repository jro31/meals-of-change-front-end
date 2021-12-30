import { Fragment } from 'react';

import Preface from './Preface';
import Title from '../../../ui/text/Title';

const TitleAndPreface = props => {
  return (
    <Fragment>
      <div className='pt-4 pb-2 px-2 lg:pl-1/12 bg-gradient-to-b from-transparent to-slate-800 rounded-t-2xl'>
        <Title>{props.title}</Title>
      </div>
      <div className='pt-2 pb-4 px-2 lg:pl-1/12 bg-slate-800 -my-px'>
        <Preface preface={props.preface} />
      </div>
    </Fragment>
  );
};

export default TitleAndPreface;
