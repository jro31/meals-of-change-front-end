import Image from 'next/image';
import StockPhoto from '../../../../public/images/fork-large.jpg';

const RecipePhoto = props => {
  return (
    <Image
      src={props.photo || StockPhoto}
      alt={`${props.recipeName} photo`}
      layout='fill'
      objectFit='cover'
      objectPosition={props.photo ? '50% 50%' : '50% top'}
      className='rounded-t-2xl'
    />
  );
};

export default RecipePhoto;
