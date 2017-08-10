import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import Alarms from './Alarms';
import Alarm from './Alarm';
import AlarmsService from '../services/alarms';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      selected: null,
      alarms: []      
    }
  }

  fetchAlarms = () => {
    this.setState({loading: true});
    AlarmsService.getAlarms().then(data => {
      this.setState({loading: false, alarms: data.alarm});
    });
  }

  setAlarm = (alarm) => {
    this.setState({selected: alarm});
  }

  render() {
    return(
      <BrowserRouter>
        <div className="container">
          <h1>OpenNMS Alarms</h1>
          <Route exact path='/alarms' render={() => <Alarms {...this.state} fetchAlarms={this.fetchAlarms} setAlarm={this.setAlarm}/>} />
          <Route path='/alarms/:id' render={() => <Alarm alarm={this.state.selected}/>} />
          <Redirect from='*' to='/alarms' />
        </div>
      </BrowserRouter>
    )
  }

}
