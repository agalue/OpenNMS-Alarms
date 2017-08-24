import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { Alarm } from './alarm';

@Injectable()
export class AlarmsService {

  private BASE_URL = "https://demo.opennms.org/opennms/rest/alarms";

  constructor(private http: HttpClient) { }

  private getOptions() : Object {
    let headers = new HttpHeaders().set('Authorization', 'Basic ' + btoa('demo:demo'));
    return { headers };
  }

  private handleError(err: HttpErrorResponse) {
    const msg = err.error instanceof Error ? err.error.message : err.statusText;
    return Observable.throw(msg);
  }

  getAlarms() : Promise<Alarm[]> {
    return this.http.get<Alarm[]>(`${this.BASE_URL}?limit=0`, this.getOptions())
      .catch(this.handleError)
      .map(data => data['alarm'] as Alarm[])
      .toPromise();
  }

  getAlarm(id: number) : Promise<Alarm> {
    return this.http.get<Alarm>(`${this.BASE_URL}/${id}`, this.getOptions())
      .catch(this.handleError)
      .toPromise();
  }

}
