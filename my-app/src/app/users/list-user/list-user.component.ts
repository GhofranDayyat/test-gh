import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  listUsers: any;

  constructor(private UserService:UserService) { }

  ngOnInit(): void {
    this.UserService.listUsers().subscribe(data=>{
      this.listUsers =data;
    })
  }

}
