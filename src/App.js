import React from 'react';
import { Route } from "react-router-dom";
import './App.css';

import HomePage from './pages/homepage/homepage.content';
import HatsPage from './pages/hats-page/hatspage.content';


function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage}></Route>
      <Route path='/hats' component={HatsPage}></Route>
    </div>
  );
}

export default App;
