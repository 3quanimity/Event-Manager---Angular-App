import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/events.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '.';

@Component({
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr />
      <div class="row">
        <div class="col-md-5" *ngFor="let event of events">
          <event-thumbnail [event]="event"></event-thumbnail>
        </div>
      </div>
    </div>
  `,
})
export class EventsListComponent implements OnInit {
  events!: IEvent[];

  constructor(private eventService: EventService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }
}
