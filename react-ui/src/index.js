import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import App from './components/App';
import Alarms from './components/Alarms';
import Alarm from './components/Alarm';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Route exact path='/' render={() => <Redirect from='/' to='/alarms' />} />
      <Route exact path='/alarms' component={Alarms} />
      <Route path='/alarms/:id' component={Alarm} />
    </App>
  </BrowserRouter>,
  document.getElementById('root')
);
