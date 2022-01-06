const Tag = props => {
  return (
    <div
      className='bg-slate-500 px-2 sm:px-3 py-1 sm:py-2 rounded-lg sm:rounded-2xl'
      onClick={props.onClick || null}
    >
      <span className='capitalize'>{props.tagName.split(' ')[0]}</span>
      {props.tagName.split(' ').slice(1)[0] && (
        <span>&#160;{props.tagName.split(' ').slice(1).join(' ')}</span>
      )}
      {props.onClick && <span className='font-semibold'>&#160;x</span>}
    </div>
  );
};

export default Tag;
