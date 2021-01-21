import React from 'react';
import './App.css';
import {BrowsRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
function App() {
  return (
    <div className="App">
        <h3>Hello</h3>
        <Home/>
    </div>
  );
}

export default App;
