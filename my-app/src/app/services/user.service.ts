import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  APIUrl: string= 'http://localhost:11722/api'
  constructor(private http:HttpClient) { }
  listUsers(){
    return this.http.get(this.APIUrl+'/personalInfo')
  }


}
