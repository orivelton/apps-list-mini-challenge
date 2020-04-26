import React from 'react';

const Search = ({searchTerm, setSearchTerm, setIsCategories}) => {
  const handleChange = event  => {
    setSearchTerm(event.target.value);
    setIsCategories(false);
  };

  return (
    <header>
      <input type="text" placeholder="Search by App" value={searchTerm} onChange={handleChange} />
    </header>
  )
};

export default Search;
