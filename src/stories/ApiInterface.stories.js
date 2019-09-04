import React from 'react'
import { storiesOf } from '@storybook/react'
import Provider from '../Provider.js'
import { configureStore } from '../store';
import { Router, Route, Switch } from 'react-router-dom';
import { browserHistory } from 'react-router';
import UrlInput from 'components/elements/UrlInput';

// const withProvider = (story) => (
//   <Provider store={configureStore(browserHistory)}>
//     {story()}
//   </Provider>
// )

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
    rows: [{ key: 'Content-Type', value: 'application/json', description: '' }],
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


storiesOf('ApiInterface', module)
  // .addDecorator(withProvider)
  .add('UrlInput', () => (
    <UrlInput apiInterface={defaultState}/>
  ))