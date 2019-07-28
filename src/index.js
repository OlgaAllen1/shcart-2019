import 'bootstrap/dist/css/bootstrap.css'

import React from 'react';
import ReactDOM from 'react-dom';

import Layout from './pages/layout/container';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <Layout />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
