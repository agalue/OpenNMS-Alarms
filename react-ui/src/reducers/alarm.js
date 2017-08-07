
const alarmReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_ALARM':
      return action.payload
    default:
      return state;
  }
}

export default alarmReducer;