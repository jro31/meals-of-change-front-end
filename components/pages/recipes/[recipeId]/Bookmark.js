import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';

import BookmarkEmptyIcon from '../../../../public/icons/bookmark-empty.svg';
import BookmarkFullIcon from '../../../../public/icons/bookmark-full.svg';

const Bookmark = props => {
  const isLoggedIn = useSelector(state => state.loginStatus.loggedInStatus === 'LOGGED_IN');
  const [bookmarkIsLoading, setBookmarkIsLoading] = useState(false);
  const [bookmarkId, setBookmarkId] = useState(null);

  const addBookmark = () => {
    setBookmarkIsLoading(true);
    // TODO
    setBookmarkIsLoading(false);
  };

  const deleteBookmark = () => {
    setBookmarkIsLoading(true);
    // TODO
    setBookmarkIsLoading(false);
  };

  const fetchBookmarkId = useCallback(async () => {
    if (!isLoggedIn) return;
    setBookmarkIsLoading(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/bookmark_id?recipe_id=${props.recipeId}`,
        { credentials: 'include' }
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error_message || 'Unable to fetch bookmark ID');
      }

      setBookmarkId(data.bookmark_id);
    } catch (error) {
      console.log(error);
    }
    setBookmarkIsLoading(false);
  }, [isLoggedIn, props.recipeId]);

  useEffect(() => {
    fetchBookmarkId();
  }, [fetchBookmarkId, isLoggedIn]);

  return (
    <div
      className={`flex justify-center items-center w-10 h-10 rounded-full bg-slate-500 ${
        props.className || ''
      }`}
    >
      <button disabled={bookmarkIsLoading} className='relative w-7 h-7'>
        <Image
          src={bookmarkId ? BookmarkFullIcon : BookmarkEmptyIcon}
          alt=''
          layout='fill'
          className='fill-white stroke-white'
        />
      </button>
    </div>
  );
};

export default Bookmark;
