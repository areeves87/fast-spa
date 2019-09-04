/**
 */
import {
  UPDATE_METHOD,
  SET_URLADDRESS,
  SEND_REQUEST,
  UPDATE_PARAMS,
  SET_PARAMS_ROWS_SELECTED,
  UPDATE_HEADERS,
  SET_HEADERS_ROWS_SELECTED,
  SET_BODY_TYPE,
  UPDATE_FORMDATA,
  SET_FORMDATA_ROWS_SELECTED,
  UPDATE_URLENCODED,
  SET_URLENCODED_ROWS_SELECTED,
  UPDATE_RAWBODY,
  SELECT_API,
} from './types';

/**
 */
export const updateMethod = method => ({
  type: UPDATE_METHOD,
  payload: method,
});

/**
 */
export const setUrlAddress = urlAddress => ({
  type: SET_URLADDRESS,
  payload: urlAddress,
});

/**
 * 
 */
export const selectAPI = (item, subItem, data) => ({
  type: SELECT_API,
  payload: { item, subItem, data },
});

/**
 */
export const sendRequest = () => ({
  type: SEND_REQUEST,
  payload: null,
});

/**
 */
export const setBodyType = type => ({
  type: SET_BODY_TYPE,
  payload: type,
});

/**
 */
export const updateParams = (fromRow, toRow, updated) => ({
  type: UPDATE_PARAMS,
  payload: { fromRow, toRow, updated },
});

/**
 */
export const setRowsSelected = selectedIndexes => ({
  type: SET_PARAMS_ROWS_SELECTED,
  payload: selectedIndexes,
});

/**
 */
export const updateHeaders = (fromRow, toRow, updated) => ({
  type: UPDATE_HEADERS,
  payload: { fromRow, toRow, updated },
});

/**
 */
export const setHeadersRowsSelected = selectedIndexes => ({
  type: SET_HEADERS_ROWS_SELECTED,
  payload: selectedIndexes,
});

/**
 */
export const updateFormData = (fromRow, toRow, updated) => ({
  type: UPDATE_FORMDATA,
  payload: { fromRow, toRow, updated },
});

/**
 */
export const setFormDataRowsSelected = selectedIndexes => ({
  type: SET_FORMDATA_ROWS_SELECTED,
  payload: selectedIndexes,
});

/**
 */
export const updateUrlEncoded = (fromRow, toRow, updated) => ({
  type: UPDATE_URLENCODED,
  payload: { fromRow, toRow, updated },
});

/**
 */
export const setUrlEncodedRowsSelected = selectedIndexes => ({
  type: SET_URLENCODED_ROWS_SELECTED,
  payload: selectedIndexes,
});

export const updateRawBody = data => ({
  type: UPDATE_RAWBODY,
  payload: data,
});
