import React from 'react';
import './App.scss';
import Nav from './components/Nav';
import Search from './components/Search';
import List from './components/List';
import Loading from './components/Loading';

const App = () => {
  return (
    <div className="flex-container">
      <Nav />
      <section className="apps-list">
        <Search />
        <Loading />
        <List />
      </section>
    </div>
  );
};

export default App;
