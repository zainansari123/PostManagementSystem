import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { TaskManagementComponent } from './task-management/task-management.component';
import { WorkStatusComponent } from './work-status/work-status.component';


@NgModule({
  declarations: [AdminComponent, AdminLoginComponent, UserManagementComponent, TaskManagementComponent, WorkStatusComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }