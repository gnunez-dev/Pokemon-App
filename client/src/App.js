import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import LandingPage from './components/LandingPage/LandingPage';
import Create from './components/Create/Create'
import DetailsPokemon from './components/DetailsPokemon/DetailsPokemon';

import './App.css';

function App() {
  return (
    <>
    <BrowserRouter basename="/">
      <Routes>
        <Route path={"/"} element={<Nav/>} />
        <Route exact path="/" element={<LandingPage/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/create" component={<Create/>} />
        <Route path="/pokemon/:id"  component={<DetailsPokemon/>}/>
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
