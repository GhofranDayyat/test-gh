import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './users/add-user/add-user.component';
import { DeleteUserComponent } from './users/delete-user/delete-user.component';
import { EditeUserComponent } from './users/edite-user/edite-user.component';
import { ListUserComponent } from './users/list-user/list-user.component';
import { ViewUserComponent } from './users/view-user/view-user.component';
import { AddUserExpComponent } from './users/add-user-exp/add-user-exp.component';
import { DeleteUserExpComponent } from './users/delete-user-exp/delete-user-exp.component';
import { EditeUserExpComponent } from './users/edite-user-exp/edite-user-exp.component';
import { ListUserExpComponent } from './users/list-user-exp/list-user-exp.component';
import { ViewUserExpComponent } from './users/view-user-exp/view-user-exp.component';
import {AddCvComponent} from './cv/add-cv/add-cv.component'
import {DeleteCvComponent} from './cv/delete-cv/delete-cv.component'
import {ViewCvComponent} from './cv/view-cv/view-cv.component'
import {UpdateCvComponent} from './cv/update-cv/update-cv.component'
import {ListCvComponent} from './cv/list-cv/list-cv.component'

const routes: Routes = [
  {path: 'createPer', component:AddUserComponent},
  {path: 'viewPer/:id', component:ViewUserComponent},
  {path: 'listPer', component:ListUserComponent},
  {path: 'deletePer/:id', component:DeleteUserComponent},
  {path: 'editPer/:id', component:EditeUserComponent},


  {path: 'createExp', component:AddUserExpComponent},
  {path: 'viewExp/:id', component:ViewUserExpComponent},
  {path: 'listExp', component:ListUserExpComponent},
  {path: 'deleteExp/:id', component:DeleteUserExpComponent},
  {path: 'editExp/:id', component:EditeUserExpComponent},


  
  {path: 'createCV', component:AddCvComponent},
  {path: 'viewCV/:id', component:ViewCvComponent},
  {path: 'listCV', component:ListCvComponent},
  {path: 'deleteCV/:id', component:DeleteCvComponent},
  {path: 'updateCV/:id', component:UpdateCvComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
