import React from 'react';
import PropTypes from 'prop-types';

import AlarmItem from './AlarmItem';

Alarms.propTypes = {
  data: PropTypes.shape({
    alarms: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
  }),
  fetchAlarms: PropTypes.func.isRequired,
  setAlarm: PropTypes.func.isRequired
}

export default function Alarms({ data: { alarms, loading }, setAlarm, fetchAlarms }) {
  return(
    loading ?
    <div className="jumbotron">
      <h3>Loading ... Please wait.</h3>
    </div>
    :
    <div>
      <p>
        <button className="btn btn-primary" type="button" onClick={fetchAlarms}>
          <span className="glyphicon glyphicon-refresh" aria-hidden="true"></span> Load Alarms
        </button>
      </p>
      {
        alarms.map(alarm => <AlarmItem key={alarm.id} alarm={alarm} onClick={() => setAlarm(alarm)}/>
        )
      }
    </div>
  )
}


