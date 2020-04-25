import React, { useEffect, useState } from 'react';
import { getApps } from '../api/get';
import config from '../consts/config';
import { formatData } from '../ultils/helpers';

const List = () => {
  const [list, setList] = useState([]);
  const [pages, setPages] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [chunk, setChunk] = useState();
  
  useEffect(() => { 
    const loadData = async () => {
      const data = await getApps();
      const result = formatData(data)
      const [firstPage] = result;
      setChunk(result);
      setList(firstPage);
      setPages(Math.ceil(data.length / config.pages));
    }
    
    loadData(); 
  },[]);

  const handleCurrentPage = index => {
    setCurrentPage(index);
    setList(chunk[index - 1]);
  }

  return (
    <>
      <ul>
        {
          list.map((
            { name, id, description, categories, subscriptions }
          ) => (
            <li key={id}>
              <div className="app-item">
                <div className="box-info">
                  <div className="box-info--content">
                    <div className="description">
                      <h1>{name}</h1>
                      <p>{description}</p>
                    </div>
                    <div className="tags">
                      { categories.map(item => <span key={item}>{item} {'/'}</span>) }
                    </div>
                  </div>
                  <div className="box-info--footer">
                    <ul>
                      {
                        subscriptions.map(({name, price}) => 
                          <li key={name}>
                            <span>{name}</span>
                            <h3>
                              {price}<sup>€</sup>
                            </h3>
                          </li>
                        )
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          ))
        }
      </ul>

      <ul className="pagination">
        <li>
          <button onClick={() => { handleCurrentPage(currentPage - 1)}} disabled={currentPage === 1}>&lt;</button>
        </li>
        {
          pages && [...Array(pages)].map((item, index) => (
            <li 
              key={`${index}${item}`}
              className={currentPage === (index + 1) ? 'active' : ''}
              onClick={() => { handleCurrentPage(index)}}
            >
              <button>{++index}</button>
            </li>
          ))
        }
        <li>
          <button onClick={() => { handleCurrentPage(currentPage + 1)}} disabled={currentPage === pages}>&gt;</button>
        </li>
      </ul>
    </>
  )
};

export default List;
