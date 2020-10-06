import React from 'react';
import { Switch } from 'react-router-dom';
import { PrivateRoute } from '../PrivateRoute/PrivateRoute';
import { Main } from '../Main/Main';
import { Login } from '../Login/Login';
import { Register } from '../Register/Register';
import { ContextualNavbar } from '../ContextualNavbar/ContextualNavbar';
import { router } from '../../router';
import { TransitionRoute } from '../TransitionRoute/TransitionRoute';

function App() {
  return (
    <>
      <ContextualNavbar />
      <Switch>
        <PrivateRoute exact path={router.customers}>
          <Main />
        </PrivateRoute>
        <TransitionRoute path={router.login}>
          <Login />
        </TransitionRoute>
        <TransitionRoute path={router.register}>
          <Register />
        </TransitionRoute>
      </Switch>
      <footer>

      </footer>
    </>
  );
}

export default App;
