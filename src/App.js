import React from 'react';
import './App.scss';
import Nav from './components/Nav';
import List from './components/List';

const App = () => {
  return (
    <div className="flex-container">
      <Nav />
      <section className="apps-list">
        <List />
      </section>
    </div>
  );
};

export default App;
