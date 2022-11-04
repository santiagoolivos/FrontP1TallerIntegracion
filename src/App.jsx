import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import './App.css';

import NavbarFrontend from './components/NavbarFrontend';

function App() {
  return (
    <div class="bg-light">
    <Router >
      <NavbarFrontend/>
      <Routes />
    </Router>
    </div>
  );
}

export default App;
