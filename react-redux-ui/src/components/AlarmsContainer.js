import { connect } from 'react-redux';

import Alarms from './Alarms';
import { actions } from '../redux/modules/alarms';

const mapStateToProps = (state) => ({
  loading: state.alarmsReducer.loading,
  alarms: state.alarmsReducer.alarms
})

const mapDispatchToProps = {
  fetchAlarms: actions.fetchAlarms,
  setAlarm: actions.setAlarm
}

const AlarmsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Alarms);

export default AlarmsContainer;