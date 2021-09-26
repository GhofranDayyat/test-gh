import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-cv',
  templateUrl: './view-cv.component.html',
  styleUrls: ['./view-cv.component.scss']
})
export class ViewCvComponent implements OnInit {
  cvId : string   = '';
  listCv:any;
  personalId:any;
  expId:any;
  personalInfoDetails:any;
  experienceInfoDetails:any;
  constructor(private activatedRout: ActivatedRoute,
    private UserService: UserService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.activatedRout.params.subscribe(data=>{
      console.log(data);

      this.cvId = data.id
      if(this.cvId){

        this.UserService.viewCv(this.cvId).subscribe(data=>{      
          this.listCv =data;
          
          this.personalId=this.listCv[0].personalId;
          this.expId=this.listCv[0].experId;  
                    
          this.UserService.viewPerson(this.personalId).subscribe(data=>{
            this.personalInfoDetails=data
            console.log(this.personalInfoDetails[0]);
            
          })
          
          this.UserService.viewExp(this.expId).subscribe(data=>{
            this.experienceInfoDetails=data
            console.log(this.experienceInfoDetails);
          })
        })
          
          
      }

    });
  }

}
