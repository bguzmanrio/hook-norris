import React from 'react';
import { render } from 'react-dom';

import Title from './src/components/Title';
import HookNorris from './src/HookNorris';
import HookNorrisCustomHook from './src/HookNorrisCustomHooks';
import HookNorrisMemoValue from './src/HookNorrisMemoValue';

const App = () => (
  <React.Fragment>
    <Title />
    <HookNorris />
    <HookNorrisCustomHook />
    <HookNorrisMemoValue />
  </React.Fragment>
);

render(<App />, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}