import { Component, Input, OnChanges } from "@angular/core";
import { ISession } from "../shared/index";

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnChanges {
  @Input() sessions: ISession[] | undefined;
  @Input() filterBy: string = 'all';
  visibleSessions: ISession[] | undefined;

  ngOnChanges(): void { // gonna be called when one of the inputs gets a new value
    if (this.sessions) {
      this.filterSessions(this.filterBy)
    }
  }

  filterSessions(filter:string) {
    if (filter === 'all') {
      this.visibleSessions = this.sessions?.slice(0); // .slice(0) create a copy/clone of the array
    } else {
      this.visibleSessions = this.sessions?.filter(session => session.level.toLocaleLowerCase() === filter);
    }
  }
}
