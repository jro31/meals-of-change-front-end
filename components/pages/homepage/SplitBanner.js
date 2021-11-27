const SplitBanner = () => {
  return (
    <div className='flex flex-col md:flex-row w-full h-700px md:h-500px shadow-md'>
      <div className='flex-1'>
        <img
          src='https://cdn-images-1.medium.com/max/2000/1*35SqaAxnm1XnfeqmJJFgzg.jpeg'
          alt='Vegan food'
          className='object-cover h-full w-full'
        />
      </div>
      <div className='flex justify-center items-center flex-1 w-full'>
        <div className='flex flex-col items-center w-1/2'>
          <h1>Meals of Change</h1>
          <h3>Plant-based recipes by you</h3>
        </div>
      </div>
    </div>
  );
};

export default SplitBanner;
