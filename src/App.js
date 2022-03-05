import React from 'react';
import { Route } from "react-router-dom";
import './App.css';

import HomePage from './pages/homepage/homepage.content';
import ShopPage from './pages/shop-page/shop-page.content';


function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage}></Route>
      <Route path='/shop' component={ShopPage}></Route>
    </div>
  );
}

export default App;
