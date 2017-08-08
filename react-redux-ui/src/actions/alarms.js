
export function fetchAlarms() {
  let url = 'https://demo.opennms.org/opennms/rest/alarms?limit=0';
  let request = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Authorization': 'Basic ' + btoa('demo:demo')
    }
  }
  return {
    type: 'FETCH_ALARMS',
    payload: fetch(url, request).then(response => response.json())
  }
}

export function setAlarm(alarm) {
  return {
    type: 'SET_ALARM',
    payload: alarm
  }
}