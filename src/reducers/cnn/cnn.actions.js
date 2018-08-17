// import * as types from "./guardian.types";
import fetchJSONP from 'fetch-jsonp';
import axios from 'axios';

export const pullCnnHeadlinesData = () => dispatch => {
    let url = "/api/cnn/everything";

    axios.get(url)
    .then(response => dispatch({
      type: "CNN_HEADLINES_REQUEST",
      payload: response.data
    }))
    .catch();
};

export const handlePaginationClick = pageNumber =>  dispatch => {
  let url = `/api/cnn/everything/${pageNumber}`;

  axios.get(url)
  .then(response => dispatch({ type: types.GUARDIAN_SEARCH_REQUEST, payload: response.data }))
  .catch();
}
