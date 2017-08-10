import React from 'react';

import AlarmItem from './AlarmItem';
import AlarmsService from '../services/alarms';

export default class Alarms extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      alarms: []      
    }
  }

  fetchAlarms = (e) => {
    this.setState({loading: true});
    AlarmsService.getAlarms().then(data => {
      this.setState({loading: false, alarms: data.alarm});
    });
  }

  render() {
    let { loading, alarms } = this.state;
    return (loading ? (
      <div className="jumbotron">
        <h3>Loading ... Please wait.</h3>
      </div>
    ) : (
      <div>
        <p>
          <button className="btn btn-primary" type="button" onClick={this.fetchAlarms}>
            <span className="glyphicon glyphicon-refresh" aria-hidden="true"></span> Load Alarms
          </button>
        </p>
        { alarms.map(alarm => <AlarmItem key={alarm.id} alarm={alarm} />) }
      </div>
    ));
  }

}
