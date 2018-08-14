import * as types from "./guardian.types";

const initialState = {
  searchTerm: "",
  results: []
};


export default (state = initialState, action = {}) => {
  switch(action.type) {
    case types.DUCKDUCKGO_SEARCH_TERM:
      return { ...state, searchTerm: action.searchTerm };

    case types.GUARDIAN_SEARCH_REQUEST:
      return { ...state,
        results: action.payload.response.results,
        total: action.payload.response.total,
        orderBy: action.payload.response.orderBy,
        currentPage: action.payload.response.currentPage,
        startIndex: action.payload.response.startIndex,
        pageSize: action.payload.response.pageSize,
        pages: action.payload.response.pages
      };

    default:
      return state;
  }
};
