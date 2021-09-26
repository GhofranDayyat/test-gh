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

    constructor(private http:HttpClient ) { }
  sendObj:any[]=[]
  cvData : object   = {}
  listUsers(){
    return this.http.get(this.APIUrl+'/PersonalInfo')    
  }
  addUser(obj: any){
    return this.http.post(this.APIUrl+'/PersonalInfo',obj)
     
  }
  deleteUser(personId: any){  
    return this.http.delete(this.APIUrl+'/PersonalInfo/'+personId)
  }

  updateUser(obj: any, personId:any){
    console.log(obj,personId);
       
    return this.http.put(this.APIUrl+'/PersonalInfo/'+personId ,obj)
  }
  addPersonIdToCvBucket(id:any){
    this.sendObj[0]=id
  }
  viewPerson(id: any){
    return this.http.get(this.APIUrl+'/PersonalInfo/'+id )

  }

  //Exper
  listUsersExp(){
    return this.http.get(this.APIUrl+'/Experience')
    
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
  addExpIdToExpBucket(id:any){
    this.sendObj[1]=id 
  }

  viewExp(id: any){
    return this.http.get(this.APIUrl+'/Experience/'+id )

  }


  //cv
  listCv(){
    return this.http.get(this.APIUrl+'/cv')
    
  }
  addCv(obj: any){
    this.sendObj[2]=obj.name
    this.cvData={
      personalId:this.sendObj[0] ,
      experId:this.sendObj[1],
      name:this.sendObj[2],
    } 
    if(this.sendObj[0] && this.sendObj[1]){
      console.log('??')
      return this.http.post(this.APIUrl+'/cv', this.cvData)
    };
   return  this.http.get(this.APIUrl+'/cv')

 
  }
  deleteCv(personId: any){  
    return this.http.delete(this.APIUrl+'/cv/'+personId)
  }

  updateCv(obj: any, personId:any){   
    return this.http.put(this.APIUrl+'/cv/'+personId ,obj)
  }
  viewCv(id: any){
    return this.http.get(this.APIUrl+'/cv/'+id )

  }

}
