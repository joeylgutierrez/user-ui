import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable, of } from 'rxjs';

import * as UsersActions from './users.actions';
import { UsersEffects } from './users.effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UsersService } from '../users.service';

describe('UsersEffects', () => {
  let actions: Observable<Action>;
  let effects: UsersEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot(), HttpClientTestingModule],
      providers: [
        UsersEffects,
        provideMockActions(() => actions),
        provideMockStore(),
        {
          provide: UsersService,
          useValue: {
            getUsers: () => of([]),
          },
        },
      ],
    });

    effects = TestBed.inject(UsersEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: UsersActions.init() });

      const expected = hot('-a-|', {
        a: UsersActions.loadUsersSuccess({ users: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
