import Image from 'next/image';
import stockPhoto from '../../../../public/images/fork.jpg';

const RecipePhoto = props => {
  return (
    <Image
      src={props.photo || stockPhoto}
      alt={`${props.recipeName} photo`}
      layout='fill'
      objectFit='cover'
      objectPosition={props.photo ? '50% 50%' : '50% 25%'}
      className='rounded-t-2xl'
    />
  );
};

export default RecipePhoto;
