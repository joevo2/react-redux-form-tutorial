import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import createSagaMiddleware from 'redux-saga'

import { counter } from './reducers'
import mySaga from './saga.js'

const sagaMiddleware = createSagaMiddleware()

const reducer = combineReducers({
  counter,
  form: reduxFormReducer, // mounted under "form"
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer, /* preloadedState, */
  composeEnhancers(
    applyMiddleware(sagaMiddleware)
  )
);

sagaMiddleware.run(mySaga)

export default store;
