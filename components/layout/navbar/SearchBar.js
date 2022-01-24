import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import searchIcon from '../../../public/icons/search.svg';

const SearchBar = () => {
  const router = useRouter();
  const [enteredSearchText, setEnteredSearchText] = useState('');

  const searchInputChangeHandler = event => {
    setEnteredSearchText(event.target.value);
  };

  const searchHandler = event => {
    event.preventDefault();

    if (enteredSearchText.length) {
      router.push(`/recipes?query=${enteredSearchText}`);
      setEnteredSearchText('');
    }
  };

  return (
    <form onSubmit={searchHandler} className='flex items-center h-10 w-full'>
      <input
        id='search-input'
        placeholder='Search recipes'
        className='rounded-l pl-2 py-2 bg-slate-800 border-slate-500 text-slate-500 border-l border-y h-full placeholder:text-slate-500 focus:outline-none w-full-minus-2.5rem'
        onChange={searchInputChangeHandler}
        value={enteredSearchText}
      />
      <div className='flex flex-col justify-center h-full w-10 bg-slate-500 rounded-r border-r border-y border-slate-800'>
        <button type='submit' className='relative basis-2/3'>
          {/* <Image src={searchIcon} alt='Search' layout='fill' /> */}
          <img src='/icons/search.svg' alt='Search' className='w-full h-2/3' />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
