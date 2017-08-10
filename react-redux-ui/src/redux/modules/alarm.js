
export const types = {
  SET_ALARM: 'SET_ALARM'
}

export function alarmReducer(state = null, action) {
  switch (action.type) {
    case types.SET_ALARM:
      return action.payload
    default:
      return state;
  }
}
