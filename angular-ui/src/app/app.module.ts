import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AlarmsComponent } from './alarms/alarms.component';
import { AlarmItemComponent } from './alarm-item/alarm-item.component';
import { AlarmComponent } from './alarm/alarm.component';

import { AlarmsService } from './alarms.service';

const appRoutes: Routes = [
  { path: '', redirectTo: 'alarms', pathMatch: 'full' },
  { path: 'alarms', component: AlarmsComponent },
  { path: 'alarms/:id', component: AlarmComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AlarmsComponent,
    AlarmComponent,
    AlarmItemComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AlarmsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
