import { combineReducers } from 'redux';
import guardian from './guardian/guardian';
import cnn from './cnn/cnn';
import techcrunch from './techcrunch/techcrunch';

export default combineReducers({
  guardian: guardian,
  cnn: cnn,
  techcrunch: techcrunch
});
