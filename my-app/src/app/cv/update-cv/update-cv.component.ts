import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-update-cv',
  templateUrl: './update-cv.component.html',
  styleUrls: ['./update-cv.component.scss']
})
export class UpdateCvComponent implements OnInit {

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
        'personalId': new FormControl(''),
        'experId': new FormControl(''),
        'name': new FormControl('')
  
      })

      this.activatedRout.params.subscribe(data=>{    
        this.userId = data.id
      });
    }
    getErrorMessage() {
      return this.email.hasError('required') ? 'Not a valid email' :
        this.email.hasError('email') ? 'Not a valid email' : '';
    }
    
    updateCv(){
      if(this.addUserForm.valid){
  
        this.userService.updateCv(this.addUserForm.value,this.userId).subscribe(data=>{
        if (data==='cv post is Successeded !! ') {
            
            this._snackBar.open('CV updated successfully','', {
              duration: 2500,
              panelClass: ['mat-toolbar', 'mat-primary']
          });
        }else{
          console.log('data');
          
            alert('Please Add your Personal and Experience')
            this._snackBar.open('Please Add your Personal and Experience','', {
              duration: 2500,
              panelClass: ['mat-toolbar', 'mat-primary']
          });
        }     
      },err =>{
        this._snackBar.open('unable to update CV')
      });
      
    }
  }

}
