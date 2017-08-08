const URL = 'https://demo.opennms.org/opennms/rest/alarms';

const REQUEST = {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Basic ' + btoa('demo:demo')
  }
};

export default class AlarmsService {

  static getAlarms() {
    return fetch(`${URL}?limit=0`, REQUEST).then(response => response.json());
  }

  static getAlarm(alarmId) {
    return fetch(`${URL}/${alarmId}`, REQUEST).then(response => response.json());
  }

}