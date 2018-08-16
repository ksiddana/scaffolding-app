import { combineReducers } from 'redux';
import guardian from "./guardian/guardian";
import cnn from "./cnn/cnn";

export default combineReducers({
  guardian: guardian,
  cnn: cnn
});
