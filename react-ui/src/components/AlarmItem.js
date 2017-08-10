import React from 'react';
import { Link } from 'react-router-dom';

import HTMLContent from './HTMLContent';
import SeverityPanelBody from './SeverityPanelBody';

function getFormattedUei(uei) {
  let ret = uei.replace(/^.*\//g, '');
  ret = ret.search(/_/) === -1 ? ret.replace(/([A-Z])/g, ' $1') : ret.replace('_', ' ');
  return ret.charAt(0).toUpperCase() + ret.slice(1);
}

export default function AlarmItem ({alarm}) {
  return(
    <div className="panel panel-default">
      <div className="panel-heading clearfix">
        <Link to={`/alarms/${alarm.id}`}>
          <h3 className="panel-title">{getFormattedUei(alarm.uei)}</h3>
          <span className="pull-right">{new Date(alarm.lastEventTime).toString()}</span>
        </Link>
      </div>
      <SeverityPanelBody severity={alarm.severity}>
        <HTMLContent content={alarm.logMessage} />
      </SeverityPanelBody>
    </div>
  )
}
