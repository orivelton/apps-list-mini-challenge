import React from 'react';

const Search = ({valueSearch, handleSearchTerm, setIsCategories}) => {
  return (
    <header>
      <input 
        type="text" 
        placeholder="Search by App" 
        value={valueSearch} 
        onChange={({target: { value}}) => handleSearchTerm(value, true)}
      />
    </header>
  )
};

export default Search;
