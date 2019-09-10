import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import S3Explorer from 'components/S3Explorer';

storiesOf('S3Explorer', module)
  .addDecorator(withKnobs)
  .add('S3Explorer - knobs', () => {
    const bucketName = text('bucketName', 'xy883');
    
    return <S3Explorer bucketName={bucketName} root='' />;
  });
