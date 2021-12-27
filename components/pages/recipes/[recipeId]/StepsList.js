const StepsList = props => {
  return (
    <div className='pt-2'>
      {props.steps.map((step, index) => (
        <div
          key={step.position}
          className={`flex px-2 py-4 ${index % 2 === 0 ? 'bg-gray-200' : 'bg-white'}`}
        >
          <div className='basis-1/12 grow-0 shrink-0'>
            <div>{step.position}</div>
          </div>
          <div>{step.instructions}</div>
        </div>
      ))}
    </div>
  );
};

export default StepsList;
