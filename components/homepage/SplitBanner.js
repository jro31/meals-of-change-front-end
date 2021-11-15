import Flexbox from '../styles/Flexbox';
import classes from './SplitBanner.module.css';

const SplitBanner = () => {
  return (
    <Flexbox w100 className={classes['split-banner']}>
      <div className={classes['photo-container']}>
        <img
          src='https://cdn-images-1.medium.com/max/2000/1*35SqaAxnm1XnfeqmJJFgzg.jpeg'
          alt='Vegan food'
        ></img>
      </div>
      <Flexbox justifyCenter alignCenter w100 className={classes['title-container']}>
        <Flexbox column alignCenter w50>
          <h1>Meals of Change</h1>
          <h3>Plant-based recipes by you</h3>
        </Flexbox>
      </Flexbox>
    </Flexbox>
  );
};

export default SplitBanner;
