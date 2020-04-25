import React from 'react';
import './App.scss';
import Nav from './components/Nav';
import List from './components/List';
import Loading from './components/Loading';

const App = () => {
  return (
    <div className="flex-container">
      <Nav />
      <section className="apps-list">
        <Loading />
        <List />
      </section>
    </div>
  );
};

export default App;
