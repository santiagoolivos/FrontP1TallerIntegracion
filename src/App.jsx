import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import './App.css';

import NavbarFrontend from './components/NavbarFrontend';

function App() {
  return (
    
    <Router>
      <NavbarFrontend/>
      <Routes />
    </Router>
  );
}

export default App;
