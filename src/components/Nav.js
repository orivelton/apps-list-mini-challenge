import React, { useState, useEffect } from 'react';

const Nav = ({initialState, handleCategories, categoriesActive}) => {
  const [categories, setCategories] = useState([]);
  const [active, setActive] = useState(categoriesActive);

  useEffect(() => {
    setCategories([...new Set(initialState.map(({categories}) => categories).flat())]);
  }, [initialState]);

  useEffect(() => {
    setActive(categoriesActive)
  },[categoriesActive]);


  const handleClick = item => {
    setActive(item);
    handleCategories(item);
  }

  return (
    <nav className="nav-categories">
      <h2>Categories</h2>
      <ul className="nav-menu">
        {
          categories.length > 0 && categories.map(item => (
            <li key={item} >
              <button
                className={active === item ? 'active' : ''}
                onClick={() => handleClick(item)}>
                {item}
              </button>
            </li>
          ))
        }
      </ul>
    </nav>
  );
};

export default Nav;
