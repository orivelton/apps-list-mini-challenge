import React from 'react';
import config from '../consts/config';
const { currency } = config;

const ListItem = ({
  name,
  description,
  categories,
  subscriptions,
  handleCategories
}) => (
  <li>
    <div className="app-item">
      <div className="box-info">
        <div className="box-info--content">
          <div className="description">
            <h1>{name}</h1>
            <p>{description}</p>
          </div>
          <div className="tags">
            { categories && categories.map((item, index) => 
                <span
                  onClick={() => {handleCategories(item)}}
                  key={item}
                >
                  {`${item} ${categories.length !== ++index ? '/ ' : ''}`}
                </span>
              )
            }
          </div>
        </div>
        <div className="box-info--footer">
          <ul>
            {
              subscriptions && subscriptions.map(({name, price}) => 
                <li key={name}>
                  <span>{name}</span>
                  <h3>
                    {price ? price : 'Free'}
                    <sup>{price ? currency : false}</sup>
                  </h3>
                </li>
              )
            }
          </ul>
        </div>
      </div>
    </div>
  </li>
);

export default ListItem;
