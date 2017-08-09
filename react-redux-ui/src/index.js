import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import AlarmsContainer from './components/AlarmsContainer';
import AlarmContainer from './components/AlarmContainer';
import AlarmsStore from './redux/store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(
  <Provider store={AlarmsStore}>
    <BrowserRouter>
      <App>
        <Route exact path='/' render={() => <Redirect from='/' to='/alarms' />} />
        <Route exact path='/alarms' component={AlarmsContainer} />
        <Route path='/alarms/:id' component={AlarmContainer} />
      </App>
    </BrowserRouter>
  </Provider>, 
  document.getElementById('root')
);
