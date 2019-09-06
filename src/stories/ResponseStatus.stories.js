import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import ResponseStatus from 'components/ResponseStatus';

storiesOf('ResponseStatus', module)
  .addDecorator(withKnobs)
  .add('ResponseStatus - knobs', () => {
    const defaultState = {
      response: {
        status: number('status', 200),
        statusText: text('statusText', 'OK'),
        duration: number('duration', 1234),
      },
    };
    return <ResponseStatus apiInterface={defaultState} />;
  });
