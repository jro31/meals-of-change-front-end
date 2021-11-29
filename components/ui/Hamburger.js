const Hamburger = props => {
  return (
    <div onClick={props.onClick || null} className={`flex flex-col w-7 ${props.className || ''}`}>
      <span className='bg-gray-900 h-0.5 w-full my-1'></span>
      <span className='bg-gray-900 h-0.5 w-full my-1'></span>
      <span className='bg-gray-900 h-0.5 w-full my-1'></span>
    </div>
  );
};

export default Hamburger;
