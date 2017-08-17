import { observable, action, runInAction } from 'mobx';

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

  @action fetchAlarms = async() => {
    this.isLoading = true;
    try {
      let response = await fetch(`${URL}?limit=0`, REQUEST);
      let data = await response.json();
      runInAction(() => {
        this.alarms = data.alarm;
        this.isLoading = false;
      });
    } catch (error) {
      console.error(error);
      runInAction(() => {
        this.isLoading = false;
      });
    }
  }

  @action setAlarm = (alarm) => {
    this.alarm = alarm;
  }

}

const alarmsStore = new AlarmsStore();
export default alarmsStore;