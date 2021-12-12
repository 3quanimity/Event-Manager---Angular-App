import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `
    <h2>Hello World</h2>
    <img src="/assets/images/basic-shield.png" />
  `,
})
export class EventsAppComponent {
  title = 'event-manager';
}
