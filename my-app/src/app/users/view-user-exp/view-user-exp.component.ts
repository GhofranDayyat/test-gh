import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-view-user-exp',
  templateUrl: './view-user-exp.component.html',
  styleUrls: ['./view-user-exp.component.css']
})
export class ViewUserExpComponent implements OnInit {

  userId : string   = '';

  constructor(private activatedRout: ActivatedRoute,
    private userService: UserService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.activatedRout.params.subscribe(data=>{
      console.log(data);

      this.userId = data.id
      if(this.userId){
            this.userService.addPersonIdToCvBucket(this.userId)
      }
    });
  }

}
