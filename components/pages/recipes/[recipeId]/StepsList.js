const StepsList = props => {
  return (
    <div className={`${props.className || ''}`}>
      {props.steps.map((step, index) => (
        <div
          key={step.position}
          className={`flex px-2 py-4 lg:pr-8 ${index % 2 === 0 ? 'bg-slate-800' : 'bg-slate-500'}`}
        >
          <div className='basis-1/12 grow-0 shrink-0'>
            <div className='text-center font-bold'>{step.position}</div>
          </div>
          <div>{step.instructions}</div>
        </div>
      ))}
    </div>
  );
};

export default StepsList;
