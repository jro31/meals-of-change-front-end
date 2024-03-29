import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';

import { registrationModalActions } from '../../../../store/registration-modal';

import BookmarkEmptyIcon from '../../../../public/icons/bookmark-empty.svg';
import BookmarkFullIcon from '../../../../public/icons/bookmark-full.svg';

const Bookmark = props => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.loginStatus.loggedInStatus === 'LOGGED_IN');
  const [bookmarkIsLoading, setBookmarkIsLoading] = useState(false);
  const [bookmarkId, setBookmarkId] = useState(null);

  const handleBookmarkClick = event => {
    event.preventDefault();

    if (isLoggedIn) {
      setBookmarkIsLoading(true);
      if (bookmarkId) {
        deleteBookmark();
      } else {
        addBookmark();
      }
    } else {
      dispatch(registrationModalActions.setModalTitle('You must login to bookmark a recipe'));
      dispatch(registrationModalActions.openModal());
    }
  };

  const addBookmark = async () => {
    try {
      const bookmarkOptions = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_recipe_bookmark: {
            recipe_id: props.recipeId,
          },
        }),
        credentials: 'include',
      };

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/user_recipe_bookmarks`,
        bookmarkOptions
      );

      if (response.status !== 201) {
        throw new Error('response status not :created');
      }

      const data = await response.json();

      setBookmarkId(data.user_recipe_bookmark.id);
    } catch (error) {
      console.log(error);
    }
    setBookmarkIsLoading(false);
  };

  const deleteBookmark = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/user_recipe_bookmarks/${bookmarkId}`,
        { method: 'DELETE', credentials: 'include' }
      );

      if (response.status !== 204) {
        throw new Error('response status not :no_content');
      }

      setBookmarkId(null);
    } catch (error) {
      console.log(error);
    }
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
    <button
      disabled={bookmarkIsLoading}
      onClick={handleBookmarkClick}
      className={`flex justify-center items-center w-12 h-10 bg-slate-500/50 rounded-md ${
        props.className || ''
      }`}
    >
      <div className='relative w-full h-8'>
        {/* <Image src={bookmarkId ? BookmarkFullIcon : BookmarkEmptyIcon} alt='' layout='fill' /> */}
        <img
          src={bookmarkId ? `/icons/bookmark-full.svg` : `/icons/bookmark-empty.svg`}
          alt=''
          className='w-full h-full'
        />
      </div>
    </button>
  );
};

export default Bookmark;
