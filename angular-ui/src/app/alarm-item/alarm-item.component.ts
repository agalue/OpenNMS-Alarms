import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alarm-item',
  templateUrl: './alarm-item.component.html'
})
export class AlarmItemComponent {

  @Input()
  alarm: Object;

  getFormattedUei() : string {
    let ret = this.alarm['uei'].replace(/^.*\//g, '');
    ret = ret.search(/_/) === -1 ? ret.replace(/([A-Z])/g, ' $1') : ret.replace('_', ' ');
    return ret.charAt(0).toUpperCase() + ret.slice(1);
  }

  getBodyClass() : string {
    return `panel-body ${this.alarm['severity']}`;
  }
}
