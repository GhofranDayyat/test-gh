import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  APIUrl: string= 'http://localhost:39649/api'
  // APIUrl: string= 'http://localhost:11722/api'

    // APIUrl: string= 'https://jsonplaceholder.typicode.com'

 
  constructor(private http:HttpClient) { }
  listUsers(){
    console.log(this.APIUrl+'/PersonalInfo');
    return this.http.get(this.APIUrl+'/PersonalInfo')
    
  }
addUser(obj: any){
  return this.http.post(this.APIUrl+'/PersonalInfo', obj)
}
deleteUser(personId: any){
  console.log(this.http.delete(this.APIUrl+'/PersonalInfo/'+personId));
  
  return this.http.delete(this.APIUrl+'/PersonalInfo/'+personId)
}

}
