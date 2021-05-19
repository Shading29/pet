import { Map } from 'immutable';

const initialState: Map<string, any> = Map({
  loginPageData: [],
});

function loginPageReducer(state = initialState, action: any): Map<string, any> {
  switch (action.type) {
    default:
      return state;
  }
}

export default loginPageReducer;
