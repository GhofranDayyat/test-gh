import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-add-user-exp',
  templateUrl: './add-user-exp.component.html',
  styleUrls: ['./add-user-exp.component.scss']
})
export class AddUserExpComponent implements OnInit {
  addUserForm: FormGroup= new FormGroup({})
  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private _snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.addUserForm  = this.formBuilder.group({
      'companyName': new FormControl(''),
      'city': new FormControl(''),
      'companyFeild': new FormControl(''),

        })
  }

  createUserExp(){
    // console.log(this.addUserForm.value);
    if(this.addUserForm.valid){     
      this.userService.addUserExp(this.addUserForm.value).subscribe(()=>{
        this._snackBar.open('Personal Info added successfully','', {
          duration: 2500,
          panelClass: ['mat-toolbar', 'mat-primary']
      });
        
      }, err=>{
        console.log(err);
        this._snackBar.open("Unable to Added  successfully")
  
      })
    }
  }
}
