import { Fragment, useEffect, useRef, useState } from 'react';
import { isMobile } from 'react-device-detect';

import Pointer from '../Pointer';
import Title from '../text/Title';
import RecipeCard from './RecipeCard';

const HorizontalRecipeList = props => {
  const listContainerRef = useRef();
  const [isHovering, setIsHovering] = useState(false);

  const scrollLeftHandler = () => {
    listContainerRef.current.scrollLeft =
      listContainerRef.current.scrollLeft - window.innerWidth * 0.7;
  };

  const scrollRightHandler = () => {
    listContainerRef.current.scrollLeft =
      listContainerRef.current.scrollLeft + window.innerWidth * 0.7;
  };

  const onHover = () => {
    if (!isMobile) {
      setIsHovering(true);
    }
  };

  const onLeaveHover = () => {
    if (!isMobile) {
      setIsHovering(false);
    }
  };

  useEffect(() => {
    if (props.recipes[0]) listContainerRef.current.scrollLeft = 0;
  }, [props.title, props.recipes]);

  return (
    <Fragment>
      <div className='h-full relative flex flex-col'>
        {props.title && (
          <div className='pl-1/12 my-6 flex-initial'>
            <Title>{props.title}</Title>
          </div>
        )}
        {props.recipes[0] && (
          <div
            onMouseEnter={onHover}
            onMouseLeave={onLeaveHover}
            className={`relative flex ${
              props.page === 'homepage'
                ? 'h-full'
                : 'max-h-full-minus-88px sm:max-h-full-minus-96px'
            }`}
          >
            <Pointer
              onClick={scrollLeftHandler}
              direction='left'
              className={`left-0 ${isHovering ? 'block' : 'hidden'}`}
            />
            <Pointer
              onClick={scrollRightHandler}
              direction='right'
              className={`right-0 ${isHovering ? 'block' : 'hidden'}`}
            />
            <div
              className={`flex flex-col flex-wrap justify-center content-start overflow-x-scroll snap-mandatory snap-x scroll-smooth px-1/12 basis-full`}
              ref={listContainerRef}
            >
              {/* TODO - Only load recipes as a user scrolls (save loading too many unnecessary photos) */}
              {props.recipes.map(recipe => {
                return (
                  <div key={recipe.id} className={`snap-start scroll-ml-1/12-screen h-[375px]`}>
                    <RecipeCard recipe={recipe} />
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {!props.recipes[0] && (
          <div className='h-full flex pl-1/12 items-center'>
            <div className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-slate-800 font-mono tracking-tighter'>
              No recipes found
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default HorizontalRecipeList;
