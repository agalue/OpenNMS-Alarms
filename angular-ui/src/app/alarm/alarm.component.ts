import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { Alarm } from '../alarm';
import { AlarmsService } from '../alarms.service';

@Component({
  selector: 'app-alarm',
  templateUrl: './alarm.component.html'
})
export class AlarmComponent implements OnInit {

  id: number;
  alarm: Alarm;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private alarmsService: AlarmsService
  ) {
    this.id = route.snapshot.params['id'];
  }

  ngOnInit() {
    this.fetchAlarm();
  }

  async fetchAlarm() {
    try {
      this.alarm = await this.alarmsService.getAlarm(this.id);
    } catch (error) {
      console.error(error);
    }
  }

  goBack() {
    this.router.navigate(['../']);
  }

  getBodyClass() : string {
    return `panel-body ${this.alarm['severity']}`;
  }

}
