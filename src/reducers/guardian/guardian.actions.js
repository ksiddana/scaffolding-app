import * as types from "./guardian.types";
import fetchJSONP from 'fetch-jsonp';
import axios from 'axios';

export const pullGuardianData = () => dispatch => {
    let url = "/api/news";

    axios.get(url)
    .then(response => dispatch({ type: "DUCKDUCKGO_SEARCH_REQUEST", payload: response.data }))
    .catch();
};
