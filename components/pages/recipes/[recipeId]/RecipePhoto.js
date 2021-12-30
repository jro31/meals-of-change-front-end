import Image from 'next/image';

const RecipePhoto = props => {
  return (
    <Image
      src={props.photo}
      alt={`${props.recipeName} photo`}
      layout='fill'
      objectFit='cover'
      objectPosition='50% 50%'
      className='rounded-t-2xl'
    />
  );
};

export default RecipePhoto;
