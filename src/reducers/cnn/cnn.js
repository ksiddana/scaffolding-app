// import * as types from "./guardian.types";

const initialState = {
  results: []
};


export default (state = initialState, action = {}) => {
  switch(action.type) {

    case "CNN_TOP_HEADLINES_REQUEST":
      return { ...state,
        results: action.payload.articles
      };
    case 'CNN_EVERYTHING_REQUEST':
      return {
        ...state,
        results: action.payload.articles
      }

    default:
      return state;
  }
};
