import { configure, addDecorator } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
addDecorator(StoryRouter());
import 'index.css'
import 'scss/style.css'


const req = require.context('../src', true, /\.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);