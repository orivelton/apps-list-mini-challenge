import React from 'react';

const Pagination = ({currentPage, handleCurrentPage, pages}) => {
  return (
    <ul className="pagination">
      <li>
        <button onClick={() => { handleCurrentPage(currentPage - 1)}} disabled={currentPage === 1}>&lt;</button>
      </li>
      {
        pages && [...Array(pages)].map((item, index) => (
          <li 
            onClick={() => { handleCurrentPage(index) }}
            key={`${index}${item}`}
            className={currentPage === (index + 1) ? 'active' : ''}
          >
            <button>{++index}</button>
          </li>
        ))
      }
      <li>
        <button onClick={() => { handleCurrentPage(currentPage + 1)}} disabled={currentPage === pages}>&gt;</button>
      </li>
    </ul>
  )
};

export default Pagination;
