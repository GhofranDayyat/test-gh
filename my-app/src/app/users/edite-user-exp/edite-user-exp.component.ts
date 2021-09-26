import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-edite-user-exp',
  templateUrl: './edite-user-exp.component.html',
  styleUrls: ['./edite-user-exp.component.scss']
})
export class EditeUserExpComponent implements OnInit {

  addUserForm: FormGroup= new FormGroup({})
  userId : string   = '';

  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private _snackBar: MatSnackBar,
    private activatedRout: ActivatedRoute) { }

  ngOnInit(): void {
    this.addUserForm  = this.formBuilder.group({
      'companyName': new FormControl(''),
      'city': new FormControl(''),
      'companyFeild': new FormControl(''),

    
        })
        this.activatedRout.params.subscribe(data=>{    
          this.userId = data.id
        });
        console.log(this.userId ,this.addUserForm.value);       
      }
    
      editUserExp(){
        if(this.addUserForm.valid){     
          if(this.userId){      
            this.userService.updateUserExp(this.addUserForm.value,this.userId).subscribe(()=>{
            this._snackBar.open('Experience Info updated successfully','', {
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
