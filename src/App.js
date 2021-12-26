import React from 'react';
import Lists from './Lists/lists';
import Tabs from './Tabs/tabs';
import { Outlet, Link } from "react-router-dom";
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div>
            <Link to="/">
              <Tabs />
              <Lists />
            </Link>  |{" "}            
        </div>
      </header>
    </div>
  );
}

export default App;
