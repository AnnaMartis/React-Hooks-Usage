import { useRef, useLayoutEffect } from 'react';

const Search = () => {

  const searchRef = useRef<HTMLInputElement>(null);
    
  useLayoutEffect(() => {
    if (searchRef.current) {
      searchRef.current.value = "test"
    };
  });

  return (
    <div className='SearchBar'>
      <input type="text" id='search' ref ={searchRef}/>
      <label htmlFor='search'>Search Title</label>
    </div>
  );
};

export default Search;