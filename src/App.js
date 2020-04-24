import React from 'react';
import './App.scss';
import Nav from './components/Nav';
import Search from './components/Search';
import Pagination from './components/Pagination';
import List from './components/List';

const App = () => {
  return (
    <div className="flex-container">
      <Nav />
      <section className="apps-list">
        <Search />
        <List />
        <Pagination />
      </section>
    </div>
  );
};

export default App;
