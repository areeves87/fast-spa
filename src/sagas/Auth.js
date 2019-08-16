/**
 * Auth Sagas
 */
import { all, fork, put, takeEvery } from 'redux-saga/effects';
import { history } from '../history';

/**
 * Auth Root Saga
 */
export default function* rootSaga() {
  yield all([]);
}
