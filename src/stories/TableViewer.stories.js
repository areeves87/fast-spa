import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import TableViewer from 'components/TableViewer';

export const columns = [
    { key: 'name', name: 'Name', editable: false, resizable: true},
    { key: 'address', name: 'Address', editable: false, resizable: true},
    { key: 'etc', name: 'etc', editable: false, resizable: true}
];

export const rows = [
    { name: 'Alperen', address: 'Turkey', etc: '' },
    { name: 'Katia', address: 'USA', etc: '' },
    { name: 'Kyle', address: 'USA', etc: '' },
    { name: 'Besmir', address: 'USA', etc: '' }
];

export const actions = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

storiesOf('TableViewer', module)
  .add('default', () => <TableViewer  columns={columns} rows={rows} {...actions} />)
