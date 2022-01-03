const Tag = props => {
  return (
    <div className='bg-slate-500 px-3 py-2 rounded-2xl'>
      <span className='capitalize'>{props.tagName.split(' ')[0]}</span>
      {props.tagName.split(' ').slice(1)[0] && (
        <span>&#160;{props.tagName.split(' ').slice(1).join(' ')}</span>
      )}
    </div>
  );
};

export default Tag;
