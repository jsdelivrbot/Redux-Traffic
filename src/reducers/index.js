import { combineReducers } from 'redux';
import ActiveLightReducer  from './selected-light';

const rootReducer = combineReducers({
  selectedLight : ActiveLightReducer
});

export default rootReducer;
