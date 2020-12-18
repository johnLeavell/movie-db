import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import SearchForm from './components/SearchForm';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Home/>
      <SearchForm/>
    </Router>

  );
}

export default App;
