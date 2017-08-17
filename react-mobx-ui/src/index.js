import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import App from './components/App';
import alarmsStore from './stores/alarms';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(
  <Provider alarmsStore={alarmsStore}>
    <App/>
  </Provider>, 
  document.getElementById('root')
);
