import Image from 'next/image';
import foodImage from '../../../public/images/temp-homepage-image.jpeg';
import Subheading from '../../ui/Subheading';
import Title from '../../ui/Title';

const SplitBanner = () => {
  return (
    <div className='flex flex-col md:flex-row w-full h-700px md:h-500px shadow-md'>
      <div className='flex-1 relative'>
        <Image src={foodImage} alt='Vegan food' layout='fill' className='object-cover -z-10' />
      </div>
      <div className='flex justify-center items-center flex-1 w-full'>
        <div className='flex flex-col items-center w-1/2'>
          <Title>Meals of Change</Title>
          <Subheading>Plant-based recipes by you</Subheading>
        </div>
      </div>
    </div>
  );
};

export default SplitBanner;
