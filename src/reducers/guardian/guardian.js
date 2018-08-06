import * as types from "./guardian.types";

const initialState = {
  searchTerm: "",
  results: []
};


export default (state = initialState, action = {}) => {
  console.log("reaching here: ", action);
  switch(action.type) {
    case types.DUCKDUCKGO_SEARCH_TERM:
      return { ...state, searchTerm: action.searchTerm };

    case "DUCKDUCKGO_SEARCH_REQUEST":
      console.log("Action:", action);
      return { ...state, results: action.results };

    default:
      return state;
  }
};
