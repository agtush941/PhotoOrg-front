import React from 'react';

import './App.css';

import Navbarcon from './component/Navbar/Navbarcon';
import { Outlet } from "react-router-dom";


function App() {
  return (
    <div className="App">

      <Navbarcon/>
      <Outlet/>
      
      
      
      
    </div>
  );
}

export default App;