import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';

import { UserComponent } from './user.component';

const routes: Routes = [{ path: '', component: UserComponent },{path:'tasks',component:TasksComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
