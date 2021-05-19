import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable';
import history from './history';
import appReducer from '../containers/App/reducer';

const createReducer = (injectedReducers = {}) => {
  const rootReducer = combineReducers({
    global: appReducer,
    ...injectedReducers,
  });

  return connectRouter(history)(rootReducer);
};

export default createReducer;
