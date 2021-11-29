const ContentContainer = props => {
  return (
    <div className='w-full h-full bg-gray-100 min-h-screen-minus-nav sm:px-14 xl:px-96'>
      {props.children}
    </div>
  );
};

export default ContentContainer;
