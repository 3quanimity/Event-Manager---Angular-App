import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { EventService } from '../shared/events.service';

@Injectable({providedIn: 'root'})
export class EventRouteActivatorService implements CanActivate{
  constructor(private eventService: EventService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot) {
    const eventExist = !!this.eventService.getEvent(+route.params['id']);

    if (!eventExist) {
      return this.router.navigate(['/404'])
    }

    return eventExist;
  }
}
