import { createStore, combineReducers } from 'redux';
import sidebarReducer from './reducers/ui/sidebarReducer';
import loaderReducer from './reducers/ui/loaderReducer';

// Combine reducers
const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  loader: loaderReducer,
});

// Create the Redux store with the combined reducer
const store = createStore(rootReducer);

export default store;