import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import UrlInput from 'components/elements/UrlInput';

const defaultState = {
  method: 'GET',
  urlAddress: 'https://reqres.in/api/login', // https://samplecsvs.s3.amazonaws.com/Sacramentorealestatetransactions.csv //https://reqres.in/api/login
};

storiesOf('ApiInterface', module)
  .addDecorator(withKnobs)
  .add('UrlInput', () => <UrlInput apiInterface={defaultState} />)
  .add('sendAction', () => (
    <UrlInput
      apiInterface={defaultState}
      sendRequest={action('sendRequest')}
      updateMethod={action('updateMethod')}
      selectAPI={action('selectAPI')}
    />
  ))
  .add('knobs', () => {
    const defaultState = {
      method: text('method', 'GET'),
      urlAddress: text('url', 'https://reqres.in/api/login'), // https://samplecsvs.s3.amazonaws.com/Sacramentorealestatetransactions.csv //https://reqres.in/api/login
    };
    return <UrlInput apiInterface={defaultState} />;
  });
