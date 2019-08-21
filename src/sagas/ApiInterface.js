/**
 * Auth Sagas
 */
import { all, call, select, put, takeEvery } from 'redux-saga/effects';
import {
  SEND_REQUEST,
  API_RESPONSE_FAIL,
  API_RESPONSE_SUCCESS,
} from 'actions/types';

import { doGetResponse } from 'apis/apiInterface';

export const getApiInterface = state => state.apiInterface;
/**
 * Auth Root Saga
 */
export default function* rootSaga() {
  yield all([takeEvery(SEND_REQUEST, sendRequest)]);
}

function* sendRequest() {
  try {
    const apiInterface = yield select(getApiInterface);
    const apiResponse = yield call(doGetResponse, apiInterface);
    console.log(apiResponse);
    yield put({ type: API_RESPONSE_SUCCESS, payload: { apiResponse } });
  } catch (error) {
    yield put({ type: API_RESPONSE_FAIL, payload: { error } });
  }
}
