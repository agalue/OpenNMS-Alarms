import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import AlarmsStore from './redux/store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(
  <Provider store={AlarmsStore}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>, 
  document.getElementById('root')
);
