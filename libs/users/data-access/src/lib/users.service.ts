import { Injectable } from '@angular/core';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { UsersEntity, UsersEntityFactory } from '@user-ui/users/data-access';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { ConfigService } from '../../../../../apps/demo/src/app/services/config.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private userFactory: UsersEntityFactory = new UsersEntityFactory();
  constructor(private http: HttpClient, private config: ConfigService) {}

  getUsers() {
    return this.http.get<UsersEntity[]>(`${this.config.userApi}/users`).pipe(
      map((response) => {
        return response.map((user: UsersEntity) => {
          return this.userFactory.createUser(
            user.userType,
            user
          ) as UsersEntity;
        });
      })
    );
  }
}
