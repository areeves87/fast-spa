import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import ParamsPanel from 'components/ApiInterface/ParamsPanel/ParamsPanel';
import HeadersPanel from 'components/ApiInterface/HeadersPanel/HeadersPanel';
import BodyPanel from 'components/ApiInterface/BodyPanel/BodyPanel';

storiesOf('RequestPanels', module)
  .addDecorator(withKnobs)
  .add('ParamsPanel - knobs', () => {
    const defaultState = {
      params: {
        rows: [
          {
            key: text('key', 'page'),
            value: text('value', '20'),
            description: '',
          },
          { key: 'limit', value: '20', description: '' },
        ],
        rowCount: 2,
        selectedIndexes: [0],
      },
    };
    return <ParamsPanel apiInterface={defaultState} />;
  })
  .add('HeadersPanel', () => {
    const defaultState = {
      headers: {
        rows: [
          { key: 'Content-Type', value: 'application/json', description: '' },
        ],
        rowCount: 1,
        selectedIndexes: [0],
      },
    };
    return <HeadersPanel apiInterface={defaultState} />;
  })
  .add('BodyPanel', () => {
    const defaultState = {
      body: {
        type: text('type', 'x-www-form-urlencoded'),
        formdata: {
          rows: [
            { key: 'email', value: 'eve.holt@reqres.in', description: '' },
            { key: 'password', value: 'cityslicka', description: '' },
          ],
          rowCount: 2,
          selectedIndexes: [0, 1],
        },
        urlencoded: {
          rows: [
            { key: 'email', value: 'eve.holt@reqres.in', description: '' },
            { key: 'password', value: 'cityslicka', description: '' },
          ],
          rowCount: 2,
          selectedIndexes: [0, 1],
        },
        raw: text('row', 'This is raw example'),
        binary: null,
      },
    };
    return <BodyPanel apiInterface={defaultState} />;
  });
