import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUserComponent } from './list-user/list-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditeUserComponent } from './edite-user/edite-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';



@NgModule({
  declarations: [
    ListUserComponent,
    ViewUserComponent,
    AddUserComponent,
    EditeUserComponent,
    DeleteUserComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
