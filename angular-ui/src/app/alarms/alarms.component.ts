import { Component, OnInit } from '@angular/core';

import { Alarm } from '../alarm';
import { AlarmsService } from '../alarms.service';

@Component({
  selector: 'app-alarms',
  templateUrl: './alarms.component.html'
})
export class AlarmsComponent implements OnInit {

  loading = false;
  alarms: Alarm[] = [];

  constructor(private alarmsService: AlarmsService) { }

  ngOnInit() {
    this.fetchAlarms();
  }

  async fetchAlarms() {
    this.loading = true;
    try {
      this.alarms = await this.alarmsService.getAlarms();  
    } catch (error) {
      console.error(error);
    } finally {
      this.loading = false;      
    }
  }

}
