import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-cv',
  templateUrl: './list-cv.component.html',
  styleUrls: ['./list-cv.component.scss']
})
export class ListCvComponent implements OnInit {
  listCv: any;

  constructor(private UserService:UserService) { }

  ngOnInit(): void {

    this.UserService.listCv().subscribe(data=>{      
      this.listCv =data;
    })

    
  }

}
