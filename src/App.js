import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="flex-container">
      <nav className="nav-categories">
        <h2>Categories</h2>

        <ul className="nav-menu">
          <li className="active"><a href="#">Channels</a></li>
          <li><a href="#">Dialer</a></li>
          <li><a href="#">Optimization</a></li>
          <li><a href="#">Reporting</a></li>
          <li><a href="#">Voice Analytics</a></li>
        </ul>

      </nav>
      <section className="apps-list">
        <header>
          <input type="text" placeholder="Search by App" />>
        </header>
        <ul>
          <li>
            <div className="app-item">
              <div className="box-info">
                <div className="box-info--content">
                  <div className="description">
                    <h1>Voice Report</h1>
                    <p>Calls reporting and analytics of your calls.</p>
                  </div>
                  <div className="tags">
                    <span>Voice Analytics</span> / <span>Reporting</span> / <span>Optimization</span>
                  </div>
                </div>
                <div className="box-info--footer">
                  <ul>                    
                    <li><span>Trial</span> <h3>Free<sup></sup></h3></li>
                    <li><span>Professional</span> <h3>35.00<sup>€</sup></h3></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="app-item">
              <div className="box-info">
                <div className="box-info--content">
                  <div className="description">
                    <h1>Power Dialer</h1>
                    <p>Auto dialer that will help increase your connect rates and talk time.</p>
                  </div>
                  <div className="tags"><span>Dialer</span></div>
                </div>
                <div className="box-info--footer">
                  <ul>
                    <li><span>Trial</span> <h3>Free<sup></sup></h3></li>
                    <li><span>Professional</span> <h3>45.00<sup>€</sup></h3></li>
                    <li><span>Premium</span> <h3>60.00<sup>€</sup></h3></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="app-item">
              <div className="box-info">
                <div className="box-info--content">
                  <div className="description">
                    <h1>Smart Text</h1>
                    <p>Use SMS to help you communicate with your customers.</p>
                  </div>
                  <div className="tags"><span>Channels</span></div>
                </div>
                <div className="box-info--footer">
                  <ul>
                    <li><span>Trial</span> <h3>Free<sup></sup></h3></li>                   
                  </ul>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <ul className="pagination">
          <li><a href="#">&lt;</a></li>
          <li><a href="#">1</a></li>
          <li className="active"><a href="#">2</a></li>
          <li><a href="#">3</a></li>
          <li><a href="#">&gt;</a></li>
        </ul>
      </section>
    </div>
  );
}

export default App;
