import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';
// import filterCriteriaReducer from './FilterCriteriaReducer';
// import ArtistsReducer from './ArtistsReducer';
// import ErrorReducer from './ErrorReducer';
// import SelectionReducer from './SelectionReducer';
// import FoodItemReducer from './FoodItems.js';
// import ReminderProReducer from './ReminderProReducer';
// import GithubStateReducer from "./GithubReducer";
import guardian from "./guardian/guardian";

export default combineReducers({
  guardian: guardian,
  // filterCriteria: filterCriteriaReducer,
  // artists: ArtistsReducer,
  // errors: ErrorReducer,
  // selection: SelectionReducer,
  // foodData: FoodItemReducer,
  // reminders: ReminderProReducer,
  // githubState: GithubStateReducer,
  // duckduckgo: DuckDuckGo
});
