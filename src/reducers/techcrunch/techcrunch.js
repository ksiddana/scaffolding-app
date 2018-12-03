// import * as types from "./guardian.types";

const initialState = {
  results: []
};

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case 'TECHCRUNCH_TOP_HEADLINES_REQUEST':
      return { ...state,
        results: action.payload.articles
      };
    default:
      return state;
  }
};
