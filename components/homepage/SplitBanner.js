import Flexbox from '../styles/Flexbox';
import classes from './SplitBanner.module.css';

const SplitBanner = () => {
  return (
    <Flexbox className={classes['split-banner']}>
      <div className={classes['photo-container']}>
        <img
          src='https://cdn-images-1.medium.com/max/2000/1*35SqaAxnm1XnfeqmJJFgzg.jpeg'
          alt='Vegan food'
        ></img>
      </div>
      <div className={'title-container'}>Text</div>
    </Flexbox>
  );
};

export default SplitBanner;
