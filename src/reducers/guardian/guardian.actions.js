import * as types from "./guardian.types";
import fetchJSONP from 'fetch-jsonp';
import axios from 'axios';

// export const fetchData = value => dispatch => {
//   const url = 'http://api.duckduckgo.com/?q=' + value + '&format=json&pretty=1'
//   console.log("REQUEST URL", url);
//
//   return fetchJSONP(url).then(response => {
//     return response.json();
//   }).then(
//     request => {
//       dispatch({
//         type: types.DUCKDUCKGO_SEARCH_REQUEST,
//         results: request.RelatedTopics
//       });
//     },
//     error => {
//       console.log("Error: Retrieving duckduckgo search api results");
//     });
// };
//
// export const onSubmit = value => dispatch => {
//   dispatch({
//     type: types.DUCKDUCKGO_SEARCH_TERM,
//     searchTerm: value
//   });
//
//   return dispatch(fetchData(value))
// };

export const pullGuardianData = () => dispatch => {
  return fetchJSONP('/api/news').then(serverResponse => {
    return serverResponse;
  }).then(serverResponse => {
      dispatch({
        type: DUCKDUCKGO_SEARCH_REQUEST,
        payload: serverResponse
      });
  });
}

export function fetchFoodItems() {
  return dispatch => {
    let url = "/api/news";

    return axios.get(url)
    .then(response => {
      dispatch({ type: DUCKDUCKGO_SEARCH_REQUEST, payload: response.data });
    })
    .catch(error => {
    });
  };
};
