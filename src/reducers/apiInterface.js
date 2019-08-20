import { handleActions } from 'redux-actions';

const defaultState = {
  method: 'GET',
  urlAddress: '',
  loading: false,
  params: {
    rows: [{ key: '', value: '', description: '' }],
    rowCount: 1,
    selectedIndexes: [],
  },
  headers: {
    rows: [{ key: '', value: '', description: '' }],
    rowCount: 1,
    selectedIndexes: [],
  },
  body: {
    type: 'none',
    formdata: {
      rows: [{ key: '', value: '', description: '' }],
      rowCount: 1,
      selectedIndexes: [],
    },
    urlencoded: {
      rows: [{ key: '', value: '', description: '' }],
      rowCount: 1,
      selectedIndexes: [],
    },
    raw: '',
    binary: null,
  },
  response: {
    code: 200,
    data: '',
  },
};

export default handleActions(
  {
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
      const params = state.params;
      params.selectedIndexes = selectedIndexes;
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
      const headers = state.headers;
      headers.selectedIndexes = selectedIndexes;
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
      const body = state.body;
      body.formdata.selectedIndexes = selectedIndexes;
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
      const body = state.body;
      body.urlencoded.selectedIndexes = selectedIndexes;
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
      }

      body.urlencoded.rows = rows;
      body.urlencoded.rowCount = rowCount;

      return {
        ...state,
        loading: false,
        body,
      };
    },
  },
  defaultState
);
