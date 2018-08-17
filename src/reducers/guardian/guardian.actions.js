import * as types from "./guardian.types";
import fetchJSONP from 'fetch-jsonp';
import axios from 'axios';

export const pullGuardianData = () => dispatch => {
    let url = "/api/guardian/world";

    axios.get(url)
    .then(response => dispatch({
      type: types.GUARDIAN_SEARCH_REQUEST,
      payload: response.data
    }))
    .catch();
};

export const handlePaginationClick = pageNumber =>  dispatch => {
  let url = `/api/guardian/world/${pageNumber}`;
             // 'api/guardian/world/5'
  axios.get(url)
  .then(response => dispatch({ type: types.GUARDIAN_SEARCH_REQUEST, payload: response.data }))
  .catch();
}
