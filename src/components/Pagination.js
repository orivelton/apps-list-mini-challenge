import React from 'react';

const Pagination = ({pages}) => {
  return (
    <ul className="pagination">
      <li>
        <button>&lt;</button>
      </li>
      {
        pages && [...Array(pages)].map((item, index) => {
          return (
            <li key={`${index}${item}`} onClick={() => console.log(index)} className="active"><button>{++index}</button></li>
          )
        })
      }
      <li>
        <button>&gt;</button>
      </li>
    </ul>
  )
};

export default Pagination;
