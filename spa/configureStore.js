import { createStore, applyMiddleware, compose } from 'redux';
import createReducer from './redux/createReducer';
import { Map } from 'immutable';
import { routerMiddleware } from 'connected-react-router/immutable';
import createSagaMiddleware from 'redux-saga';
import history from './redux/history';

const initializeStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers =
    // eslint-disable-next-line no-undef
    process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true })
      : compose;

  const store = createStore(
    createReducer(),
    Map(),
    composeEnhancers(applyMiddleware(sagaMiddleware, routerMiddleware(history))),
  );

  store.runSaga = sagaMiddleware.run;
  store.injectedReducers = {}; // Reducer registry
  store.injectedSagas = {}; // Saga registry

  // Make reducers hot reloadable, see http://mxs.is/googmo
  // eslint-disable-next-line no-undef
  if (module.hot) {
    // eslint-disable-next-line no-undef
    module.hot.accept('./redux/createReducer', () => {
      store.replaceReducer(createReducer(store.injectedReducers));
    });
  }

  return store;
};

export default initializeStore;
