import { Component, Input, OnChanges } from "@angular/core";
import { ISession } from "../shared/index";

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnChanges {
  @Input() sessions: ISession[] | undefined;
  @Input() filterBy: string = 'all';
  @Input() sortBy: string = 'votes';
  visibleSessions: ISession[] | undefined;

  ngOnChanges(): void { // gonna be called when one of the inputs gets a new value
    if (this.sessions) {
      this.filterSessions(this.filterBy);
      this.sortBy === 'name' ? this.visibleSessions?.sort(sortByNameAsc) : this.visibleSessions?.sort(sortByVotesDesc);
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

// implemented outside of the class since they re stateless functions and dont need to be a method of the class
function sortByNameAsc(s1: ISession, s2: ISession) {
  if (s1.name > s2.name) return 1;
  else if (s1.name === s2.name) return 0;
  else return -1;
}

function sortByVotesDesc(s1: ISession, s2: ISession) {
  return s2.voters.length - s1.voters.length;
}
