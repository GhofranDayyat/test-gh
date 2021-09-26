import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-delete-user-exp',
  templateUrl: './delete-user-exp.component.html',
  styleUrls: ['./delete-user-exp.component.css']
})
export class DeleteUserExpComponent implements OnInit {
  userId : string   = '';
  constructor(private activatedRout: ActivatedRoute,
   private userService: UserService,
   private _snackBar: MatSnackBar
   ) { }

  ngOnInit(): void {
    this.activatedRout.params.subscribe(data=>{
      console.log(data);

      this.userId = data.id
    });
    if(this.userId){
      this.userService.deleteUserExp(this.userId).subscribe(()=>{
        this._snackBar.open('Experience Info added successfully','', {
          duration: 2500,
          panelClass: ['mat-toolbar', 'mat-primary']
      });
      },err =>{
        this._snackBar.open('unable to deleted successfully')
      })
    }
  }

}
