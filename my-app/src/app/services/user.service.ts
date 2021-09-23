import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  APIUrl: string= 'http://localhost:11722/api'
    // APIUrl: string= 'https://jsonplaceholder.typicode.com'

 
  constructor(private http:HttpClient) { }
  listUsers(){
    return this.http.get(this.APIUrl+'/personalInfo')
    // return this.http.get(this.APIUrl+'/personalInfo')
  }
addUser(obj: any){
  return this.http.post(this.APIUrl+'/personalInfo', obj)
}
deleteUser(personId: any){
  console.log(this.http.delete(this.APIUrl+'/personalInfo/'+personId));
  
  return this.http.delete(this.APIUrl+'/personalInfo/'+personId)
}

}
