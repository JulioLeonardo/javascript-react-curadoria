import React from 'react';
import { Provider } from 'react-redux';

import Resources from './services/Resources';
import Routes from './routes';
import store from './store';

import './assets/styles/global.css';

function App() {
  return (
    <Provider store={store}>
      <Resources>
        <Routes />
      </Resources>
    </Provider>
  );
}

export default App;
