import { handleActions } from 'redux-actions';

const defaultState = {
  method: 'GET',
  urlAddress: 'https://samplecsvs.s3.amazonaws.com/Sacramentorealestatetransactions.csv', // https://samplecsvs.s3.amazonaws.com/Sacramentorealestatetransactions.csv //https://reqres.in/api/login
  loading: false,
  params: {
    rows: [{ key: 'page', value: '20', description: '' }],
    rowCount: 1,
    selectedIndexes: [0],
  },
  headers: {
    rows: [{ key: 'Content-Type', value: 'application/x-www-form-urlencoded', description: '' }],
    rowCount: 1,
    selectedIndexes: [0],
  },
  body: {
    type: 'x-www-form-urlencoded',
    formdata: {///"email": "eve.holt@reqres.in",
      rows: [{ key: 'email', value: 'eve.holt@reqres.in', description: '' },
      { key: 'password', value: 'cityslicka', description: '' }],
      rowCount: 2,
      selectedIndexes: [0, 1],
    },
    urlencoded: {
      rows: [{ key: 'email', value: 'eve.holt@reqres.in', description: '' },
      { key: 'password', value: 'cityslicka', description: '' }],
      rowCount: 2,
      selectedIndexes: [0, 1],
    },
    raw: '',
    binary: null,
  },
  response: {
    code: '',
    data: '',
  },
  csv: {
    columns : [],
    rows: [],
    rowCount: 0
  }
};

export default handleActions(
  {
    SEND_REQUEST: state => {
      return {
        ...state,
        loading: true,
        response:{
          code: '',
          data: '',
        },
        csv: {
          columns : [],
          rows: [],
          rowCount: 0
        }
      }
    },

    API_RESPONSE_SUCCESS: (state, { payload: { apiResponse } }) => {
      return {
        ...state,
        loading: false,
        response: apiResponse,
      };
    },

    API_RESPONSE_FAIL: (state, { payload: { error } }) => {
      return {
        ...state,
        loading: false,
        response: error,
      };
    },

    CSV_RESPONSE_SUCCESS: (state, { payload: { csvResponse } }) => {
      return {
        ...state,
        loading: false,
        csv: csvResponse,
      };
    },

    CSV_RESPONSE_FAIL: (state, { payload: { error } }) => {
      return {
        ...state,
        loading: false,
        csv: error,
      };
    },

    UPDATE_METHOD: (state, { payload: method }) => {
      return {
        ...state,
        loading: false,
        method,
      };
    },
    SET_URLADDRESS: (state, { payload: urlAddress }) => {
      return {
        ...state,
        loading: false,
        urlAddress,
      };
    },

    SET_BODY_TYPE: (state, { payload: type }) => {
      const body = state.body;
      body.type = type;

      return {
        ...state,
        loading: false,
        body,
      };
    },

    SET_PARAMS_ROWS_SELECTED: (state, { payload: selectedIndexes }) => {
      let unique = [...new Set(selectedIndexes)];
      const params = state.params;
      params.selectedIndexes = unique;
      return {
        ...state,
        loading: false,
        params,
      };
    },

    UPDATE_PARAMS: (state, { payload: { fromRow, toRow, updated } }) => {
      const params = state.params;

      const rows = params.rows.slice();
      for (let i = fromRow; i <= toRow; i++) {
        rows[i] = { ...rows[i], ...updated };
      }

      //increase row count
      let rowCount = params.rowCount;
      if (fromRow === params.rowCount - 1) {
        rowCount++;
        rows[fromRow + 1] = { key: '', value: '', description: '' };
        params.selectedIndexes.push(fromRow)
      }

      params.rows = rows;
      params.rowCount = rowCount;

      return {
        ...state,
        loading: false,
        params,
      };
    },

    SET_HEADERS_ROWS_SELECTED: (state, { payload: selectedIndexes }) => {
      let unique = [...new Set(selectedIndexes)];
      const headers = state.headers;
      headers.selectedIndexes = unique;
      return {
        ...state,
        loading: false,
        headers,
      };
    },

    UPDATE_HEADERS: (state, { payload: { fromRow, toRow, updated } }) => {
      const headers = state.headers;

      const rows = headers.rows.slice();
      for (let i = fromRow; i <= toRow; i++) {
        rows[i] = { ...rows[i], ...updated };
      }

      //increase row count
      let rowCount = headers.rowCount;
      if (fromRow === headers.rowCount - 1) {
        rowCount++;
        rows[fromRow + 1] = { key: '', value: '', description: '' };
        headers.selectedIndexes.push(fromRow);
      }

      headers.rows = rows;
      headers.rowCount = rowCount;

      return {
        ...state,
        loading: false,
        headers,
      };
    },

    //////////////////////
    SET_FORMDATA_ROWS_SELECTED: (state, { payload: selectedIndexes }) => {
      let unique = [...new Set(selectedIndexes)];
      const body = state.body;
      body.formdata.selectedIndexes = unique;
      return {
        ...state,
        loading: false,
        body,
      };
    },

    UPDATE_FORMDATA: (state, { payload: { fromRow, toRow, updated } }) => {
      const body = state.body;

      const rows = body.formdata.rows.slice();
      for (let i = fromRow; i <= toRow; i++) {
        rows[i] = { ...rows[i], ...updated };
      }

      //increase row count
      let rowCount = body.formdata.rowCount;
      if (fromRow === body.formdata.rowCount - 1) {
        rowCount++;
        rows[fromRow + 1] = { key: '', value: '', description: '' };
        body.formdata.selectedIndexes.push(fromRow);
      }

      body.formdata.rows = rows;
      body.formdata.rowCount = rowCount;

      return {
        ...state,
        loading: false,
        body,
      };
    },
    //////////////////////
    SET_URLENCODED_ROWS_SELECTED: (state, { payload: selectedIndexes }) => {
      let unique = [...new Set(selectedIndexes)];
      const body = state.body;
      body.urlencoded.selectedIndexes = unique;
      return {
        ...state,
        loading: false,
        body,
      };
    },

    UPDATE_URLENCODED: (state, { payload: { fromRow, toRow, updated } }) => {
      const body = state.body;

      const rows = body.urlencoded.rows.slice();
      for (let i = fromRow; i <= toRow; i++) {
        rows[i] = { ...rows[i], ...updated };
      }

      //increase row count
      let rowCount = body.urlencoded.rowCount;
      if (fromRow === body.urlencoded.rowCount - 1) {
        rowCount++;
        rows[fromRow + 1] = { key: '', value: '', description: '' };
        body.urlencoded.selectedIndexes.push(fromRow);
      }

      body.urlencoded.rows = rows;
      body.urlencoded.rowCount = rowCount;

      return {
        ...state,
        loading: false,
        body,
      };
    },

    ////////////////
    UPDATE_RAWBODY: (state, { payload: data }) => {
      const body = state.body;
      body.raw = data;
      return {
        ...state,
        loading: false,
        body,
      };
    },
  },
  defaultState
);
