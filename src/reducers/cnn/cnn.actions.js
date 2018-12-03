// import * as types from "./guardian.types";
import fetchJSONP from 'fetch-jsonp';
import axios from 'axios';

export const getAllNewsData = () => dispatch => {
    const url = "/api/cnn/everything";

    axios.get(url)
      .then(response => dispatch({
        type: "CNN_HEADLINES_REQUEST",
        payload: response.data
      }))
      .catch();
};

export const getTopHeadlinesData = () => dispatch => {
  const url = 'api/cnn/top-headlines';

  axios.get(url)
    .then(response => dispatch({
      type: 'CNN_TOP_HEADLINES_REQUEST',
      payload: response.data
    }))
    .catch();
}

export const handlePaginationClick = pageNumber =>  dispatch => {
  let url = `/api/cnn/everything/${pageNumber}`;

  axios.get(url)
  .then(response => dispatch({ type: types.GUARDIAN_SEARCH_REQUEST, payload: response.data }))
  .catch();
}

export const loginUser = (user) => dispatch => {
  console.log(user);
  let url = '/api/users';

  axios.post(url, user)
  .then(response => dispatch({ type: 'LOGIN_CREAT_USER_REQUEST', payload: response }))
  .catch();
}

export const getGmailEmail = () => dispatch => {
  let url = '/emails';

  axios.get(url)
  .then(response => console.log(response))
  .catch(error => console.log(error));
}
