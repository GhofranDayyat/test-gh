import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  userId : string   = '';

  constructor(private activatedRout: ActivatedRoute,
    private userService: UserService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.activatedRout.params.subscribe(data=>{
      this.userId = data.id
      if(this.userId){
            this.userService.addPersonIdToCvBucket(this.userId)
            this._snackBar.open('Personal Info added To CV','', {
              duration: 2500,
              panelClass: ['mat-toolbar', 'mat-primary']
          });
          }


    });
  }

}
