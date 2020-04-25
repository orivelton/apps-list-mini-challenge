import React from 'react';

const Pagination = ({pages}) => {
  return (
    <ul className="pagination">
      <li>
        <button>&lt;</button>
      </li>
      {console.log(pages)}
      {
        pages && [...Array(pages)].map((item, index) => {
          return (
            <li key={`${index}${item}`} onClick={() => console.log(index)} className="active"><button>{++index}</button></li>
          )
        })
      }
      
      {/* <li ><a href="/">2</a></li> */}
      <li>
        <button>&gt;</button>
      </li>
    </ul>
  )
};

export default Pagination;
