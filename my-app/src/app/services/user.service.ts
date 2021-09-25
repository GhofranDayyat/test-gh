import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  APIUrl: string= 'http://localhost:31687/api'
  // APIUrl: string= 'http://localhost:11722/api'

    // APIUrl: string= 'https://jsonplaceholder.typicode.com'

 
  constructor(private http:HttpClient) { }
  cvData : object   = []
  listUsers(){
    return this.http.get(this.APIUrl+'/PersonalInfo')
    // console.log(this.APIUrl+`/PersonalInfo/${}`);
    
  }
  addUser(obj: any){
    return this.http.post(this.APIUrl+'/PersonalInfo', obj)
  }
  deleteUser(personId: any){  
    return this.http.delete(this.APIUrl+'/PersonalInfo/'+personId)
  }

  updateUser(obj: any, personId:any){   
    return this.http.put(this.APIUrl+'/PersonalInfo/'+personId ,obj)
  }
  addPersonIdToCvBucket(id:any){
    console.log(id);
    this.cvData={
      personId:id
    }  
  }


  //Exper
  listUsersExp(){
    return this.http.get(this.APIUrl+'/Experience')
    // console.log(this.APIUrl+`/Experience/${}`);
    
  }
  addUserExp(obj: any){
    return this.http.post(this.APIUrl+'/Experience', obj)
  }
  deleteUserExp(personId: any){  
    return this.http.delete(this.APIUrl+'/Experience/'+personId)
  }

  updateUserExp(obj: any, personId:any){   
    return this.http.put(this.APIUrl+'/Experience/'+personId ,obj)
  }
  addExpIdToCvBucket(id:any){
    console.log(id);
    this.cvData={
      expId:id
    }  
  }


  //cv
  listUsersCv(){
    return this.http.get(this.APIUrl+'/cv')
    // console.log(this.APIUrl+`/cv/${}`);
    
  }
  addUserCv(obj: any){
    this.cvData={
      name:obj.name
    }  
    return this.http.post(this.APIUrl+'/cv', this.cvData)
  }
  deleteUserCv(personId: any){  
    return this.http.delete(this.APIUrl+'/cv/'+personId)
  }

  updateUserCv(obj: any, personId:any){   
    return this.http.put(this.APIUrl+'/cv/'+personId ,obj)
  }
  // addExpIdToCvBucket(id:any){
  //   console.log(id);
  //   this.cvData={
  //     expId:id
  //   }  
  // }


}
