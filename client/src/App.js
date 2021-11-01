import React from 'react';
import { Route } from "react-router-dom";
import Home from './components/Home/Home';
import LandingPage from './components/LandingPage/LandingPage';
import Create from './components/Create/Create'

import './App.css';

function App() {
  return (

    <React.Fragment>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/create" component={Create} />
    </React.Fragment>

  );
}

export default App;
