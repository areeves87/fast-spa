import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import InfiniteScrollCard from 'components/InfiniteScrollCard';

export const actions = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

storiesOf('InfiniteScroll', module).add('default', () => (
  <InfiniteScrollCard />
));
