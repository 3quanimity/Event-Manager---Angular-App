import { Routes } from "@angular/router";

import {
  EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivatorService,
  EventListResolver,
  CreateSessionComponent
} from './events/index'

import { Error404Component } from "./errors/404.component";

export const appRoutes: Routes = [
  {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']}, // Route guard using a function
  {path: 'events', component: EventsListComponent, resolve: {events: EventListResolver}}, // before the route is activated, the event list is resolved
  {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService]}, // Route guard using a service
  {path: 'events/session/new', component: CreateSessionComponent},
  {path: '404', component: Error404Component},
  {path:'', redirectTo: '/events', pathMatch: 'full'},
  {
    path: 'user',
    loadChildren: () => import('./user/user.module') // dynamic import return a promess containing the module to be imported
      .then(module => module.UserModule)
    // loadChildren: './user/user.module#UserModule' // lazy loading with deprecated syntax in Angular 8
  }
]
