import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersPageComponent } from './users-page/users-page.component';
import { RouterModule } from '@angular/router';
import { UsersDataAccessModule } from '@user-ui/users/data-access';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: UsersPageComponent }]),
    UsersDataAccessModule,
    MatCardModule,
    MatIconModule,
  ],
  declarations: [UsersPageComponent],
})
export class UsersPageModule {}
