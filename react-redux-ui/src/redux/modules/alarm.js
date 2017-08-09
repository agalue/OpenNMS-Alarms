
export const types = {
  SET_ALARM: 'SET_ALARM'
}

export default (state = null, action) => {
  switch (action.type) {
    case types.SET_ALARM:
      return action.payload
    default:
      return state;
  }
}
