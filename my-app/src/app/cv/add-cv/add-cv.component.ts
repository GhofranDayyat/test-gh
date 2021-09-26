import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.scss']
})
export class AddCvComponent implements OnInit {

  addUserForm: FormGroup= new FormGroup({})
  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private _snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {

    this.addUserForm  = this.formBuilder.group({
      'personalId': new FormControl(''),
      'experId': new FormControl(''),
      'name': new FormControl(''),

        })
  }


  createCv(){
    this.userService.addCv(this.addUserForm.value).subscribe(data=>{
      this._snackBar.open('CV created successfully','', {
        duration: 2500,
        panelClass: ['mat-toolbar', 'mat-primary']
    });
    }, err=>{
      console.log(err);
      this._snackBar.open("Unable to create CV  successfully")

    })
  }
}
