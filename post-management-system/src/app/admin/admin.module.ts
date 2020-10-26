import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { TaskManagementComponent } from './task-management/task-management.component';
import { WorkStatusComponent } from './work-status/work-status.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule,MatSortModule } from '@angular/material';
import { MatFormFieldModule, MatInputModule,MatExpansionModule } from '@angular/material';
import { EntryComponent } from './entry/entry.component';


@NgModule({
  declarations: [AdminComponent, UserManagementComponent, TaskManagementComponent, WorkStatusComponent, EntryComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,MatSortModule,MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class AdminModule { }
