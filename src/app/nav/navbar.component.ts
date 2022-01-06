import { Component } from '@angular/core';
import { ISession, EventService } from '../events';
import { AuthService } from '../user/auth.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styles: [`
    .nav.navbar-nav {font-size: 15px;}
    #searchForm {margin-right: 100px;}
    @media (max-width: 1200px) {#searchForm {display:none}}
    li > .active {color: #F97924;}
  `]
})

export class NavBarComponent {
  searchTerm: string = "";
  foundSessions: ISession[] | undefined;

  constructor(public authService: AuthService, private eventService: EventService) {}

  searchSessions(searchTerm: string) {
    console.log(searchTerm);
    this.eventService.searchSessions(searchTerm).subscribe(sessions => {
      this.foundSessions = sessions;
    })
    console.log(this.foundSessions)
  }
}
