import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import HTMLContent from './HTMLContent';
import SeverityPanelBody from './SeverityPanelBody';

function getFormattedUei(uei) {
  let ret = uei.replace(/^.*\//g, '');
  ret = ret.search(/_/) === -1 ? ret.replace(/([A-Z])/g, ' $1') : ret.replace('_', ' ');
  return ret.charAt(0).toUpperCase() + ret.slice(1);
}

class AlarmItem extends React.Component {
  onClick = () => {
    let {alarm, setAlarm} = this.props;
    setAlarm(alarm);
  }
  
  render() {
    let {alarm} = this.props;
    return (
      <div className="panel panel-default">
        <div className="panel-heading clearfix">
          <Link to={`/alarms/${alarm.id}`} onClick={this.onClick}>
            <h3 className="panel-title">{getFormattedUei(alarm.uei)}</h3>
            <small className="pull-right">{new Date(alarm.lastEventTime).toString()}</small>
          </Link>
        </div>
        <SeverityPanelBody severity={alarm.severity}>
          <HTMLContent content={alarm.logMessage} />
        </SeverityPanelBody>
      </div>
    )
  }
}

AlarmItem.propTypes = {
  alarm: PropTypes.object
}

export default AlarmItem;