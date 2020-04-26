import React from 'react'

const ListItem = ({
  name,
  description,
  categories,
  subscriptions,
  setSearchTerm,
  setIsCategories
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
            { categories && categories.map(item => <span onClick={() => { setSearchTerm(item); setIsCategories(true)}} key={item}>{item} {'/'}</span>) }
          </div>
        </div>
        <div className="box-info--footer">
          <ul>
            {
              subscriptions && subscriptions.map(({name, price}) => 
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
);

export default ListItem;
