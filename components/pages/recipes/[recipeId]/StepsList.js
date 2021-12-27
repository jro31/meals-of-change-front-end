const StepsList = props => {
  const oddBackgroundColorClass = () => {
    switch (props.mode) {
      case 'light':
        return 'bg-gray-200';
      case 'dark':
        return 'bg-slate-800';
      default:
        return 'bg-gray-200';
    }
  };

  const evenBackgroundColorClass = () => {
    switch (props.mode) {
      case 'light':
        return 'bg-white';
      case 'dark':
        return 'bg-slate-500';
      default:
        return 'bg-white';
    }
  };

  return (
    <div className={`${props.className || ''}`}>
      {props.steps.map((step, index) => (
        <div
          key={step.position}
          className={`flex px-2 py-4 lg:pr-8 ${
            index % 2 === 0 ? oddBackgroundColorClass() : evenBackgroundColorClass()
          }`}
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
