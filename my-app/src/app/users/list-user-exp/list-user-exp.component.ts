import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-list-user-exp',
  templateUrl: './list-user-exp.component.html',
  styleUrls: ['./list-user-exp.component.css']
})
export class ListUserExpComponent implements OnInit {
  listUsers: any;

  constructor(private UserService:UserService) { }

  ngOnInit(): void {
    this.UserService.listUsersExp().subscribe(data=>{
      this.listUsers =data;
    })
  }
}
