import { connect } from 'react-redux';

import Alarm from './Alarm';

const mapStateToProps = (state) => ({
  alarm: state.alarm
})

const AlarmContainer = connect(
  mapStateToProps
)(Alarm);

export default AlarmContainer;