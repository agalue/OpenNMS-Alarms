import { connect } from 'react-redux';

import Alarms from './Alarms';
import { actions } from '../redux/modules/alarms';

const mapStateToProps = (state) => ({
  loading: state.alarmsReducer.loading,
  alarms: state.alarmsReducer.alarms
})

const mapDispatchToProps = (dispatch) => ({
  fetchAlarms: () => dispatch(actions.fetchAlarms()),
  setAlarm: (alarm) => dispatch(actions.setAlarm(alarm))
})

const AlarmsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Alarms);

export default AlarmsContainer;