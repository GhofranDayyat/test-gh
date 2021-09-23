import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './users/add-user/add-user.component';
import { DeleteUserComponent } from './users/delete-user/delete-user.component';
import { EditeUserComponent } from './users/edite-user/edite-user.component';
import { ListUserComponent } from './users/list-user/list-user.component';
import { ViewUserComponent } from './users/view-user/view-user.component';

const routes: Routes = [
  {path: 'create', component:AddUserComponent},
  {path: 'view/:id', component:ViewUserComponent},
  {path: 'list', component:ListUserComponent},
  {path: 'delete/:id', component:DeleteUserComponent},
  {path: 'edit/:id', component:EditeUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
