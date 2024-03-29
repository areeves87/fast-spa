/**
 * Redux Store
 */
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers';
import RootSaga from '../sagas';
import { composeWithDevTools } from 'redux-devtools-extension';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

let appStore = null;

export function configureStore(initialState) {
  const store = createStore(
    reducers,
    initialState,
    compose(composeWithDevTools(applyMiddleware(...middlewares)))
  );

  appStore = store;

  sagaMiddleware.run(RootSaga);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers/index', () => {
      const nextRootReducer = require('../reducers/index');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

export function getStore() {
  return appStore;
}
