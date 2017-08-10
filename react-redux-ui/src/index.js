import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import AlarmsStore from './redux/store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(
  <Provider store={AlarmsStore}>
    <App/>
  </Provider>, 
  document.getElementById('root')
);
