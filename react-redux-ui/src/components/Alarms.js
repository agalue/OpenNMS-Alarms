import React from 'react';
import PropTypes from 'prop-types';

import AlarmItem from './AlarmItem';

class Alarms extends React.Component {

  componentDidMount() {
    let { data: { alarms }, fetchAlarms } = this.props;
    alarms.length === 0 && fetchAlarms();
  }

  render() {
    let { data: { alarms, loading }, setAlarm, fetchAlarms } = this.props;
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

Alarms.propTypes = {
  data: PropTypes.shape({
    alarms: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
  }),
  fetchAlarms: PropTypes.func.isRequired,
  setAlarm: PropTypes.func.isRequired
}

export default Alarms;
