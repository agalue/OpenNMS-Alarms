import React from 'react';
import { Link } from 'react-router-dom';

const getFormattedUei = uei => {
  let ret = uei.replace(/^.*\//g, '');
  ret = ret.search(/_/) === -1 ? ret.replace(/([A-Z])/g, ' $1') : ret.replace('_', ' ');
  return ret.charAt(0).toUpperCase() + ret.slice(1);
}

const AlarmItem = ({ alarm }) => (
  <div className="panel panel-default">
    <div className="panel-heading">
      <Link to={`/alarms/${alarm.id}`}>
        <h3 className="panel-title">{ getFormattedUei(alarm.uei) }</h3>
      </Link>
    </div>
    <div className="panel-body">
      { alarm.logMessage }
    </div>
  </div>
)

export default AlarmItem