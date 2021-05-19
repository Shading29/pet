import { Map } from 'immutable';
import { APP_FETCH_USERS, TypesAction } from './types';

const initialState: Map<string, any> = Map({
  users: [],
  isLoading: false,
});

function appReducer(state = initialState, action: TypesAction): Map<string, any> {
  switch (action.type) {
    case APP_FETCH_USERS: {
      return state.set('isLoading', true);
    }
    // case APP_FETCH_USERS_SUCCUSS: {
    //   return state.set('users', action.payload);
    // }
    default:
      return state;
  }
}

export default appReducer;
