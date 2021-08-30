import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';
import { HttpClientModule } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { take } from 'rxjs/operators';
import {
  RegisteredUsersEntity,
  UnregisteredUsersEntity,
  UsersEntity,
} from '../../../data-access/src/lib/+state/users.models';

describe('UsersService', () => {
  let service: UsersService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
    });
    service = TestBed.inject(UsersService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getUsers', () => {
    it('should return a list of users and map them to registered or unregistered', () => {
      const users: unknown[] = [
        {
          id: '1',
          emailAddress: 'test@test.com',
          languageCode: 'en',
          projectIds: '1,2',
          userType: 'registered',
          city: 'denver',
          company: 'MC',
          country: 'us',
          firstName: 'test',
          lastName: 'mcTester',
          organizationType: 'llc',
          phone: '111-222-3333',
          state: 'CO',
          zipCode: '80021',
          disclaimerAccepted: false,
          foobar: 'testing',
        },
        {
          id: '2',
          emailAddress: 'test2@test.com',
          languageCode: 'en',
          projectIds: '3,4',
          userType: 'unregistered',
          registrationId: '1234',
          registrationIdGeneratedTime: '11231231214',
          bar: 'foobar',
        },
      ];

      service
        .getUsers()
        .pipe(take(1))
        .subscribe((users: UsersEntity[]) => {
          expect(users.length).toEqual(2);
          expect(users[0].userType).toEqual('registered');
          expect(users[0]).not.toHaveProperty('foobar');
          expect(users[0] instanceof RegisteredUsersEntity).toBeTruthy();
          expect(users[1].userType).toEqual('unregistered');
          expect(users[1]).not.toHaveProperty('bar');
          expect(users[1] instanceof UnregisteredUsersEntity).toBeTruthy();
        });

      const request = httpTestingController.expectOne('api/users');
      expect(request.request.method).toBe('GET');
      request.flush(users);
      httpTestingController.verify();
    });
  });
});
