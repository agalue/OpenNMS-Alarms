
const defaultState = {
  alarms: [],
  loading: false,
  error: null
};

const alarmsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'FETCH_ALARMS_PENDING':
      return {...state, loading: true }
    case 'FETCH_ALARMS_FULFILLED':
      let alarms = action.payload.alarm;
      return {...state, loading: false, alarms }
    case 'FETCH_ALARMS_REJECTED':
      let error = action.payload.message;
      return {...state, loading: false, error }
    default:
      return state;
  }
}

export default alarmsReducer;