import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-delete-cv',
  templateUrl: './delete-cv.component.html',
  styleUrls: ['./delete-cv.component.css']
})
export class DeleteCvComponent implements OnInit {

  userId : string   = '';
  constructor(private activatedRout: ActivatedRoute,
   private userService: UserService,
   private _snackBar: MatSnackBar
   ) { }

  ngOnInit(): void {
    this.activatedRout.params.subscribe(data=>{
      this.userId = data.id
    });


    if(this.userId){
      this.userService.deleteCv(this.userId).subscribe(()=>{
        this._snackBar.open('CV deleted successfully','', {
          duration: 2500,
          panelClass: ['mat-toolbar', 'mat-primary']
      });
      },err =>{
        this._snackBar.open('unable to delete CV')
      })
    }
  }

}
