import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import AlarmsContainer from './AlarmsContainer';
import AlarmContainer from './AlarmContainer';

export default function App(props) {
  return(
    <BrowserRouter>
      <div className="container">
        <h1>OpenNMS Alarms</h1>
        <Route exact path='/alarms' component={AlarmsContainer} />
        <Route path='/alarms/:id' component={AlarmContainer} />
        <Redirect from='*' to='/alarms' />
      </div>
    </BrowserRouter>
  )
}
