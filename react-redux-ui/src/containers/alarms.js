import { connect } from 'react-redux';

import Alarms from '../components/alarms';
import { fetchAlarms, setAlarm } from '../actions/alarms';

const mapStateToProps = (state) => ({
  data: state.alarmsReducer
})

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAlarms: () => dispatch(fetchAlarms()),
    setAlarm: (alarm) => dispatch(setAlarm(alarm))
  }
}

const AlarmsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Alarms);

export default AlarmsContainer;