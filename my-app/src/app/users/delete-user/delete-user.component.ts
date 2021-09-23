import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
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
      this.userService.deleteUser(this.userId).subscribe(data=>{
        this._snackBar.open('user deleted successfully')
      },err =>{
        this._snackBar.open('user unable to deleted successfully')
      })
    }
  }

}
