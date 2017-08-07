import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const getFormattedUei = uei => {
  let ret = uei.replace(/^.*\//g, '');
  ret = ret.search(/_/) === -1 ? ret.replace(/([A-Z])/g, ' $1') : ret.replace('_', ' ');
  return ret.charAt(0).toUpperCase() + ret.slice(1);
}

const AlarmItem = (props) => (
  <div className="panel panel-default">
    <div className="panel-heading">
      <Link to={`/alarms/${props.alarm.id}`} onClick={props.onClick}>
        <h3 className="panel-title">{ getFormattedUei(props.alarm.uei) }</h3>
      </Link>
    </div>
    <div className="panel-body">
      { props.alarm.logMessage }
    </div>
  </div>
)

AlarmItem.propTypes = {
  alarm: PropTypes.object,
  onClick: PropTypes.func.isRequired
}

export default AlarmItem