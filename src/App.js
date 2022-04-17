import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';

import HomePage from './pages/homepage/homepage.content';
import ShopPage from './pages/shop-page/shop-page.content';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';
import { Fragment } from 'react/cjs/react.production.min';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <Fragment>
          <Routes>
            <Route path='/' element={ <Header currentUser={this.state.currentUser} /> }>
              <Route index element={<HomePage />} />
              <Route path='/shop' element={<ShopPage />} />
              <Route path='/signin' element={<SignInAndSignUpPage />} />
            </Route>
          </Routes>
      </Fragment>
    );
  }
}

export default App;
