import { Routes } from "@angular/router";

import { Error404Component } from "./errors/404.component";
import { CreateEventComponent } from "./events/create-event.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { EventsListComponent } from "./events/events-list.component";

import { EventRouteActivatorService } from "./events/event-details/event-route-activator.service";

export const appRoutes: Routes = [
  {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']}, // Route guard using a function
  {path: 'events', component: EventsListComponent},
  {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService]}, // Route guard using a service
  {path: '404', component: Error404Component},
  {path:'', redirectTo: '/events', pathMatch: 'full'}
]
