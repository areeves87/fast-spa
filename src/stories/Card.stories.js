import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Card from 'components/Card';

export const actions = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

storiesOf('Card', module)
  .add('default', () => <div className="fscard-container"><Card title='My title' description='This is my description two line of the string expected ok?' thumbnailUrl='https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg' {...actions} /></div>)
