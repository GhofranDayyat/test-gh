import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
addUserForm: FormGroup= new FormGroup({})
  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private _snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
this.addUserForm  = this.formBuilder.group({
  'fullNam': new FormControl(''),
  'cityNam': new FormControl(''),
  'userEmail': new FormControl(''),
  'mobileNum': new FormControl('')

    })
  }

  createUser(){
    console.log(this.addUserForm.value);

    this.userService.addUser(this.addUserForm.value).subscribe(data=>{
      console.log('user created');
      this._snackBar.open("user created successfully")
      
    }, err=>{
      console.log(err);
      this._snackBar.open("Unable to create  successfully")

    })
  }
}
