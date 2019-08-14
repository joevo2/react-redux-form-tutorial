import { put, takeEvery, delay } from 'redux-saga/effects'

import { INCREMENT, SAGA_UPDATE } from "./actions"

// worker Saga: will be fired on INCREMENT actions
function* sagaUpdate(action) {
  yield delay(4000)
  const value = action.payload * 2;
  yield put({ type: SAGA_UPDATE, payload: value });
}

/*
 Starts fetchUser on each dispatched `INCREMENT` action.
 Allows concurrent fetches of user.
*/
function* mySaga() {
  yield takeEvery(INCREMENT, sagaUpdate);
}

export default mySaga;