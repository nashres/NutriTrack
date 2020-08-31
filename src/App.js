import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Main from './components/main'
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div>
      <Header />
      <Main />
    </div>
    </Router>
  );
}

export default App;
