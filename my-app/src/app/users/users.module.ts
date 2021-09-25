import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUserComponent } from './list-user/list-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditeUserComponent } from './edite-user/edite-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS} from '@angular/material/snack-bar';
import {RouterModule} from '@angular/router';
import { AddUserExpComponent } from './add-user-exp/add-user-exp.component';
import { ViewUserExpComponent } from './view-user-exp/view-user-exp.component';
import { ListUserExpComponent } from './list-user-exp/list-user-exp.component';
import { EditeUserExpComponent } from './edite-user-exp/edite-user-exp.component';
import { DeleteUserExpComponent } from './delete-user-exp/delete-user-exp.component';

@NgModule({
  declarations: [
    ListUserComponent,
    ViewUserComponent,
    AddUserComponent,
    EditeUserComponent,
    DeleteUserComponent,
    AddUserExpComponent,
    ViewUserExpComponent,
    ListUserExpComponent,
    EditeUserExpComponent,
    DeleteUserExpComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    [RouterModule]
  ],
  providers: [
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS , useValue: {duration: 1500}} //male snack bar go away after this duration
  ]
})
export class UsersModule { }
