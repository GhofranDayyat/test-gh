import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
addUserForm: FormGroup= new FormGroup({})
email = new FormControl('', [Validators.required, Validators.email]);




constructor(private formBuilder: FormBuilder,
  private userService: UserService,
    private _snackBar: MatSnackBar
    ) { }

    ngOnInit(): void {
    this.addUserForm  = this.formBuilder.group({
      'fullNam':new FormControl('',[Validators.required] ) ,
      'cityNam': new FormControl(''),
      'userEmail':new FormControl('',[Validators.required, Validators.email] ) ,
      'mobileNum':  new FormControl('')

    })
  }
  getErrorMessage() {
    return this.email.hasError('required') ? 'Not a valid email' :
      this.email.hasError('email') ? 'Not a valid email' : '';
  }
 
  createUser(){
    console.log(this.addUserForm.value,this.addUserForm.valid);

    if(this.addUserForm.valid){
        this.userService.addUser(this.addUserForm.value).subscribe(data=>{      
          this._snackBar.open('Personal Info added successfully','', {
            duration: 2500,
            panelClass: ['mat-toolbar', 'mat-primary']
        });
      }, err=>{
        console.log(err);
        this._snackBar.open("Unable to add  successfully")
  
      })
      }      

  }
}
