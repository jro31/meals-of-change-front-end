import Image from 'next/image';
import StockPhoto from '../../../../public/images/fork-large.jpg';

const RecipePhoto = props => {
  return (
    // <Image
    //   src={props.photo || StockPhoto}
    //   alt={`${props.recipeName} photo`}
    //   layout='fill'
    //   objectFit='cover'
    //   objectPosition={props.photo ? '50% 50%' : '50% top'}
    //   className='rounded-t-2xl'
    // />
    <img
      src={props.photo || '/images/fork-large.jpg'}
      alt={`${props.recipeName} photo`}
      objectPosition={props.photo ? '50% 50%' : '50% top'}
      className={`w-full h-full object-cover rounded-t-2xl ${
        props.photo ? 'object-center' : 'object-top'
      }`}
    />
  );
};

export default RecipePhoto;
