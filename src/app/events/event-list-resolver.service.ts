// A resolver is a service that can resolve a route's data for a component
// This resolve route handler waits for the data to load before the component is instantiated

import { Injectable} from '@angular/core';
import { Resolve } from '@angular/router';
import { EventService } from './shared/events.service';
import { map } from 'rxjs/operators';

@Injectable()
export class EventListResolver implements Resolve<any> {
  constructor(private eventService: EventService) {}
  resolve() {
    return this.eventService.getEvents().pipe(map(events => events));
  }
}
