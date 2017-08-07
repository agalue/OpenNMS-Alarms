import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class AlarmsService {

  private BASE_URL = "https://demo.opennms.org/opennms/rest/alarms";

  constructor(private http: Http) { }

  private getOptions() : RequestOptions {
    let headers = new Headers();
    headers.append('Authorization', 'Basic ' + btoa('demo:demo'));
    headers.append('Accept', 'application/json');
    return new RequestOptions({ headers: headers });    
  }

  getAlarms() : Promise<Object[]> {
    return this.http.get(`${this.BASE_URL}?limit=0`, this.getOptions())
      .map((response: Response) => response.json().alarm)
      .toPromise();
  }

  getAlarm(id: number) : Promise<Object> {
    return this.http.get(`${this.BASE_URL}/${id}`, this.getOptions())
      .map((response: Response) => response.json())
      .toPromise();
  }

}
