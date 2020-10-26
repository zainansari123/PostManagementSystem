import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { EntryComponent } from './entry/entry.component';
import { TaskManagementComponent } from './task-management/task-management.component';
import { UserManagementComponent } from './user-management/user-management.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  {path:'user-management', component:UserManagementComponent},
  {path:'entry', component:EntryComponent},
  {path:'task-management', component:TaskManagementComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
