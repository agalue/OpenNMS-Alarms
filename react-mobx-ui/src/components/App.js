import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import Alarms from './Alarms';
import Alarm from './Alarm';

export default function App(props) {
  return(
    <BrowserRouter>
      <div className="container">
        <h1>OpenNMS Alarms</h1>
        <Route exact path='/alarms' component={Alarms} />
        <Route path='/alarms/:id' component={Alarm} />
        <Redirect from='*' to='/alarms' />
      </div>
    </BrowserRouter>
  )
}
