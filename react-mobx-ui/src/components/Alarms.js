import React from 'react';
import { inject, observer } from 'mobx-react';

import AlarmItem from './AlarmItem';

@inject('alarmsStore') @observer
export default class Alarms extends React.Component {

  componentDidMount() {
    let { alarms, fetchAlarms } = this.props.alarmsStore;
    alarms.length === 0 && fetchAlarms();
  }

  render() {
    let { alarms, isLoading, fetchAlarms, setAlarm } = this.props.alarmsStore;
    return (isLoading ? (
      <div className="jumbotron">
        <h3>Loading ... Please wait.</h3>
      </div>
    ) : (
      <div>
        <p>
          <button className="btn btn-primary" type="button" onClick={fetchAlarms}>
            <span className="glyphicon glyphicon-refresh" aria-hidden="true"></span> Refresh Alarms
          </button>
        </p>
        { alarms.map(alarm => <AlarmItem key={alarm.id} alarm={alarm} setAlarm={setAlarm}/>) }
      </div>
    ))
  }

}