import { observable, action } from 'mobx';

const URL = 'https://demo.opennms.org/opennms/rest/alarms';

const REQUEST = {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Basic ' + btoa('demo:demo')
  }
};

class AlarmsStore {

  @observable alarms = [];
  @observable alarm = null;
  @observable isLoading = false;

  @action fetchAlarms = () => {
    this.isLoading = true;
    fetch(`${URL}?limit=0`, REQUEST)
      .then(response => response.json())
      .then(data => {
        this.alarms = data.alarm;
        this.isLoading = false;
      })
      .catch(error => {
        console.error(error);
        this.isLoading = false;
      })
  }

  @action setAlarm = (alarm) => {
    this.alarm = alarm;
  }

}

const alarmsStore = new AlarmsStore();
export default alarmsStore;