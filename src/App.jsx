import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Authorization from './components/authorization/Authorization';
import Home from './components/home/Home';
import Registration from './components/registration/Registration';

const App = ({ isAuth }) => {
  const RouteHome = () => {
    if (isAuth) {
      return <Home />;
    }
    return <Redirect to="/login" />;
  };

  const RouteLogin = () => {
    if (isAuth) {
      return <Redirect to="/" />;
    }
    return <Authorization />;
  };

  return (
    <BrowserRouter basename="#">
      <Switch>
        <Route exact path="/">
          <RouteHome />
        </Route>
        <Route push path="/login">
          <RouteLogin />
        </Route>
        <Route push path="/registration">
          <Registration />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.authReducer.auth,
});

export default connect(mapStateToProps, null)(App);
