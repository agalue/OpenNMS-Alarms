
const URL = 'https://demo.opennms.org/opennms/rest/alarms?limit=0';

const REQUEST = {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Basic ' + btoa('demo:demo')
  }
};

export const types = {
  SET_ALARM: 'SET_ALARM',
  FETCH_ALARMS: 'FETCH_ALARMS'
}

const internalTypes = {
  FETCH_ALARMS_PENDING: 'FETCH_ALARMS_PENDING',
  FETCH_ALARMS_FULFILLED: 'FETCH_ALARMS_FULFILLED',
  FETCH_ALARMS_REJECTED: 'FETCH_ALARMS_REJECTED'
}

export const actions = {
  fetchAlarms: () => ({
    type: types.FETCH_ALARMS,
    payload: fetch(URL, REQUEST).then(response => response.json())
  }),
  setAlarm: (alarm) => ({
    type: types.SET_ALARM,
    payload: alarm
  })
}

export const defaultState = {
  alarms: [],
  loading: false,
  error: null
};

export function alarmsReducer(state = defaultState, action) {
  switch (action.type) {
    case internalTypes.FETCH_ALARMS_PENDING:
      return {...state, loading: true }
    case internalTypes.FETCH_ALARMS_FULFILLED:
      let alarms = action.payload.alarm;
      return {...state, loading: false, alarms }
    case internalTypes.FETCH_ALARMS_REJECTED:
      let error = action.payload.message;
      return {...state, loading: false, error }
    default:
      return state;
  }
}
