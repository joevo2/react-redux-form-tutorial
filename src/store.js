import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

import { counter } from './reducers'

const reducer = combineReducers({
  counter,
  form: reduxFormReducer, // mounted under "form"
});
const store = (window.devToolsExtension
  ? window.__REDUX_DEVTOOLS_EXTENSION__()(createStore)
  : createStore)(reducer);

export default store;
