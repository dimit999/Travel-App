import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Authorization from './components/authorization/Authorization';
import Home from './components/home/Home';
import { dateDefaultAction, defaultFlightRequestAction } from './redux/actions';

const App = ({ isAuth, defaultFlightRequestAction, dateDefaultAction }) => {
  useEffect(() => {
    const date = new Date().toISOString().substring(0, 7);
    defaultFlightRequestAction();
    dateDefaultAction(date);
  }, []);

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
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.authReducer.auth,
});

const mapDispatchToProps = {
  defaultFlightRequestAction,
  dateDefaultAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
