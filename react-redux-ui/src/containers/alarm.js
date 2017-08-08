import { connect } from 'react-redux';

import Alarm from '../components/alarm';

const mapStateToProps = (state) => ({
  alarm: state.alarmReducer
})

const AlarmContainer = connect(
  mapStateToProps
)(Alarm);

export default AlarmContainer;