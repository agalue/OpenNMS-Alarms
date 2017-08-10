import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from 'rxjs/Rx';

import { AlarmsService } from '../alarms.service';

@Component({
  selector: 'app-alarm',
  templateUrl: './alarm.component.html'
})
export class AlarmComponent {

  alarm: Object;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private alarmsService: AlarmsService
  ) {
    let id = route.snapshot.params['id'];
    alarmsService.getAlarm(id)
      .then(alarm => this.alarm = alarm)
      .catch(error => console.error(error));
  }

  goBack() {
    this.router.navigate(['../']);
  }

  getBodyClass() : string {
    return `panel-body ${this.alarm['severity']}`;
  }

}
