import React from 'react';

import BackButton from './back';
import AlarmsService from '../services/alarms';

export default class Alarm extends React.Component {

  constructor() {
    super();
    this.state = {
      alarm: null
    }
  }

  componentWillMount() {
    AlarmsService.getAlarm(this.props.match.params.id).then(alarm => {
      this.setState({alarm});
    });
  }

  render() {
    let { alarm } = this.state;
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

}
