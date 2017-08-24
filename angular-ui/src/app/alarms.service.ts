import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import 'rxjs/Rx';

import { Alarm } from './alarm';

@Injectable()
export class AlarmsService {

  private BASE_URL = "https://demo.opennms.org/opennms/rest/alarms";

  constructor(private http: HttpClient) { }

  private getOptions() : Object {
    let headers = new HttpHeaders();
    headers.set('Authorization', 'Basic ' + btoa('demo:demo'));
    headers.set('Accept', 'application/json');
    return { headers: headers, withCredentials: true };    
  }

  getAlarms() : Promise<Alarm[]> {
    return this.http.get<Alarm[]>(`${this.BASE_URL}?limit=0`, this.getOptions()).map(data => data['alarm'] as Alarm[]).toPromise();
  }

  getAlarm(id: number) : Promise<Alarm> {
    return this.http.get<Alarm>(`${this.BASE_URL}/${id}`, this.getOptions()).toPromise();
  }

}
