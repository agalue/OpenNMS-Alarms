import React from 'react';
import PropTypes from 'prop-types';

import BackButton from './BackButton';

const Alarm = ({ alarm }) => {
  const panelBodyClass = `panel-body ${alarm ? alarm.severity : ''}`;
  return (
    <div>
      <BackButton/>
      { alarm ?
        <div>
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Alarm ID { alarm.id }</h3>
            </div>
            <div className={panelBodyClass} dangerouslySetInnerHTML={ {__html: alarm.description} }></div>
            <div className="panel-footer clearfix">
              <div className="pull-right">{ new Date(alarm.lastEventTime).toString() }</div>
            </div>
          </div>
          { alarm.parameters && alarm.parameters.length > 0 ?
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Parameters</h3>
              </div>
              <div className={panelBodyClass}>
                <table className="table table-condensed table-hover">
                  <tbody>
                  {
                    alarm.parameters.map(p => (
                      <tr key={p.name}>
                        <th>{ p.name }</th>
                        <td>{ p.value }</td>
                      </tr>
                    ))
                  }
                  </tbody>
                </table>
              </div>
            </div>
            : ''
          }
        </div>
      :
        <div className="jumbotron">Looks like you haven't selected an alarm</div>
      }
    </div>
  );
}

Alarm.propTypes = {
  alarm: PropTypes.object
}

export default Alarm;
