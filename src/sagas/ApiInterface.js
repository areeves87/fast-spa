/**
 * Auth Sagas
 */
import { all, call, select, put, takeEvery } from 'redux-saga/effects';
import {
  SEND_REQUEST,
  API_RESPONSE_FAIL,
  API_RESPONSE_SUCCESS,
  CSV_RESPONSE_SUCCESS,
  CSV_RESPONSE_FAIL,
} from 'actions/types';

import { doGetResponse } from 'apis/apiInterface';
import fileReader from 'utils/fileReader';
import Papa from "papaparse";
import { getStore } from '../store';

export const getApiInterface = state => state.apiInterface;
/**
 * Auth Root Saga
 */
export default function* rootSaga() {
  yield all([takeEvery(SEND_REQUEST, sendRequest)]);
}

const handleDataChange = file => {
  console.log(JSON.stringify(file))
  let csvResponse = {};
  csvResponse.rows = file.data;

  csvResponse.columns = file.meta.fields.map(item => {
    return { key: item, name: item, editable: false, resizable: true}
  });
  csvResponse.rowCount = file.data.length;

  getStore().dispatch({ type: CSV_RESPONSE_SUCCESS, payload: { csvResponse } })
  
};


function* sendRequest() {
  try {
    const apiInterface = yield select(getApiInterface);
    const apiResponse = yield call(doGetResponse, apiInterface);
    if (apiResponse.request.responseType === 'blob') {
      const file = yield call(fileReader, apiResponse.data);
      
      Papa.parse(file, {
        header: true,
        dynamicTyping: true,
        complete: handleDataChange
      });
    } else {
      yield put({ type: API_RESPONSE_SUCCESS, payload: { apiResponse } });
    }
    
    
  } catch (error) {
    if (error.response) {
      yield put({ type: API_RESPONSE_FAIL, payload: { error: error.response } });
    } else {
      yield put({ type: API_RESPONSE_FAIL, payload: { error: { data: error } } });
    }
    
  }
}
