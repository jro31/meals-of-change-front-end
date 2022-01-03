import { Fragment } from 'react';

const StepsList = props => {
  return (
    <div className={`${props.className || ''}`}>
      {props.steps.map((step, index) => (
        <Fragment key={index}>
          {step.instructions && (
            <div
              className={`flex px-2 py-4 lg:pr-8 text-lg ${
                index % 2 === 0 ? 'bg-slate-800' : 'bg-slate-500'
              }`}
            >
              <div className='basis-1/12 grow-0 shrink-0'>
                <div className='text-center font-bold'>{index + 1}</div>
              </div>
              <div>{step.instructions}</div>
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default StepsList;
