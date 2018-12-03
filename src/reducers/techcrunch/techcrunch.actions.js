import fetchJSONP from 'fetch-jsonp';
import axios from 'axios';

export const getTopHeadlinesData = () => dispatch => {
  const url = 'api/techcrunch/top-headlines';

  axios.get(url)
    .then(response => dispatch({
      type: 'TECHCRUNCH_TOP_HEADLINES_REQUEST',
      payload: response.data
    }))
    .catch();
}
