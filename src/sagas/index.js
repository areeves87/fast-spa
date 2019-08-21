/**
 * Root Sagas
 */
import { all } from 'redux-saga/effects';

// sagas
import apiInterfaceSagas from './ApiInterface';

export default function* rootSaga() {
  yield all([apiInterfaceSagas()]);
}
