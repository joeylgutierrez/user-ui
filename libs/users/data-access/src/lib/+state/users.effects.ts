import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as UsersActions from './users.actions';
import * as UsersFeature from './users.reducer';
import { UsersService } from '../users.service';
import { map } from 'rxjs/operators';

@Injectable()
export class UsersEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.init),
      fetch({
        run: () => {
          return this.usersService.getUsers()
            .pipe(
              map(users => UsersActions.loadUsersSuccess({ users: users }))
            );
        },
        onError: (action, error) => {
          console.error('Error', error);
          return UsersActions.loadUsersFailure({ error });
        },
      })
    )
  );

  constructor(private readonly actions$: Actions, private usersService: UsersService) {}
}
