import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventService,
  EventRouteActivatorService,
  EventListResolver,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe
} from './events/index'

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { Error404Component } from './errors/404.component';
import { CollapasibleWellComponent } from './common/collapsible-well.component';

import { Toastr, TOASTR_TOKEN } from './common/toastr.service';
import { AuthService } from './user/auth.service';

import { appRoutes } from './routes';

declare let toastr: Toastr; // for typescript to recognise toastr as a variable

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    CreateSessionComponent,
    SessionListComponent,
    NavBarComponent,
    Error404Component,
    CollapasibleWellComponent,
    DurationPipe
  ],
  providers: [
    EventService, // short hand for { provide: EventService, useClass: EventService }
    {
      provide: TOASTR_TOKEN,
      useValue: toastr
    },
    EventRouteActivatorService,
    // the following is the same as the above, but with longhand syntax, (useClass)
    // {
    //   provide: EventRouteActivatorService,
    //   useClass: EventRouteActivatorService
    // },
    EventListResolver,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    },
    AuthService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if(component.isDirty) {
    return window.confirm('You have not saved this event, do you really want to cancel?');
  }
  return true;
}
