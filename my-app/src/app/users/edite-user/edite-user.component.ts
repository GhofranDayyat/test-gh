import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edite-user',
  templateUrl: './edite-user.component.html',
  styleUrls: ['./edite-user.component.scss']
})
export class EditeUserComponent implements OnInit {
  addUserForm: FormGroup= new FormGroup({})
  userId : string   = '';
  email = new FormControl('', [Validators.required, Validators.email]);




  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private activatedRout: ActivatedRoute,  
    private _snackBar: MatSnackBar
      ) { }
  
      ngOnInit(): void {
      this.addUserForm  = this.formBuilder.group({
        'fullNam':new FormControl('',[Validators.required] ) ,
        'cityNam': new FormControl(''),
        'userEmail':new FormControl('',[Validators.required, Validators.email] ) ,
        'mobileNum':  new FormControl('')
  
      })

      this.activatedRout.params.subscribe(data=>{    
        this.userId = data.id
      });
    }
    getErrorMessage() {
      return this.email.hasError('required') ? 'Not a valid email' :
        this.email.hasError('email') ? 'Not a valid email' : '';
    }
    
    editUser(){
      if(this.addUserForm.valid){     
        if(this.userId){      
          this.userService.updateUser(this.addUserForm.value,this.userId).subscribe(data=>{
          this._snackBar.open('personal Info updated successfully','', {
            duration: 2500,
            panelClass: ['mat-toolbar', 'mat-primary']
        });
        }, err=>{
          console.log(err);
          this._snackBar.open("Unable to update ")
    
        })
      }
    }
  }

}
