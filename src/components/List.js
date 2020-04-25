import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';
import { getApps } from '../api/get';
import config from '../consts/config';
import { formatData } from '../ultils/helpers';

const List = () => {
  const [list, setList] = useState([]);
  const [pages, setPages] = useState()
  
  const loadData = async () => {
    const result = await getApps();
    setList(formatData(result));
    setPages(Math.ceil(result.length / config.pages))
  }

  useEffect(() => { loadData(); }, []);

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

      <Pagination pages={pages}/>
    </>
  )
};

export default List;
