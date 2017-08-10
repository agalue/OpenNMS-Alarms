import { Component, OnInit } from '@angular/core';

import { AlarmsService } from '../alarms.service';

@Component({
  selector: 'app-alarms',
  templateUrl: './alarms.component.html'
})
export class AlarmsComponent implements OnInit {

  loading = false;
  alarms: Object[] = [];

  constructor(private alarmsService: AlarmsService) { }

  ngOnInit() {
    this.fetchAlarms();
  }

  fetchAlarms() {
    this.loading = true;
    this.alarmsService.getAlarms()
      .then(alarms => {
        this.loading = false;
        this.alarms = alarms;
      })
      .catch(error => {
        this.loading = false;
        console.error(error);
      });
  }

}
