import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { TasksComponent } from './tasks/tasks.component';


@NgModule({
  declarations: [UserComponent, UserLoginComponent, TasksComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
