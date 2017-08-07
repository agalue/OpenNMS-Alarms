import React from 'react';
import PropTypes from 'prop-types';

import BackButton from './back';

const Alarm = (props) => {
  const { alarm } = props;
  return (
    alarm ?
    <div>
      <BackButton/>
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Alarm ID { alarm.id }</h3>
        </div>
        <div className="panel-body" dangerouslySetInnerHTML={ {__html: alarm.description} }/>
      </div>
    </div>
    :
    <div>
      <BackButton/>
      <div className="jumbotron">Looks like you haven't selected an alarm</div>
    </div>
  );
}

Alarm.propTypes = {
  alarm: PropTypes.object.isRequired
}

export default Alarm;