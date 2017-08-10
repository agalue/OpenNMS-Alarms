import React from 'react';
import PropTypes from 'prop-types';

import BackButton from './BackButton';
import HTMLContent from './HTMLContent';
import SeverityPanelBody from './SeverityPanelBody';

function AlarmDescription({alarm}) {
  return (
    <div className="panel panel-default">
      <div className="panel-heading clearfix">
        <h3 className="panel-title">Alarm ID {alarm.id}</h3>
        <span className="pull-right">{new Date(alarm.lastEventTime).toString()}</span>
      </div>
      <SeverityPanelBody severity={alarm.severity}>
        <HTMLContent content={alarm.description} />
      </SeverityPanelBody>
    </div>
  )
}

function AlarmParameters({alarm}) {
  return(
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">Parameters</h3>
      </div>
      <SeverityPanelBody severity={alarm.severity}>
        { alarm.parameters && alarm.parameters.length > 0 ? (
          <table className="table table-condensed table-hover">
            <tbody>
            {                
              alarm.parameters.map(p => (
                <tr key={p.name}>
                  <th>{p.name}</th>
                  <td>{p.value}</td>
                </tr>
              ))
            }
            </tbody>
          </table>        
        ) : (
          <p>No Parameters.</p>
        )}
      </SeverityPanelBody>
    </div>
  )
}

Alarm.propTypes = {
  alarm: PropTypes.object
}

export default function Alarm({alarm}) {
  return(
    <div>
      <BackButton/>
      { alarm ? (
        <div>
          <AlarmDescription alarm={alarm}/>
          <AlarmParameters alarm={alarm}/>
        </div>
      ) : (
        <div className="jumbotron">Looks like you haven't selected an alarm</div>
      )}
    </div>
  )
}
