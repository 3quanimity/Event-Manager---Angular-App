import { Routes } from "@angular/router";

import { Error404Component } from "./errors/404.component";
import { CreateEventComponent } from "./events/create-event.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { EventsListComponent } from "./events/events-list.component";

import { EventRouteActivatorService } from "./events/event-details/event-route-activator.service";
import { EventListResolver } from "./events/event-list-resolver.service";

export const appRoutes: Routes = [
  {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']}, // Route guard using a function
  {path: 'events', component: EventsListComponent, resolve: {events: EventListResolver}}, // before the route is activated, the event list is resolved
  {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService]}, // Route guard using a service
  {path: '404', component: Error404Component},
  {path:'', redirectTo: '/events', pathMatch: 'full'},
  {
    path: 'user',
    loadChildren: () => import('./user/user.module') // dynamic import return a promess containing the module to be imported
      .then(module => module.UserModule)
    // loadChildren: './user/user.module#UserModule' // lazy loading with deprecated syntax in Angular 8
  }
]
