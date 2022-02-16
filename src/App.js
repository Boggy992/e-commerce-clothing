import React from 'react';
import { Route } from "react-router-dom";
import './App.css';

import HomePage from './pages/homepage/homepage.content';

const HatsPage = () => (
  <div>
    <h2>Hats</h2>
  </div>
);


function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage}></Route>
      <Route path='/hats' component={HatsPage}></Route>
    </div>
  );
}

export default App;
