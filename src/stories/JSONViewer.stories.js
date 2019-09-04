import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import AceEditor from 'react-ace';
import 'brace/mode/json';
import 'brace/theme/github';
export const jsondata = {
    name: 'Alperen',
    address: 'Turkey',
    etc: '',
    friends: [{ name: 'Katia', address: 'USA', etc: '' },
    { name: 'Kyle', address: 'USA', etc: '' },
    { name: 'Besmir', address: 'USA', etc: '' }]
};

export const actions = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

storiesOf('JSONViewer', module)
  .add('default', () => <AceEditor
  placeholder="Placeholder Text"
  mode="json"
  theme="github"
  name="blah2"
  style={{ height: '300px', width: '100%' }}
  fontSize={14}
  showPrintMargin={true}
  showGutter={true}
  highlightActiveLine={true}
  value={JSON.stringify(
    jsondata,
    undefined,
    4
  )}
  setOptions={{
    enableBasicAutocompletion: false,
    enableLiveAutocompletion: false,
    enableSnippets: false,
    showLineNumbers: true,
    tabSize: 2,
  }}
/>)
