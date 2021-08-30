import { Expose, Exclude, plainToClass } from 'class-transformer';

export enum UserType {
  REGISTERED = 'registered',
  UNREGISTERED = 'unregistered',
}

export abstract class UsersEntity {
  @Expose() id = '';
  @Expose() emailAddress = '';
  @Expose() languageCode = '';
  @Expose() projectIds: string[] = [];
  @Exclude() userType: UserType = UserType.UNREGISTERED;
}

export class RegisteredUsersEntity extends UsersEntity {
  @Expose() city = '';
  @Expose() company = '';
  @Expose() country = '';
  @Expose() firstName = '';
  @Expose() lastName = '';
  @Expose() organizationType = '';
  @Expose() phone = '';
  @Expose() state = '';
  @Expose() zipCode = '';
  @Expose() disclaimerAccepted = false;

  constructor() {
    super();
    this.userType = UserType.REGISTERED;
  }
}

export class UnregisteredUsersEntity extends UsersEntity {
  @Expose() registrationId = '';
  @Expose() registrationIdGeneratedTime = '';

  constructor() {
    super();
    this.userType = UserType.UNREGISTERED;
  }
}

export class UsersEntityFactory {
  createUser(type: UserType, entity: UsersEntity) {
    if (type === UserType.UNREGISTERED) {
      return plainToClass(UnregisteredUsersEntity, entity, {
        excludeExtraneousValues: true,
      });
    } else {
      return plainToClass(RegisteredUsersEntity, entity, {
        excludeExtraneousValues: true,
      });
    }
  }
}
