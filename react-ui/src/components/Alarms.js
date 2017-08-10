import React from 'react';

import AlarmItem from './AlarmItem';

export default class Alarms extends React.Component {

  componentDidMount() {
    let { alarms, fetchAlarms } = this.props;
    alarms.length === 0 && fetchAlarms();
  }

  render() {
    let { loading, alarms, fetchAlarms, setAlarm } = this.props;
    return (loading ? (
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
