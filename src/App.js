import React from 'react';
import './App.css';
import {BrowserRouter as Router ,Switch ,Route } from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
import Length from './Components/LengthComp/LengthComponent.jsx';
//import Temperature from './Components/TemperatureCompo/TempComponent.jsx';
import Volume from './Components/VolumeCompo/VolumeComponent.jsx';
import TempComponent from './Components/TemperatureCompo/TempComponent';

function App() {
  return (
    <div className="App">
        <h3>Hello</h3>
        <Router>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/Length" exact component={Length}></Route>
            <Route path="/Temperature" exact component={TempComponent}></Route>
            <Route path="/Volume" component={Volume}></Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
