import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';

import HomePage from './pages/homepage/homepage.content';
import ShopPage from './pages/shop-page/shop-page.content';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout-page/checkout-page.component';
import { Fragment } from 'react/cjs/react.production.min';

class App extends React.Component {
  render() {
    return (
      <Fragment>
          <Routes>
            <Route path='/' element={<Header />}>
              <Route index element={<HomePage />} />
              <Route path='/shop/*' element={<ShopPage />} />
              <Route path='/signin' element={<SignInAndSignUpPage />} />
              <Route path='/checkout' element={<CheckoutPage />} />
            </Route>
          </Routes>
      </Fragment>
    );
  }
}

export default App;
