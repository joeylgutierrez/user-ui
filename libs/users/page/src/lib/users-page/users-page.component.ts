import { Component } from '@angular/core';
import { UsersFacade } from '@user-ui/users/data-access';

@Component({
  selector: 'user-ui-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss'],
})
export class UsersPageComponent {
  users$ = this.userFacade.allUsers$;

  constructor(private userFacade: UsersFacade) {
    this.userFacade.init();
  }
}
