import { Map } from 'immutable';

const initialState: Map<string, any> = Map({
  homePageData: [],
});

function homePageReducer(state = initialState, action: any): Map<string, any> {
  switch (action.type) {
    default:
      return state;
  }
}

export default homePageReducer;
