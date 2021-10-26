import React from 'react';
import { Route } from "react-router-dom";
import Home from './components/Home';
import Nav from './components/Nav';

import './App.css';

function App() {
  return (

    <React.Fragment>
      <Nav />
      <Route exact path="/home" component={Home} />
    </React.Fragment>

  );
}

export default App;
