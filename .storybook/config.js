import { configure } from '@storybook/react';
import 'react-chromatic/storybook-addon';

// 2. If you have a global CSS file, import it here:
// import '../src/styles/main.css';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
