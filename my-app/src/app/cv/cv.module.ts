import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCvComponent } from './add-cv/add-cv.component';
import { ListCvComponent } from './list-cv/list-cv.component';
import { UpdateCvComponent } from './update-cv/update-cv.component';
import { DeleteCvComponent } from './delete-cv/delete-cv.component';
import { ViewCvComponent } from './view-cv/view-cv.component';


import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS} from '@angular/material/snack-bar';
import {RouterModule} from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';


@NgModule({
  declarations: [
    AddCvComponent,
    ListCvComponent,
    UpdateCvComponent,
    DeleteCvComponent,
    ViewCvComponent
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
    [RouterModule],
    MatGridListModule
  ]
})
export class CvModule { }
