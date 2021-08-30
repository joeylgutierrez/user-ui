import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersPageComponent } from './users-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UsersFacade } from '@user-ui/users/data-access';
import { of } from 'rxjs';

describe('UsersPageComponent', () => {
  let component: UsersPageComponent;
  let fixture: ComponentFixture<UsersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: UsersFacade,
          useValue: {
            init: () => null,
            allUsers$: of([]),
          },
        },
      ],
      declarations: [UsersPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
