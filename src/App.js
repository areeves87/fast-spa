import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import { history } from './history';
import { configureStore } from './store';
import './App.css';
import Dashboard from './pages/Dashboard';

const App = () => (
  <Provider store={configureStore()}>
    <Router history={history}>
      <Switch>
        <Route path="/" component={Dashboard} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
